<script>
	import '../styles/tailwind.css';
	import '../styles/main.css';
	import '../styles/prestonsTheme.css';
	import Nav from './components/nav.svelte';

	import {page} from '$app/stores'
	// page.subscribe(console.log)
	// console.log(page)

</script>

<svelte:head>
	<title>Jacob Sides's Brain</title>
	<meta property="og:title" content="Jacob Sides's Brain" />
	<meta property="og:description" content="Center of all your needs about Jacob" />
	<meta property="og:site_name" content="Jacob Sides's Brain" />
	<!-- <meta property="og:image" content="https://netlify.app/banner.jpg"/>  -->
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<Nav  />

<slot />
