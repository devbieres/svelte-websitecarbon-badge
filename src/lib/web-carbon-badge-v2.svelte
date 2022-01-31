<script lang="ts">
    import { onMount } from "svelte/internal";
    import type { Result } from "$lib/interfaces/result.interface";
    import { getData } from "./services/service";

	// Based on https://gitlab.com/wholegrain/website-carbon-badges/-/blob/master/src/b.js

	// Export
	// -- DarkMode
	export let darkMode = true;

    // Data
	// -- Result
    let result: Result;
	// -- Url
	const url = window.location.href;

    // Reactivity
    $: carbon =  result ?  (result.error ? 'Error' : `${result.c}g of CO<sub>2</sub>/view`) : 'Measuring CO<sub>2</sub>&hellip;';
    $: comparaison = result ? (result.error ? '' :`Cleaner than ${result.p}% of pages tested`) : '&nbsp;'

    onMount(async () => {
        try {
            // Retreive data
            result = await getData(
				url
			);
        } catch (error) {
            console.error(error);
        }
    })

</script>

<div class="carbonbadge" class:wcb-d={darkMode} class:error={result?.error} >
	<div id="wcb_p">
		<span id="wcb_g">
            {@html carbon }
        </span><a
			id="wcb_a"
			target="_blank"
			rel="noopener"
			href="https://websitecarbon.com">Website Carbon</a
		>
	</div>
	<span id="wcb_2">
        {@html comparaison }
    </span>
</div>

<style>
	/**
     * Based on https://gitlab.com/wholegrain/website-carbon-badges/-/raw/master/src/b.css
    */

	.carbonbadge {
		--b1: #0e11a8;
		--b2: #00ffbc;
		--error: #ff3c00;
		font-size: 15px;
		text-align: center;
		color: var(--b1);
		line-height: 1.15;
	}

	.carbonbadge sub {
		vertical-align: middle;
		position: relative;
		top: 0.3em;
		font-size: 0.7em;
	}

	#wcb_g,
	#wcb_a,
	#wcb_2 {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 1em;
		line-height: 1.15;
		font-family: -apple-system, BlinkMacSystemFont, sans-serif;
		text-decoration: none;
		margin: 0.2em 0;
	}

	#wcb_g,
	#wcb_a {
		padding: 0.3em 0.5em;
		border: 0.13em solid var(--b2);
	}

	#wcb_g {
		border-radius: 0.3em 0 0 0.3em;
		background: #fff;
		border-right: 0;
		min-width: 8.2em;
	}

	#wcb_a {
		border-radius: 0 0.3em 0.3em 0;
		border-left: 0;
		background: var(--b1);
		color: #fff;
		font-weight: 700;
		border-color: var(--b1);
	}

	.wcb-d #wcb_a {
		color: var(--b1);
		background: var(--b2);
		border-color: var(--b2);
	}

	.error #wcb_a, .error #wcb_g {
		border-color: var(--error);
	}

	.wcb-d #wcb_2 {
		color: #fff;
	}
</style>
