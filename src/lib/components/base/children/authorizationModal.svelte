<script lang="ts">
	import { Modal } from 'components/custom/index';
	import Button from 'components/custom/buttons/button.svelte';
	import { config_site } from 'constants';
	import Input from 'components/custom/input/input.svelte';
	import Checkbox from 'components/custom/checkbox/checkbox.svelte';
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';

	let loading = $state(false);
	let checked = $state(true);
	let active = $state(false);
	let value: any = $state('this_email@gmail.com');

	const submitFunction: SubmitFunction = () => {
		loading = true;
		return async ({ result, update }) => {
			await update({ reset: false });
			loading = false;
		};
	};
</script>

<div class="">
	<Button class="text-sm" onclick={() => (active = true)}>Sign In</Button>
	<Modal.Root bind:active>
		<Modal.Content class="w-[400px]">
			<Modal.Body>
				<div class="relative">
					<h1 class="cursor-default text-2xl font-bold text-gray-900">{config_site.site_name}</h1>
					<div class="mt-5 flex flex-col gap-5">
						<p class="text-3xl font-bold">Enter email</p>
						<span class="text-sm"
							>We will send the code or call you. You do not need to answer the call. The code can be sent to your mailbox
							or by SMS</span>
						<form action="/api?/login" method="POST" class="flex flex-col gap-3" use:enhance={submitFunction}>
							<Input id="email" class="block h-12 w-full" type="email" name="email" bind:value required />
							<div class="flex items-center justify-between text-xs">
								<Checkbox id="remember" name="remember" bind:checked>Remember me?</Checkbox>
								<Button color="clear" class="w-fit">Forgot password?</Button>
							</div>
							<Button {loading} type="submit" class="w-full">Log in</Button>
						</form>
						<div class="">
							<div class="inline-flex w-full items-center justify-center">
								<hr class="my-8 h-px w-64 border-0 bg-gray-200 dark:bg-gray-700" />
								<span
									class="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white"
									>or</span>
							</div>
						</div>
					</div>
				</div>
			</Modal.Body>
		</Modal.Content>
	</Modal.Root>
</div>
