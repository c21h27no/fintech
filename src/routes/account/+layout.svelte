<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../../app.css';
	import Header from 'components/base/_header.svelte';
	const { data, children }: { data: any; children: Snippet } = $props();
	$effect(() => {
		document.body.style.overflowY = 'scroll';
	});
</script>

<svelte:head>
	<title>FINANCE - account</title>
</svelte:head>

<Header {data} />
<main class="container mx-auto">
	{@render children()}
</main>
