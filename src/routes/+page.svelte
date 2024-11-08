<script lang="ts">
	import HeroPageStarted from 'components/core/hero/heroPageStarted.svelte';
	import HeroTrustStarted from 'components/core/hero/HeroTrustStarted.svelte';
	import DefaultLayout from 'components/layout/defaultLayout.svelte';
	const { data }: { data: any } = $props();
</script>

<DefaultLayout {data}>
	<div class="my-5 flex flex-col gap-10">
		<HeroPageStarted />
		<HeroTrustStarted />
	</div>
</DefaultLayout>
