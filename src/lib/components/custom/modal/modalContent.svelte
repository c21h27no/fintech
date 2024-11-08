<script lang="ts">
	import { fly } from 'svelte/transition';
	import { getContext, type Snippet } from 'svelte';
	import { clickOutside } from '$lib/utils/event.js';
	import { cn } from 'utils/utils';

	let { class: className, children }: { class?: string; children: Snippet } = $props();

	// Get the state of the select from the context
	const rootState = getContext<{
		getIsActive: () => boolean;
		setIsActive: (value: boolean) => void;
	}>('modal');
</script>

{#if rootState.getIsActive()}
	<div
		in:fly|local={{ y: '10vh', duration: 500, opacity: 0 }}
		out:fly|local={{ y: '10vh', duration: 500, opacity: 0 }}
		use:clickOutside={() => {
			rootState.setIsActive(false);
		}}
		role="dialog"
		class={cn('relative max-h-[626px] min-h-32 min-w-96 overflow-hidden rounded-lg border bg-white', className)}>
		{@render children()}
	</div>
{/if}
