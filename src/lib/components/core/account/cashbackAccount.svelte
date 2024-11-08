<script lang="ts">
	import { CURRENT_SHORT_DATE } from '$lib/constants';
	import BlurFade from 'components/animations/blurFade.svelte';

	const cashback = [
		{
			title: 'Mcdonalds',
			img: 'https://image.similarpng.com/very-thumbnail/2021/11/Mcdonalds-logo-on-transparent-background-PNG.png'
		},
		{
			title: 'Adobe',
			img: 'https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg'
		},
		{
			title: 'Maggi',
			img: 'https://cdn.worldvectorlogo.com/logos/maggi-4.svg'
		},
		{
			title: 'After',
			img: 'https://cdn.worldvectorlogo.com/logos/after-effects-1.svg'
		},
		{
			title: 'KitKat',
			img: 'https://cdn.worldvectorlogo.com/logos/kitkat-1.svg'
		}
	];
</script>

<div class="w-full rounded-lg border bg-white px-5 py-3">
	<div class="mb-4 flex items-center justify-between">
		<div class="flex flex-col gap-1">
			<h6 class="text-sm">Cashback</h6>
		</div>
	</div>
	<div class="">
		<div class="flex -space-x-3 rtl:space-x-reverse">
			{#each cashback as title}
				<img class="h-8 w-8 rounded-full border dark:border-gray-800" src={title.img} alt="" />
			{/each}
		</div>
		<div class="mt-4 flex flex-col">
			<div class="flex items-center justify-between">
				<span class="font-paysage text-xs">Balance:</span>
				<BlurFade delay={0.25}><span class="font-paysage text-xs">$28.32</span></BlurFade>
			</div>
			<div class="flex items-center">
				<span class="font-paysage text-xs">Cashback for {CURRENT_SHORT_DATE}</span>
			</div>
		</div>
	</div>
</div>
