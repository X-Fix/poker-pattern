<script>
    import RouterLink from './RouterLink.svelte';
    export let routeOptions;
</script>

<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 32px;
    }
</style>

<ul>
    {#each routeOptions as routeOption}
        <RouterLink {routeOption} />
    {/each}
</ul>
