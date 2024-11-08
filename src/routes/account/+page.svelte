<script lang="ts">
	import BalanceAccount from 'components/core/account/balanceAccount.svelte';
	import UniversalCard from 'components/core/account/card/universalCard.svelte';
	import UnitLevelMenu from 'components/core/account/unitLevelMenu.svelte';
	import CashbackAccount from 'components/core/account/cashbackAccount.svelte';
	import Investment from 'components/core/account/investment/investment.svelte';
	import LimitAccount from 'components/core/account/limit/limitAccount.svelte';
	import HistoryTransaction from 'components/core/account/history/historyTransaction.svelte';
	import SearchAccount from 'components/core/account/search/SearchAccount.svelte';
	import ExpensesTransaction from 'components/core/account/expensesTransaction.svelte';

	let isMobile = $state();

	$effect(() => {
		isMobile = window.innerWidth < 767;
		window.addEventListener('resize', () => {
			isMobile = window.innerWidth < 767;
		});
	});
</script>

<div class="my-5 w-full">
	{#if isMobile}
		<div class="flex flex-col gap-5">
			<SearchAccount />
			<BalanceAccount amount={321.32} />
			<UniversalCard />
			<UnitLevelMenu />
			<div class="grid grid-cols-2 gap-3">
				<CashbackAccount />
				<LimitAccount />
			</div>
			<HistoryTransaction />
		</div>
	{:else}
		<div class="grid grid-cols-1 gap-5 self-baseline md:grid-cols-6 lg:grid-cols-8">
			<div class="col-span-1 md:col-span-2 lg:col-span-2">
				<div class="flex flex-col gap-3 rounded-md border bg-white px-3 py-3">
					<BalanceAccount amount={321.32} />
					<UniversalCard />
				</div>
			</div>
			<div class="col-span-1 flex flex-col gap-5 md:col-span-4 lg:col-span-6">
				<div class="col-span-1 grid grid-cols-1 gap-5 md:col-span-2 md:grid-cols-8 lg:grid-cols-12">
					<div class="col-span-1 flex flex-col gap-5 md:col-span-4 lg:col-span-8">
						<SearchAccount />
						<ExpensesTransaction />
						<UnitLevelMenu />
						<HistoryTransaction />
					</div>
					<div class="col-span-1 flex flex-col gap-5 md:col-span-4 lg:col-span-4">
						<Investment />
						<CashbackAccount />
						<LimitAccount />
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
