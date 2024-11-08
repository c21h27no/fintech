<script lang="ts">
	import BlurFade from 'components/animations/blurFade.svelte';
	import Icons from 'components/Icons.svelte';

	let investment = [
		{
			id: 0,
			title: 'Apple Inc.',
			href: 'investment/appleinc',
			icon: 'investment/appleinc',
			rate: 17.12,
			rateStatus: '+'
		},
		{
			id: 1,
			title: 'Nike',
			href: 'investment/nike',
			icon: 'investment/nike',
			rate: 2.39,
			rateStatus: '-'
		},
		{
			id: 2,
			title: 'Netflix',
			href: 'investment/netflix',
			icon: 'investment/netflix',
			rate: 1.47,
			rateStatus: '+'
		},
		{
			id: 3,
			title: 'Visa Inc',
			href: 'investment/visainc',
			icon: 'investment/visa',
			rate: 5.21,
			rateStatus: '-'
		},
		{
			id: 4,
			title: 'Meta Platforms',
			href: 'investment/metaplatforms',
			icon: 'investment/metaplatforms',
			rate: 3.29,
			rateStatus: '+'
		}
	];
</script>

<div class="rounded-lg border bg-white px-5 py-3">
	<div class="mb-4 flex items-center justify-between">
		<h3 class=" text-lg">Investment</h3>
		<a href="/investment" class="flex items-center">
			<span class="text-[0.7rem]"> See all </span>
			<Icons name="arrow" class="size-3" />
		</a>
	</div>
	<ul>
		<li class="flex flex-col gap-2">
			{#each investment as title (title.id)}
				<a href={title?.href} class="flex items-center justify-between">
					<div class="flex items-center justify-center gap-3">
						<div class="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border bg-[#f2f4f6]">
							<Icons name={`${title?.icon}`} class="size-4" />
						</div>
						<span class="text-xs">{title?.title}</span>
					</div>
					<BlurFade delay={0.25}>
						<span class="text-xs {title.rateStatus === '+' ? `text-green-700` : `text-red-700`}"
							>{title.rateStatus}{title?.rate}%</span
						></BlurFade>
				</a>
			{/each}
		</li>
	</ul>
</div>
