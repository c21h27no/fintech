<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import { fly, slide } from 'svelte/transition';
	import { cn } from 'utils/utils';

	let {
		class: className,
		children
	}: {
		class?: string;
		children: Snippet;
	} = $props();

	// Get the state of the select from the context
	const rootState = getContext<{
		alignment: 'left' | 'right' | 'center';
		getIsActive: () => boolean;
		setIsActive: (value: boolean) => void;
		getTransY: () => number;
	}>('dropdown');

	let alightmentClass = $derived.by(() => {
		if (rootState.alignment === 'left') {
			return 'left-0';
		} else {
			return 'right-0';
		}
	});
</script>

{#if rootState.getIsActive()}
	<div
		in:fly|local={{ y: '5vh', duration: 500, opacity: 1 }}
		out:fly|local={{ y: '2vh', duration: 500, opacity: 1 }}
		class={cn('absolute top-3 h-auto w-auto', alightmentClass)}>
		<div class={cn('min-w-48 space-y-1 rounded-md border bg-white shadow-lg ring-1 ring-black ring-opacity-5', className)}>
			{@render children()}
		</div>
	</div>
{/if}
