<script lang="ts">
	import { thetransaction } from '$lib/constants';
	import Icons from 'components/Icons.svelte';
</script>

<div class="flex -translate-y-4 animate-fade-up flex-wrap">
	<div class="mx-auto w-full max-w-full">
		<div class="relative flex min-w-0 flex-[1_auto] flex-col break-words rounded bg-white bg-clip-border">
			<div class="bg-light/30 relative flex min-w-0 flex-col break-words rounded-lg border border-stone-200">
				<!-- card header -->
				<div class="flex min-h-[70px] flex-wrap items-stretch justify-between px-5 pb-0 pt-5">
					<h3 class="m-2 ml-0 flex flex-col items-start justify-center">
						<span class=" mr-3 text-base">Latest history transactions</span>
						<span class="font-paysage mt-1 text-xs">Last 5 transactions are displayed</span>
					</h3>
					<div class="relative my-2 flex flex-wrap items-center">
						<a
							href="/account/history"
							class="inline-block cursor-pointer rounded-lg border px-8 py-1.5 text-xs leading-normal">
							Full history
						</a>
					</div>
				</div>
				<!-- end card header -->
				<!-- card body  -->
				<div class="block flex-auto px-9 py-8 pt-6">
					<div class="overflow-x-auto">
						<table class="text-dark my-0 w-full border-neutral-200 align-middle">
							<thead class="align-bottom">
								<tr class="text-secondary-dark text-xs font-semibold uppercase">
									<th class="!min-w-[150px] pb-3 text-start">Title</th>
									<th class="min-w-[120px] pb-3 text-justify">Date</th>
									<th class="min-w-[50px] pb-3 text-justify">Status</th>
									<th class="min-w-[20px] pb-3 text-justify">Amount</th>
								</tr>
							</thead>
							<tbody>
								{#each thetransaction as payment (payment.payment_id)}
									<tr class="border-b border-dashed last:border-b-0">
										<td class="p-3 pl-0">
											<div class="flex items-center gap-5">
												<div class="flex h-9 w-9 items-center justify-center rounded-full border bg-slate-50">
													<Icons name={`purchase/${payment.payment_image_shop}`} class="size-5" />
												</div>
												<div class="flex flex-col">
													<p class="text-xs">{payment.payment_title}</p>
													<!-- {#if payment.payment_amount % 3 != 0}
                                           <span class="text-[9px]">Cashback: ${payment.payment_amount % 3}</span>
                                        {/if} -->
												</div>
											</div>
										</td>
										<td class="p-3 pl-0">
											<div class="">
												<p class="text-xs">
													{new Date(payment.payment_date).toLocaleString('en-US', {
														year: 'numeric',
														month: 'long',
														day: 'numeric'
													})}
												</p>
											</div>
										</td>
										<td class="p-3 pl-0">
											<div class="flex items-center">
												<p class="text-xs">
													{payment.payment_status}
												</p>
											</div></td>

										<td class="p-3 pl-0">
											<div class="flex items-center justify-center">
												<p
													class={`text-xs ${payment.operation_type === 'deposit' ? 'text-green-800' : ''} ${['failed', 'cancelled'].includes(payment.payment_status) ? 'text-red-800' : ''}`}>
													${payment.payment_amount}
												</p>
											</div></td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
