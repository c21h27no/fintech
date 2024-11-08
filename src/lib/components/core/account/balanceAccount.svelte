<script lang="ts">
	import BlurFade from 'components/animations/blurFade.svelte';
	import NumberTicker from 'components/animations/NumberTicker.svelte';
	let { amount = 0 }: { amount: number } = $props();
</script>

<div class="flex flex-col">
	<h1 class="font-bold">Total balance:</h1>
	<BlurFade delay={0.3}>
		<h3 class="font-DrukWide text-2xl">
			$<NumberTicker initial={amount / 2} value={amount} duration={3000} />
		</h3>
	</BlurFade>
</div>
