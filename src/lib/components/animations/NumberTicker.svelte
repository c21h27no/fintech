<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { spring, tweened } from 'svelte/motion';
	import { cn } from '$lib/utils/utils';

	let {
		value = 100,
		initial = 0,
		duration = 6000,
		class: className,
		...restProps
	}: { value: number; initial: number; duration: number; class: string } = $props();

	let num = tweened(initial, {
		duration: duration,
		easing: cubicOut
	});
	onMount(() => {
		num.set(value);
	});
</script>

<div class={cn('inline-block  tracking-normal text-black dark:text-white', className)} {...restProps}>
	{$num.toFixed(2)}
</div>
