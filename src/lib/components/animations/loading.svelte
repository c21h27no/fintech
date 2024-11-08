<script lang="ts">
	let {
		size = 'md',
		class: className
	}: {
		size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		class: string;
	} = $props();
</script>

<div class="loading-container group/loading flex gap-1 {className}" data-size={size}>
	<span
		class="animate-loading-blink rounded-full bg-gray-200
		transition-all group-data-[size='lg']/loading:size-2 group-data-[size='md']/loading:size-1.5 group-data-[size='sm']/loading:size-1 group-data-[size='xl']/loading:size-2.5
		group-data-[size='xs']/loading:size-0.5 group-data-[type='error']/loading:bg-red-500 group-data-[type='success']/loading:bg-blue-600
		group-data-[type='warning']/loading:bg-orange-300 group-data-[type='error']/loading:dark:bg-red-600
		group-data-[type='warning']/loading:dark:bg-orange-400"></span>
	<span
		class="animate-loading-blink rounded-full bg-gray-200
		transition-all group-data-[size='lg']/loading:size-2 group-data-[size='md']/loading:size-1.5 group-data-[size='sm']/loading:size-1 group-data-[size='xl']/loading:size-2.5
		group-data-[size='xs']/loading:size-0.5 group-data-[type='error']/loading:bg-red-500 group-data-[type='success']/loading:bg-blue-600
	  group-data-[type='warning']/loading:bg-orange-300 group-data-[type='error']/loading:dark:bg-red-600
	  group-data-[type='warning']/loading:dark:bg-orange-400"></span>
	<span
		class="animate-loading-blink rounded-full bg-gray-200
		transition-all group-data-[size='lg']/loading:size-2 group-data-[size='md']/loading:size-1.5 group-data-[size='sm']/loading:size-1 group-data-[size='xl']/loading:size-2.5
		group-data-[size='xs']/loading:size-0.5 group-data-[type='error']/loading:bg-red-500 group-data-[type='success']/loading:bg-blue-600
	  group-data-[type='warning']/loading:bg-orange-300 group-data-[type='error']/loading:dark:bg-red-600
	  group-data-[type='warning']/loading:dark:bg-orange-400"></span>
</div>

<!--
@component
A component to indicate a loading state.

[See Docs](https://geist-ui-svelte.dev/components/loading) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->

<style lang="postcss">
	.animate-loading-blink {
		animation: loading-blink 1.4s infinite both;
	}

	.loading-container span:nth-child(2) {
		animation-delay: 0.2s;
	}

	.loading-container span:nth-child(3) {
		animation-delay: 0.4s;
	}

	@keyframes loading-blink {
		0% {
			opacity: 0.2;
		}

		20% {
			opacity: 1;
		}

		100% {
			opacity: 0.2;
		}
	}
</style>
