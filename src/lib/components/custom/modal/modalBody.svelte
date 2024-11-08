<script lang="ts">
	import { type Snippet } from 'svelte';
	import { cn } from 'utils/utils';
	let { children, class: className }: { children: Snippet | undefined; class?: string } = $props();
</script>

{#if children}
	<div class={cn('relative h-full', className)}>
		<div class="modal-body overflow-y-auto overscroll-contain scroll-smooth p-6">
			{@render children()}
		</div>
		<div aria-hidden="true" class="w-full lg:h-[73px]"></div>
	</div>
{/if}

<style>
	@media (max-width: 768px) {
		.modal-body {
			max-height: calc(80vh - 146px) !important;
		}
	}

	@media (min-width: 1024px) {
		.modal-body {
			max-height: calc(626px - 146px) !important;
		}
	}
</style>
