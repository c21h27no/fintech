<script lang="ts">
	import BlurFade from 'components/animations/blurFade.svelte';
	import { cn } from 'utils/utils';
	let { current = 3000, limit = 5000 }: { current: number; limit: number } = $props();
	let progress = (current / limit) * 100;
</script>

<div class="w-full rounded-lg border bg-white px-5 py-3">
	<div class="mb-4 flex items-center justify-between">
		<div class="flex flex-col gap-1">
			<h6 class=" text-sm">Limit tracker</h6>
			<span class="font-paysage text-xs">Monthly payment limit</span>
		</div>
	</div>
	<div class="my-2 h-3 w-full">
		<div class="flex h-full w-full items-center overflow-hidden rounded-lg border">
			<div class={cn(`h-full flex-shrink flex-grow bg-green-200`)}></div>
			<div class={cn(`h-full flex-shrink bg-red-50`)} style={`flex-basis: ${progress}%;`}></div>
		</div>
	</div>
	<div class="h-12 w-full overflow-hidden rounded-lg border bg-slate-50">
		<div class="flex divide-x px-2 py-2">
			<div class="flex basis-1/2 flex-col items-center justify-center">
				<p class=" text-[0.6rem]">Current limit</p>
				<BlurFade delay={0.25}>
					<span class="font-paysage text-sm font-medium">${current}</span>
				</BlurFade>
			</div>
			<div class="flex basis-1/2 flex-col items-center justify-center">
				<p class="text-[0.6rem]">Max limit</p>
				<BlurFade delay={0.25}>
					<span class="font-paysage text-sm font-medium">${limit}</span>
				</BlurFade>
			</div>
		</div>
	</div>
</div>
