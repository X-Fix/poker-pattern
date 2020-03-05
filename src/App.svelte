<script>
    // How to router
    // https://medium.com/swlh/simple-svelte-3-app-with-router-44fe83c833b6
    import { onMount } from 'svelte';

    import './main.css';
    import './01-atoms/icons';

    import { transition, getStore, syncState } from './stores/router';
    import Navigation from './components/Navigation.svelte';
    import Icons from './01-atoms/IconsReference.svelte';
    import Buttons from './02-molecules/ButtonsReference.svelte';

    const referenceSheets = {
        '/atoms/icons': Icons,
        '/molecules/buttons': Buttons,
    };

    let currentState;
    const routeStore = getStore(window.location.pathname);
    routeStore.subscribe((state) => (currentState = state));

    /**
     * Handles the user navigating back and forth with the browser arrows
     */
    function handleBrowserNavigation(event) {
        syncState(event.state.path);
    }
</script>

<style>
    :global(body) {
        font-family: 'Questrial', sans-serif;
    }
</style>

<svelte:window on:popstate="{handleBrowserNavigation}" />

<main id="content">
    {#if currentState.type === 'folder'}
        <Navigation routeOptions="{currentState.options}" />
    {:else}
        <svelte:component this="{referenceSheets[currentState.route]}" />
    {/if}
</main>
