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
    import Inputs from './02-molecules/InputsReference.svelte';
    import PokerCards from './02-molecules/PokerCardsReference.svelte';
    import ParticipantsList from './03-organisms/ParticipantsListReference.svelte';
    import Header from './03-organisms/HeaderReference.svelte';
    import Footer from './03-organisms/FooterReference.svelte';
    import ChooseForm from './03-organisms/ChooseFormReference.svelte';
    import CreateSessionForm from './03-organisms/CreateSessionFormReference.svelte';
    import JoinSessionForm from './03-organisms/JoinSessionFormReference.svelte';
    import Menu from './03-organisms/MenuReference.svelte';

    const referenceSheets = {
        '/atoms/icons': Icons,
        '/molecules/buttons': Buttons,
        '/molecules/inputs': Inputs,
        '/molecules/poker-cards': PokerCards,
        '/organisms/participants-list': ParticipantsList,
        '/organisms/header': Header,
        '/organisms/footer': Footer,
        '/organisms/choose-form': ChooseForm,
        '/organisms/create-session-form': CreateSessionForm,
        '/organisms/join-session-form': JoinSessionForm,
        '/organisms/menu': Menu,
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
