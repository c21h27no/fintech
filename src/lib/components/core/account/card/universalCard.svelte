<script lang="ts">
	import Icons from 'components/Icons.svelte';

	let {
		association = 'visa',
		card_type = 'debit',
		card_digits = 6666
	}: {
		association: 'mastercard' | 'visa';
		card_type: 'debit' | 'credit';
		card_digits: number;
	} = $props();
</script>

<div class="relative min-h-24 w-full cursor-pointer rounded-xl bg-black px-2">
	<div class="flex items-center justify-between py-2">
		<span class="text-xs uppercase text-white">{card_type}</span>
		<Icons name="nfc" class="size-4" />
	</div>
	<div class="absolute bottom-0 left-0 right-0">
		<div class="flex items-center justify-between px-2">
			<span class="text-xs text-white">**** {card_digits}</span>
			<Icons name={`issuer/${association}`} class="size-8" />
		</div>
	</div>
</div>
