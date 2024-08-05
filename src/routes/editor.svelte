<script>
	import { onMount, onDestroy } from 'svelte';
	import * as PIXI from 'pixi.js';

	let app;

	onMount(() => {
		// The application will create a renderer using WebGL, if possible,
		// with a fallback to a canvas render. It will also setup the ticker
		// and the root stage PIXI.Container
		app = new PIXI.Application({ resizeTo: window, backgroundAlpha: 0, antialias: true });

		// The application will create a canvas element for you that you
		// can then insert into the DOM
		//   great, i know...
		// document.body.children[0].children[0]
		const entryElm = document.querySelector('.editor-stage');

		entryElm?.appendChild(app.view);

		const lines = [];

		const lineWidth = 16;
		const lineRadius = lineWidth * 0.5;
		const minCellsX = Math.ceil(window.innerWidth / lineWidth);
		const minCellsY = Math.ceil(window.innerHeight / lineWidth);

		for (let i = 0; i < minCellsX; i++) {
			for (let j = 0; j < minCellsY + 1; j++) {
				const div = new PIXI.Container();
				const line = new PIXI.Graphics();
				const border = new PIXI.Graphics();
				border.beginFill(0xfff);
				border.alpha = 0;
				border.drawRect(0, 0, lineWidth, lineWidth);
				border.zIndex = 0;
				// div.hitArea = new PIXI.Rectangle(-lineRadius, -1, lineWidth, lineWidth);
				// line.hitArea = new PIXI.Rectangle(-lineRadius, -1, lineWidth, lineWidth);
				// line.fill = 0xffffff;
				line.beginFill(0xffffff);
				line.alpha = 0.2
				line.rotation = (i+j)/ Math.PI;
				// draw a rectangle
				line.drawRect(-lineRadius, -1, lineWidth, 2);
				line.position.x = 8;
				line.position.y = 8;
				div.transform.position.x = i * lineWidth;
				div.transform.position.y = j * lineWidth;
				// line.hitArea = new PIXI.Rectangle(-lineRadius, -1, lineWidth, lineWidth);

				div.interactive = true;

				div.on('click', (e) => {
					div.children[1].alpha = 0.5;
				});
				div.on('mouseover', () => {
					div.children[0].alpha = 0.5;
					// div.children[1].rotation += 0.5;
				});
				div.on('mouseout', () => {
					div.children[0].alpha = 0;
				});

				line.zIndex = 1;
				div.addChild(border, line);
				lines.push(div);
			}
		}

		app.stage.addChild(...lines);
		// Listen for frame updates
		const speed = 0.003;
		app.ticker.add(() => {
			// each frame we spin the bunny around a bit
			lines.forEach((line) => {
				line.children[1].alpha = Math.min( (line.children[1].rotation * 0.025) % 1, 1 -( (line.children[1].rotation * 0.025) % 1))
				line.children[1].rotation += speed;
			});
		});
	});
	onDestroy(() => {
		app?.destroy();
	});
</script>

<!-- A <main> is the same as <div>, but more clear -->
<main class="editor-stage fixed  h-screen pointer-events-none w-screen flex-1" />
