<script>
    import { WebCarbonBadge, WebCarbonBadgeV2 } from "$lib";

    let darkMode = false;

</script>

DarkMode : <input type=checkbox bind:checked={darkMode}>

<!-- <WebCarbonBadge {darkMode} /> -->

<hr/>

<WebCarbonBadgeV2 {darkMode} />


