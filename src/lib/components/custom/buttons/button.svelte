<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cn } from 'utils/utils';
	import { buttonStyle, type Props } from './button.types';
	import Loading from '../../animations/loading.svelte';

	let {
		children,
		disabled = false,
		loading = false,
		type = 'button',
		color = 'default',
		size = 'md',
		border = 'lg',
		href = undefined,
		align = 'center',
		ref = undefined,
		class: className,
		...restProps
	}: {
		children: Snippet;
		disabled: boolean;
		loading: boolean;
		type: HTMLButtonAttributes['type'];
		color: Props['color'];
		size: Props['size'];
		border: Props['border'];
		href: string | undefined;
		align: Props['align'];
		ref: HTMLButtonElement | HTMLAnchorElement | undefined;
		class: string;
	} = $props();
</script>

{#if href != undefined}
	<a bind:this={ref} {href} class={cn(buttonStyle({ color, size, border, align }), className)}>
		{#if loading}
			<Loading size="sm" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
		{:else}
			{@render children()}
		{/if}
	</a>
{:else}
	<button
		bind:this={ref}
		{type}
		{...restProps}
		disabled={disabled || loading}
		class={cn(buttonStyle({ color, size, border, align }), className)}>
		{#if loading}
			<Loading size="sm" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
		{/if}
		{@render children()}
	</button>
{/if}
