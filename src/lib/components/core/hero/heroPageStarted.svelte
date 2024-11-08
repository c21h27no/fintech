<script>
	import Button from 'components/custom/buttons/button.svelte';
</script>

<section
	class="flex h-full -translate-y-4 animate-fade-in flex-col justify-between overflow-hidden rounded-lg border bg-white bg-gradient-to-r sm:h-[30rem] sm:flex-row">
	<div class="flex w-full flex-col justify-between gap-8 p-8 sm:w-[55%] sm:p-12 sm:pr-4">
		<div class="flex flex-col gap-8">
			<h1
				class="fontd animate-shine bg-[linear-gradient(110deg,#000,45%,#ad6e14,55%,#000)] bg-[length:200%_100%] bg-clip-text text-4xl font-extrabold leading-none text-transparent md:leading-snug xl:text-5xl">
				Welcome you to bank
				<span class="text-primary-light">Financial solutions</span>
			</h1>
			<p class="-translate-y-4 animate-fade-in leading-tight text-slate-600 opacity-0 ease-in-out [--animation-delay:400ms]">
				The bank was created solely as a pet project and has no financial activity.Do not use this project as part of a
				fraudulent donor, respect other people's labor. If you want updates press stars on github
			</p>
		</div>
		<Button href="/account" color="default" class="w-fit">Get started</Button>
	</div>
	<div class="relative w-full shrink-0 sm:mt-0 sm:h-full sm:w-[45%] sm:pt-8">
		<div
			class="before:bg-gradient-radial after:bg-gradient-conic absolute mt-28 flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-20 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-60 sm:mt-60 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
		</div>
		<img
			alt="Hero"
			class="left-1/2 z-10 w-full select-none sm:absolute sm:bottom-0 sm:max-w-[28rem] sm:-translate-x-1/2"
			src="img/hero/productivity.png" />
	</div>
</section>
