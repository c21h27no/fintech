<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils/utils';

	let {
		name = '',
		thisIconReturn,
		viewBox,
		class: className
	} = $props<{ name: string; thisIconReturn: string; viewBox: string; class: string }>();

	if (!name) {
		throw new Error('check name in: icons component or path');
	}

	onMount(async () => {
		const iconsImport = import.meta.glob('../assets/icons/**/**.svg', {
			eager: false,
			query: '?raw',
			import: 'default'
		});
		const rawIcon: any = await iconsImport[`../assets/icons/${name}.svg`]();
		viewBox = rawIcon.match(/<svg[^>]+viewBox="([^"]+)"/)?.[1];
		const elements = rawIcon.replace(/<svg[^>]+>/, '').replace('</svg>', '');

		thisIconReturn = elements;
	});
</script>

{#if thisIconReturn}
	<svg xmlns="http://www.w3.org/2000/svg" {viewBox} width="35px" height="35px" class={cn(className)}>
		{@html thisIconReturn}
	</svg>
{/if}
