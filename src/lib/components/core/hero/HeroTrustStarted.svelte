<script lang="ts">
	import Marquee from 'components/animations/marquee/marquee.svelte';
	import ReviewCard from 'components/animations/marquee/reviewCard.svelte';

	const reviews = [
		{
			name: 'Bhide',
			username: '@Bhide',
			body: 'Noicee work. I love it. Keep it up.',
			img: 'https://avatar.vercel.sh/jack'
		},
		{
			name: 'Jodd',
			username: '@Jodd',
			body: 'Wooww, this is what I was looking for. Great work.',
			img: 'https://avatar.vercel.sh/jill'
		},
		{
			name: 'Pokie',
			username: '@Pokie',
			body: 'Svelte is Amazing and so are you. Keep it up.',
			img: 'https://avatar.vercel.sh/john'
		},
		{
			name: 'pablo',
			username: '@pablo',
			body: 'Remarkable Stuff broooo. Added to my favourites.',
			img: 'https://avatar.vercel.sh/jane'
		},
		{
			name: 'Saloni',
			username: '@Saloni',
			body: 'Acche hai, Chal mera Portfolio banade.',
			img: 'https://avatar.vercel.sh/jenny'
		},
		{
			name: 'Bhai',
			username: '@Bhai',
			body: 'Svelte made easy with these components. Great work.',
			img: 'https://avatar.vercel.sh/james'
		}
	];

	let firstRow = reviews.slice(0, reviews.length / 2);
</script>

<div class="">
	<div class="grid grid-cols-1 gap-5 overflow-hidden md:grid-cols-3">
		<div class="col-span-1 flex min-h-40 animate-fade-left items-center rounded-lg border bg-white md:col-span-3">
			<div class="flex w-full flex-col items-center justify-center overflow-hidden px-5 py-5 md:flex-row">
				<div class="md:w-1/4">
					<h2 class="mb-5 text-center font-DrukWide text-2xl md:mb-0 md:text-3xl">Were trusted</h2>
				</div>

				<div class="relative w-full md:w-3/4">
					<div class="overflow-hidden">
						<Marquee pauseOnHover class="[--duration:20s]">
							{#each firstRow as item}
								<ReviewCard {...item} />
							{/each}
						</Marquee>
					</div>
					<div
						class="pointer-events-none absolute inset-y-0 left-0 w-[50px] bg-gradient-to-r from-white dark:from-background md:w-[100px]">
					</div>
					<div
						class="pointer-events-none absolute inset-y-0 right-0 w-[50px] bg-gradient-to-l from-white dark:from-background md:w-[100px]">
					</div>
				</div>
			</div>
		</div>
		<div class="flex min-h-24 animate-fade-up items-center justify-center rounded-lg border bg-white md:col-span-1">
			<div class="flex items-center px-5 py-5">
				<h5 class="mr-3 font-DrukWide text-3xl">100M+</h5>
				<h3 class="leading-none">successful<br />transactions</h3>
			</div>
		</div>
		<div class="flex min-h-24 animate-fade-up items-center justify-center rounded-lg border bg-white md:col-span-1">
			<div class="flex items-center px-5 py-5">
				<h5 class="mr-3 font-DrukWide text-3xl">98%</h5>
				<h3 class="leading-none">payment<br />conversion</h3>
			</div>
		</div>
		<div class="flex min-h-24 animate-fade-up items-center justify-center rounded-lg border bg-white md:col-span-1">
			<div class="flex items-center px-5 py-5">
				<h5 class="mr-3 font-DrukWide text-3xl">35М+</h5>
				<h3 class="leading-none">punched<br />cheques</h3>
			</div>
		</div>
	</div>
</div>
