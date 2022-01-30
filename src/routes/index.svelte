<script>
    import { WebCarbonBadge } from "$lib";

    let darkMode = false;

</script>

DarkMode : <input type=checkbox bind:checked={darkMode}>

<WebCarbonBadge {darkMode} />



