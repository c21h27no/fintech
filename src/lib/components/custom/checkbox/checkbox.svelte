<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icons from 'components/Icons.svelte';
	import { cn } from 'utils/utils';

	let {
		id = undefined,
		children,
		checked = $bindable(false),
		disabled = false,
		name,
		class: className,
		...restProps
	}: {
		id: string | undefined;
		children: Snippet;
		checked: boolean;
		name: string | undefined;
		disabled: boolean;
		class: string;
	} = $props();
</script>

<div class="inline-flex items-center">
	<label class="relative flex cursor-pointer items-center" for={id}>
		<input
			{id}
			{...restProps}
			bind:checked
			type="checkbox"
			{name}
			aria-checked={checked}
			onclick={() => (checked = !checked)}
			class={cn(
				'peer h-5 w-5 shrink-0 cursor-pointer appearance-none rounded border border-slate-300 transition-all focus:ring-1 focus:ring-blue-100 focus:ring-offset-2',
				className
			)} />
		<span
			class={cn(
				'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ',
				checked ? 'peer-checked:opacity-100' : 'opacity-0'
			)}>
			<Icons name="checkMark" class="h-3.5 w-3.5" />
		</span>
	</label>
	<label class="ml-2 cursor-pointer text-sm text-slate-600" for={id}> {@render children()}</label>
</div>
