<script>
    // How to router
    // https://medium.com/swlh/simple-svelte-3-app-with-router-44fe83c833b6
    import { onMount } from 'svelte';

    import './main.css';
    import './01-atoms/icons';

    import { transition, getStore } from './stores/router';
    import Navigation from './components/Navigation.svelte';
    import Icons from './01-atoms/IconsReference.svelte';

    const referenceSheets = {
        '/atoms/icons': Icons,
    };

    let currentState;
    const routeStore = getStore(window.location.pathname);
    routeStore.subscribe((state) => (currentState = state));

    /**
     * Handles the user navigating back and forth with the browser arrows
     */
    function handleBrowserNavigation(event) {
        // FIXME: Currently only accounts for navigating backwards
        const transitionName =
            currentState.options && currentState.options[0]
                ? currentState.options[0].transitionName
                : 'home';
        transition(transitionName, true);
    }
</script>

<style>

</style>

<svelte:window on:popstate="{handleBrowserNavigation}" />

<main id="content">
    {#if currentState.type === 'folder'}
        <Navigation routeOptions="{currentState.options}" />
    {:else}
        <svelte:component this="{referenceSheets[currentState.route]}" />
    {/if}
</main>
