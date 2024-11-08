<script lang="ts">
	import DoughnutChart from 'components/custom/doughnutChart.svelte';

	let data = [10, 20, 30, 5, 10, 10];
	let colors = ['#FF6384', '#36A2EB', '#ec5633', '#4BC0C0', '#9966FF', '#FFCD56'];
</script>

<div class="min-h-64 w-full overflow-hidden rounded-lg border bg-white">
	<div class="relative flex h-full w-full gap-2 px-5 py-3">
		<div class="relative flex w-1/2 flex-col">
			<h5 class="mb-2 text-base font-medium">Total expenses in September</h5>
			<div class="mb-auto"></div>
			<div class="flex items-center gap-2"></div>
		</div>
		<div class="flex w-1/2 flex-col justify-center">
			<div class="self-end">
				<DoughnutChart width={150} height={150} {data} {colors} text={'$3,921'} />
			</div>
		</div>
	</div>
</div>
