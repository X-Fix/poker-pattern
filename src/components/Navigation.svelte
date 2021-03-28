<script>
    import RouterLink from './RouterLink.svelte';
    export let routeOptions;
</script>

<style>
    ul {
        background-color: white;
        height: 100vh;
        list-style: none;
        padding: 2rem;
        margin: 0;
    }
</style>

<ul>
    {#each routeOptions as routeOption}
        <RouterLink {routeOption} />
    {/each}
</ul>
