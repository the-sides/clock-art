<script>
	import { onMount } from 'svelte';

	onMount(draw);

	function sizeCanvas(canvas) {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	function draw() {
		const canvas = document.getElementById('clock-art');
		const ctx = canvas.getContext('2d');
		const time = new Date().getMilliseconds();

		sizeCanvas(canvas);

		ctx.fillStyle = '#fff';
		ctx.save();
		
		ctx.fillRect(0, 7, 16, 2);

		ctx.translate(16, 16)
		ctx.rotate(-Math.PI / 2);
		ctx.fillRect(0, 7, 16, 2);

		ctx.restore();

		ctx.translate(32, 16)
		// ctx.rotate(-Math.PI / 2);
		ctx.fillRect(0, 7, 16, 2);

		ctx.restore();

		// window.requestAnimationFrame(draw);
		window.addEventListener('resize', () => sizeCanvas(canvas));
	}
</script>

<!-- A <main> is the same as <div>, but more clear -->
<main class=" relative min-h-screen bg-[#141516] overflow-hidden h-screen w-screen">
	<canvas id="clock-art" />
</main>
