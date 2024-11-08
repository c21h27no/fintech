<script lang="ts">
	import { footerData, CURRENT_YEAR, config_site } from '$lib/constants';
</script>

<footer class="container mx-auto">
	<div class="rounded-t-lg border bg-white p-4 px-8 pt-10">
		<div class=" gap-4 sm:pb-16 md:flex md:justify-between">
			<div class="mb-12 flex flex-col gap-4">
				<a href="/" class="flex items-center gap-2">
					<!-- <img src="" class="size-6" /> -->
					<span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">{config_site.site_name}</span
					></a>
				<p class="max-w-xs text-sm text-muted-foreground">Open source project finance tech</p>
			</div>

			<div class="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
				{#each footerData as result (result.id)}
					<div>
						<h2 class="mb-2 text-sm uppercase tracking-tighter text-gray-900 dark:text-white">
							{result.title}
						</h2>
						<ul class="">
							{#each result.lists as results_e (results_e.id)}
								<li>
									<a href={results_e.href} class="cursor-pointer text-xs text-gray-400 duration-200 hover:text-gray-200"
										>{results_e.name}</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
		<hr class="my-3 border-black/20 dark:border-white/20 sm:mx-auto lg:my-5" />
		<div class="sm:flex sm:items-center sm:justify-between">
			<span class="text-xs sm:text-center md:text-sm">
				{CURRENT_YEAR}
				All Rights Reserved.
			</span>
			<div class="mt-4 flex text-xs sm:mt-0 sm:justify-center md:text-sm">{config_site.site_name}</div>
		</div>
	</div>
</footer>
