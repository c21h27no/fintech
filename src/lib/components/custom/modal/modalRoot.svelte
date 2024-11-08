<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { createModalState } from './root.svelte.js';

	let {
		active = $bindable(false),
		children
	}: {
		active: boolean;
		children: Snippet;
	} = $props();

	let dialog: HTMLDialogElement;

	const rootState = createModalState({
		isActive: active
	});

	setContext('modal', rootState);
	$effect(() => {
		active = rootState.getIsActive();
	});

	$effect(() => {
		if (active) {
			document.body.style.overflowY = 'hidden';
			dialog.showModal();
			rootState.setIsActive(true);
		} else {
			rootState.setIsActive(false);
			document.body.style.overflowY = 'scroll';
			const id = setTimeout(() => {
				dialog.close();
				clearTimeout(id);
			}, 250);
		}
	});
</script>

<dialog bind:this={dialog} tabindex="-1">
	<div
		class="fixed left-0 top-0 flex h-full w-full place-items-center items-center justify-center bg-opacity-[0.25] backdrop-blur-sm transition-opacity duration-300 dark:bg-opacity-[0.75]">
		{@render children()}
	</div>
</dialog>
