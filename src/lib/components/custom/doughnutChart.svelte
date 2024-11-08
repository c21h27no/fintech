<script lang="ts">
	import { onMount } from 'svelte';

	const {
		data = [30, 70],
		colors = ['#FF6384', '#36A2EB'],
		text,
		innerRadiusRatio = 0.9,
		width = 200,
		height = 200
	}: {
		data: number[];
		colors: string[];
		text: string;
		innerRadiusRatio: number;
		width: number;
		height: number;
	} = $props();

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	const animationIncrement: number = 0.1;
	let total: number = data.reduce((acc: number, value: number) => acc + value, 0);
	let startAngle: number = 0;
	let animationProgress: number = 0;

	onMount(() => {
		ctx = canvas.getContext('2d');
		drawDoughnutChart();
		animate();
	});

	function animate() {
		if (ctx) {
			if (animationProgress >= 1) return;
			ctx.clearRect(0, 0, width, height);
			data.forEach((value, index) => {
				const sliceAngle = (value / total) * 2 * Math.PI;
				const animatedAngle = sliceAngle * animationProgress;
				drawSlice(startAngle, startAngle + animatedAngle, colors[index]);
				startAngle += sliceAngle;
			});
			animationProgress += animationIncrement;
			requestAnimationFrame(animate);
		}
	}

	function drawDoughnutChart(): void {
		total = data.reduce((acc: number, value: number) => acc + value, 0);
		startAngle = 0;
		animationProgress = 0;
	}

	function drawSlice(startAngle: number, endAngle: number, color: string): void {
		ctx.beginPath();
		ctx.moveTo(width / 2, height / 2);
		ctx.arc(width / 2, height / 2, width / 2, startAngle, endAngle);
		ctx.arc(width / 2, height / 2, (width / 2) * innerRadiusRatio, endAngle, startAngle, true);
		ctx.closePath();
		ctx.fillStyle = color;
		ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
		ctx.shadowBlur = 0;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.fill();
		ctx.beginPath();
		ctx.arc(width / 2, height / 2, 10, 0, 2 * Math.PI);
		ctx.fillStyle = 'white';
		ctx.fill();

		ctx.font = '18px Arial';
		ctx.fillStyle = 'white'; // Белый цвет фона
		ctx.fillRect(width / 2 - 50, height / 2 + 8 / 2 - 20, 100, 40); // Рисуем прямоугольник под текстом
		ctx.fillStyle = 'black'; // Черный цвет текста
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle'; // Изменяем базовую линию текста на middle
		ctx.fillText(text, width / 2, height / 2 + 8 / 2); // Добавляем половину высоты текста для выравнивания по центру
	}
</script>

<canvas bind:this={canvas} {width} {height} class="mx-auto my-4 font-DrukWide"></canvas>

<style>
	canvas {
		display: block;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		border-radius: 50%;
	}
</style>
