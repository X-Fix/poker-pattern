// https://kentcdodds.com/blog/implementing-a-simple-state-machine-library-in-javascript
import { readable } from 'svelte/store';

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

function getState(machineDefinition, stateName) {
    const { options, type } = machineDefinition[stateName];
    return {
        options,
        type,
        route: stateName,
    };
}

function createMachine(machineDefinition) {
    const initialState = getState(
        machineDefinition,
        machineDefinition.initialStateName
    );

    const machine = {
        state: initialState,
        transition(currentState, transitionName) {
            const currentStateDefinition =
                machineDefinition[currentState.route];
            const transition =
                currentStateDefinition.transitions[transitionName];

            if (!transition) {
                console.error(
                    `Missing target transition: ${currentState.route} -> ${transitionName}`
                );
                return currentState;
            }

            if (transition.action) {
                transition.action();
            }

            machine.state = getState(machineDefinition, transition.targetState);

            return machine.state;
        },
    };
    return machine;
}

const machine = createMachine({
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
                    console.log('Going back home');
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
});

let currentState = machine.state;

/* for (let i = 0; i < currentState.options.length; i++) {
    currentState = machine.transition(currentState, currentState.options[i].transitionName);
    currentState = machine.transition(currentState, HOME_TRANSITION_NAME);
}

machine.transition(currentState, ORGANISMS_TRANSITION_NAME); */

let setState;
export const routeStore = readable(currentState, function start(set) {
    setState = set;
});

export function transition(transitionName) {
    currentState = machine.transition(currentState, transitionName);
    setState(currentState);
}
