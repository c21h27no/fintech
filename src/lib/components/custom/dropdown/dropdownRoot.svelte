<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { createDropdownState } from './root.svelte';
	import { clickOutside } from 'utils/event';
	import { cn } from 'utils/utils';
	import { quintOut } from 'svelte/easing';

	let {
		active = $bindable(false),
		class: className,
		alignment = 'center',
		children
	}: {
		active: boolean;
		class?: string;
		alignment?: 'left' | 'right' | 'center' | undefined;
		children: Snippet;
	} = $props();

	const rootState = createDropdownState({
		isActive: active,
		alignment: alignment,
		transY: -10
	});
	setContext('dropdown', rootState);
	$effect(() => {
		active = rootState.getIsActive();
	});

	$effect(() => {
		if (active) {
			rootState.setIsActive(true);
		} else {
			rootState.setIsActive(false);
		}
	});
</script>

{#if active}
	<div in:fade|local out:fade|local use:clickOutside={() => rootState.setIsActive(false)} class={cn('relative', className)}>
		{@render children()}
	</div>
{/if}
