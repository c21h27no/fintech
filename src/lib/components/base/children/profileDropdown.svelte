<script lang="ts">
	import { Dropdown } from 'components/custom';
	import Button from 'components/custom/buttons/button.svelte';
	import Icons from 'components/Icons.svelte';
	let showProfile = $state(false);

	const dataForDropdownAuth: { id: number; title: string; href: string }[] = [
		{ id: 0, title: 'Account', href: '/account' },
		{ id: 1, title: 'Development', href: '/dev' },
		{ id: 2, title: 'Settings', href: '/settings' },
		{ id: 3, title: 'Help center', href: '/help' }
	];
</script>

<div class="relative">
	<Button
		class=" flex items-center justify-center rounded text-xl font-bold !leading-none"
		size="clear"
		border="clear"
		color="clear"
		onclick={() => (showProfile = !showProfile)}>
		<img
			src="https://cdn2.iconfinder.com/data/icons/female-avatars-4/128/avatars_accounts___female_woman_people_person_african_medium_hair_earrings_hoodie.png"
			alt="avatar"
			class="relative inline-block h-10 w-10 select-none !rounded-full border border-slate-800 object-cover object-center p-0.5" />
		<div class="ml-2.5 flex flex-col text-left">
			<div class="max-w-32">
				<p class="truncate text-sm font-bold">$321.32</p>
			</div>
			<span class="text-xs font-medium text-gray-500">Total balance</span>
		</div>
	</Button>

	<Dropdown.Root bind:active={showProfile}>
		<Dropdown.Content class="min-h-60 min-w-64 rounded-lg bg-white p-2 shadow-md">
			<div class="text-sm text-gray-900">
				<div class="flex w-56 items-center justify-around truncate">
					<div class="">
						<img
							src="https://cdn2.iconfinder.com/data/icons/female-avatars-4/128/avatars_accounts___female_woman_people_person_african_medium_hair_earrings_hoodie.png"
							alt="avatar"
							class="relative inline-block h-10 w-10 select-none !rounded-full border border-slate-800 object-cover object-center p-0.5" />
					</div>
					<div class="">
						<p class="text-sm font-medium leading-none">Andrew bonnie</p>
						<span class="text-xs text-gray-500">andreq@gmail.com</span>
					</div>
					<span class="rounded-full border border-green-700 bg-green-300 px-2.5 py-0.5 text-xs font-medium text-green-700"
						>PRO</span>
				</div>
				<hr class="my-3" />
				<ul class="mt-4 text-sm">
					{#each dataForDropdownAuth as title}
						<li class="flex flex-col gap-5">
							<a
								href={title.href}
								class="flex items-center gap-2 rounded px-2 py-2 transition duration-200 hover:bg-gray-100">
								<Icons name={`account/${title.title.replace(/\s+/g, '').toLowerCase()}`} class="size-4 text-gray-500" />
								<span class="text-sm font-medium">{title.title}</span>
							</a>
						</li>
					{/each}
					<hr class="my-3" />
					<li class="flex flex-col gap-5">
						<a href="logout" class="flex items-center gap-2 rounded px-2 py-2 transition duration-200 hover:bg-gray-100">
							<Icons name="account/logout" class="size-4 text-gray-500" />
							<span class="text-sm font-medium">logout</span>
						</a>
					</li>
				</ul>
			</div>
		</Dropdown.Content>
	</Dropdown.Root>
</div>
