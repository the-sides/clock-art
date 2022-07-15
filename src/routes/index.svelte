<script>
	import { onMount } from 'svelte';

	let cells = [];
	const cellSize = 16;
	function buildCells() {
		const perRow = window.innerWidth / cellSize;
		const perCol = window.innerHeight / cellSize;
		cells = Array(Math.ceil(perRow * perCol + 5 + perRow));
	}
	onMount(() => {
		buildCells();
		window.addEventListener('resize', buildCells);
	});
	function restartElm(e) {
		e.target.getAnimations()[0].currentTime = 0;
	}
</script>

<!-- A <main> is the same as <div>, but more clear -->
<main class=" relative min-h-screen bg-[#141516] overflow-hidden h-screen w-screen">
	<section class="flex flex-wrap content-start w-[102vw] h-[102vh]">
		{#each cells as cell}
			<i data-value={cell} on:mouseover={restartElm} on:focus />
		{/each}
	</section>
</main>
