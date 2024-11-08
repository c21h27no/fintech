<script lang="ts">
	import type { Snippet } from 'svelte';
	import Footer from 'components/base/_footer.svelte';
	import Header from 'components/base/_header.svelte';
	let { children, data } = $props<{ children: Snippet; data?: any }>();
</script>

<div class="flex min-h-dvh flex-col justify-between">
	<Header {data} />
	<main class="container mx-auto w-full flex-grow bg-background">
		{@render children()}
	</main>
	<Footer />
</div>
