<script lang="ts">
	import { cn } from '$lib/utils/utils';
	import Icons from 'components/Icons.svelte';

	const linkCollectionBlock = [
		{
			title: 'QR scanner',
			href: '/s',
			icon: 'qrscanner'
		},
		{
			title: 'By details',
			href: '/',
			icon: 'filelinear'
		},
		{
			title: 'Secured',
			href: '/',
			icon: 'secure'
		},
		{
			title: 'Instalments',
			href: '/account/payments',
			icon: 'transfer'
		},
		{
			title: 'Cashback',
			href: '/account/cashback',
			icon: 'cashback'
		},
		{
			title: 'Services',
			href: '/account/services',
			icon: 'services'
		}
	];
</script>

<div class="grid grid-cols-3 gap-2">
	{#each linkCollectionBlock as title}
		<div class="h-full w-full -translate-y-4 animate-fade-up">
			<a href={title.href} class="relative flex flex-col overflow-hidden rounded-lg border bg-white px-3 py-2">
				<div class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border bg-gray-100">
					<Icons name={title.icon} class="size-5" />
				</div>
				<div class="absolute right-0 top-0">
					<Icons name={title.icon} class=" size-0 lg:size-14" />
				</div>
				<div class="mt-5 flex justify-between">
					<p class="text-xs">{title.title}</p>
					<Icons name="arrow" class="size-4" />
				</div>
			</a>
		</div>
	{/each}
</div>
