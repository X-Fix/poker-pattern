import { readable } from 'svelte/store';
import { createMachine } from './state-machine';
import stateMachineDefinition from './app-state';

let store, stateMachine, setState;

/**
 * Creates a routeStore object (if none exists) setting the initial route using the initialStateName
 * (if provided). If a routeStore object already exists, just returns a reference to it
 *
 * @param {string} initialStateName (optional) the state name (or location.pathname) to initialise with on page load
 */
export function getStore(initialStateName) {
    if (!store || !stateMachine) {
        stateMachine = createMachine({
            ...stateMachineDefinition,
            initialStateName,
        });

        store = readable(stateMachine.state, function start(set) {
            setState = set;
        });

        window.history.replaceState(
            { path: stateMachine.state.route },
            '',
            `${window.location.origin}${stateMachine.state.route}`
        );
    }

    return store;
}

export function transition(transitionName, isBrowserEvent) {
    if (!stateMachine || !setState) {
        console.error('Transition Error: RouteStore not initialised');
        return;
    }

    stateMachine.state = stateMachine.transition(
        stateMachine.state,
        transitionName
    );
    setState(stateMachine.state);

    if (!isBrowserEvent) {
        // Keep the browser in sync by pushing the new state to the browser's history and setting
        // the URL to the new path/route
        window.history.pushState(
            { path: stateMachine.state.route },
            '',
            `${window.location.origin}${stateMachine.state.route}`
        );
    }
}
