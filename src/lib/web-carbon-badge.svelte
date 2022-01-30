<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	/** The badge expose two modes : dark or light */
	export let darkMode = false;

	/** The script added to the body*/
	let script: HTMLScriptElement;

	/** The div */
	let div: HTMLDivElement;

	/**
	 * After loading
	 */
	onMount(() => {
		// If div is not mounted : no needed
		if (div) {
			// Init
			script = document.createElement('script');
			// Set
			script.src = 'https://unpkg.com/website-carbon-badges@1.1.3/b.min.js';
			script.defer = true;
			script.onload = () => {
				console.log('WebCarbon Component - Loaded');
			};
			// Added
			document.body.appendChild(script);
		} else {
			console.error('WebCarbon Component - OnMount : cannot find the div');
		}
	});

	/**
	 * When it's finished
	 */
	onDestroy(() => {
		if (script) {
			document.body.removeChild(script);
		} else {
			console.error('WebCarbon Component - OnDestroy : cannot find the script');
		}
	});
</script>

<div id="wcb" class="carbonbadge" class:wcb-d={darkMode} bind:this={div} />
