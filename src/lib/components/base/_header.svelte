<script lang="ts">
	import { config_site } from '$lib/constants';
	import ProfileDropdown from './children/profileDropdown.svelte';
	import AuthorizationModal from './children/authorizationModal.svelte';
	let { data = { authentication: false } } = $props<{ data?: object }>();
</script>

<header class="sticky top-0 z-[100] h-full w-full">
	<div class="flex h-16 items-center border-b bg-white py-3">
		<div class="container mx-auto flex items-center justify-between">
			<a href="/" class="!cursor-pointer text-lg font-bold text-gray-900">{config_site.site_name}</a>
			<div class="flex items-center gap-5">
				{#if data.authentication}
					<ProfileDropdown />
				{:else}
					<AuthorizationModal />
				{/if}
			</div>
		</div>
	</div>
	<div class="border-b bg-white py-3">
		<div class="container mx-auto flex items-center gap-5">
			{#if data.authentication}
				<div class="flex w-full items-center justify-between">
					<div class="flex items-center gap-5 font-bold uppercase">
						<a href="/account/payments" class="text-xs leading-5">Payments</a>
						<a href="/account/documents" class="text-xs leading-5">Documents</a>
						<a href="/account/history" class="text-xs leading-5">History</a>
					</div>
					<div class="">
						<span
							class="inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-sm font-bold text-transparent">
							FAKEBANK
						</span>
					</div>
				</div>
			{:else}
				<a href="/deposit" class="text-sm font-medium leading-5">Deposit</a>
				<a href="/invest" class="text-sm font-medium leading-5">Invest</a>
				<a href="/acquiring" class="text-sm font-medium leading-5">Acquiring</a>
			{/if}
		</div>
	</div>
</header>
