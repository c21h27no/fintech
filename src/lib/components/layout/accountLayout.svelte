<script lang="ts">
	import { type Snippet } from 'svelte';
	let { start, center, end }: { start: Snippet; center: Snippet; end: Snippet } = $props();
	let isMobile = $state();

	$effect(() => {
		isMobile = window.innerWidth < 767;
		window.addEventListener('resize', () => {
			isMobile = window.innerWidth < 767;
		});
	});
</script>

{#if isMobile}
	<div class="flex flex-col gap-5">
		{@render start()}
		{@render center()}
		{@render end()}
	</div>
{:else}
	<div class="w-full">
		<div class="grid grid-cols-1 gap-5 self-baseline md:grid-cols-6 lg:grid-cols-8">
			<div class="col-span-1 md:col-span-2 lg:col-span-2">{@render start()}</div>
			<div class="col-span-1 flex flex-col gap-5 md:col-span-4 lg:col-span-6">
				<div class="col-span-1 grid grid-cols-1 gap-5 md:col-span-2 md:grid-cols-8 lg:grid-cols-12">
					<div class="col-span-1 flex flex-col gap-5 md:col-span-4 lg:col-span-8">{@render center()}</div>
					<div class="col-span-1 flex flex-col gap-5 md:col-span-4 lg:col-span-4">{@render end()}</div>
				</div>
			</div>
		</div>
	</div>
{/if}
