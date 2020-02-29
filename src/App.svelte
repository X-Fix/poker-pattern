<script>
    import { onMount } from 'svelte';

    import './main.css';
    import './01-atoms/icons';

    import { transition, routeStore } from './stores/router';
    import Navigation from './components/Navigation.svelte';

    // const routes = {
    //     '/': Home,
    //     '/home': Home,
    //     '/about': About,
    // };

    // How to router
    // https://medium.com/swlh/simple-svelte-3-app-with-router-44fe83c833b6

    let currentState;
    routeStore.subscribe((state) => {
        currentState = state;

        // Push the new state to the browser's history and set the URL to the new path
        window.history.pushState(
            { path: state.route },
            '',
            `${window.location.origin}${state.route}`
        );
    });

    onMount(() => {
        if (window.history.state) {
            return;
        }

        const { href, pathname: path } = window.location;
        window.history.replaceState({ path }, '', href);
    });

    function handleBackNavigation(event) {
        const transitionName =
            currentState.options && currentState.options[0]
                ? currentState.options[0].transitionName
                : 'home';
        transition(transitionName);
    }
</script>

<style>

</style>

<svelte:window on:popstate="{handleBackNavigation}" />

<main id="content">
    {#if currentState.type === 'folder'}
        <Navigation routeOptions="{currentState.options}" />
    {:else}
        <div>Nothing to see here, yet</div>
    {/if}
</main>
