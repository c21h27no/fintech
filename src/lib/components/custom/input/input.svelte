<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { inputStyle, type Props } from './input.types';
	import { cn } from 'utils/utils';
	import generateUUID from 'utils/services/generateUUID';
	import Icons from 'components/Icons.svelte';

	let {
		id = undefined,
		label = undefined,
		placeholder = 'Enter',
		value = $bindable(''),
		type = 'text',
		name = undefined,
		color = 'default',
		disabled = false,
		readonly = false,
		required = false,
		iconPath = undefined,
		iconPlacement = undefined,
		class: className,
		...restProps
	}: {
		id?: string | undefined;
		label?: string | undefined;
		placeholder: string;
		value: HTMLInputAttributes['value'];
		type?: HTMLInputAttributes['type'];
		name?: string | undefined;
		color: Props['color'];
		disabled?: Props['disabled'];
		readonly?: boolean;
		required?: boolean | undefined;
		iconPath?: string | undefined;
		iconPlacement?: Props['iconPlacement'];
		class?: string;
	} = $props();

	let inputID = $derived.by(() => {
		if (id) {
			return id;
		}
		return generateUUID();
	});
</script>

<div class="relative">
	<input
		bind:value
		{...restProps}
		{disabled}
		{required}
		{readonly}
		{name}
		{placeholder}
		{type}
		id={inputID}
		class={cn(inputStyle({ color, iconPlacement, disabled }), className)} />
	{#if iconPath}
		<Icons name={iconPath} class={cn(`absolute left-2.5 top-2.5 h-5 w-5 text-slate-600`)} />
	{/if}
</div>
