import { readable } from 'svelte/store';
import { createMachine } from './state-machine';

const HOME_STATE_NAME = '/';
const ATOMS_STATE_NAME = '/atoms';
const ICONS_STATE_NAME = '/atoms/icons';
const MOLECULES_STATE_NAME = '/molecules';
const ORGANISMS_STATE_NAME = '/organisms';
const HOME_TRANSITION_NAME = 'home';
const ATOMS_TRANSITION_NAME = 'atoms';
const ICONS_TRANSITION_NAME = 'icons';
const MOLECULES_TRANSITION_NAME = 'molecules';
const ORGANISMS_TRANSITION_NAME = 'organisms';

const stateMachineDefinition = {
    initialStateName: HOME_STATE_NAME,
    [HOME_STATE_NAME]: {
        options: [
            {
                icon: 'folder',
                title: 'Atoms >',
                description:
                    'A collection of the smallest, simplest usable components',
                transitionName: ATOMS_TRANSITION_NAME,
            },
            {
                icon: 'folder',
                title: 'Molecules >',
                description:
                    'A collection of components created by combining various atoms',
                transitionName: MOLECULES_TRANSITION_NAME,
            },
            {
                icon: 'folder',
                title: 'Organisms >',
                description:
                    'A collection of larger components created by combining various atoms and/or molecules',
                transitionName: ORGANISMS_TRANSITION_NAME,
            },
        ],
        transitions: {
            [ATOMS_TRANSITION_NAME]: {
                targetState: ATOMS_STATE_NAME,
                action() {
                    console.log('Redirecting to Atoms');
                },
            },
            [MOLECULES_TRANSITION_NAME]: {
                targetState: MOLECULES_STATE_NAME,
                action() {
                    console.log('Redirecting to Molecules');
                },
            },
            [ORGANISMS_TRANSITION_NAME]: {
                targetState: ORGANISMS_STATE_NAME,
                action() {
                    console.log('Redirecting to Organisms');
                },
            },
        },
        type: 'folder',
    },
    [ATOMS_STATE_NAME]: {
        options: [
            {
                icon: 'folder',
                title: '< Back',
                description: 'Go back a level',
                transitionName: HOME_TRANSITION_NAME,
            },
            {
                icon: 'component',
                title: 'Icons',
                description:
                    'A list of the available SVG icons with tips for thei implementation',
                transitionName: ICONS_TRANSITION_NAME,
            },
        ],
        transitions: {
            [HOME_TRANSITION_NAME]: {
                targetState: HOME_STATE_NAME,
                action() {
                    console.log('Going back home');
                },
            },
            [ICONS_TRANSITION_NAME]: {
                targetState: ICONS_STATE_NAME,
                action() {
                    console.log('Opening Icons');
                },
            },
        },
        type: 'folder',
    },
    [ICONS_STATE_NAME]: {
        options: [
            {
                icon: 'folder',
                title: '< Back',
                description: 'Go back to Atoms',
                transitionName: ATOMS_TRANSITION_NAME,
            },
            {
                icon: 'folder',
                title: 'Home',
                description: 'Go back to Home screen',
                transitionName: HOME_TRANSITION_NAME,
            },
        ],
        transitions: {
            [ATOMS_TRANSITION_NAME]: {
                targetState: ATOMS_STATE_NAME,
                action() {
                    console.log('Going back to Atoms');
                },
            },
            [HOME_TRANSITION_NAME]: {
                targetState: HOME_STATE_NAME,
                action() {
                    console.log('Going back home');
                },
            },
        },
        type: 'component',
    },
    [MOLECULES_STATE_NAME]: {
        options: [
            {
                icon: 'folder',
                title: '< Back',
                description: 'Go back a level',
                transitionName: HOME_TRANSITION_NAME,
            },
        ],
        transitions: {
            [HOME_TRANSITION_NAME]: {
                targetState: HOME_STATE_NAME,
                action() {
                    console.log('Going back home');
                },
            },
        },
        type: 'folder',
    },
    [ORGANISMS_STATE_NAME]: {
        options: [
            {
                icon: 'folder',
                title: '< Back',
                description: 'Go back a level',
                transitionName: HOME_TRANSITION_NAME,
            },
        ],
        transitions: {
            [HOME_TRANSITION_NAME]: {
                targetState: HOME_STATE_NAME,
                action() {
                    console.log('Going back home');
                },
            },
        },
        type: 'folder',
    },
};

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
