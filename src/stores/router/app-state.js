const HOME_STATE_NAME = '/';
const ATOMS_STATE_NAME = '/atoms';
const ICONS_STATE_NAME = '/atoms/icons';
const MOLECULES_STATE_NAME = '/molecules';
const BUTTONS_STATE_NAME = '/molecules/buttons';
const INPUTS_STATE_NAME = '/molecules/inputs';
const POKER_CARDS_STATE_NAME = '/molecules/poker-cards';
const ORGANISMS_STATE_NAME = '/organisms';
const PARTICIPANTS_LIST_STATE_NAME = '/organisms/participants-list';
const HEADER_STATE_NAME = '/organisms/header';
const FOOTER_STATE_NAME = '/organisms/footer';
const CHOOSE_FORM_STATE_NAME = '/organisms/choose-form';
const CREATE_SESSION_FORM_STATE_NAME = '/organisms/create-session-form';
const JOIN_SESSION_FORM_STATE_NAME = '/organisms/join-session-form';
const MENU_STATE_NAME = '/organisms/menu';
const HOME_TRANSITION_NAME = 'home';
const ATOMS_TRANSITION_NAME = 'atoms';
const ICONS_TRANSITION_NAME = 'icons';
const MOLECULES_TRANSITION_NAME = 'molecules';
const BUTTONS_TRANSITION_NAME = 'buttons';
const INPUTS_TRANSITION_NAME = 'inputs';
const POKER_CARDS_TRANSITION_NAME = 'poker-cards';
const ORGANISMS_TRANSITION_NAME = 'organisms';
const PARTICIPANTS_LIST_TRANSITION_NAME = 'participants-list';
const HEADER_TRANSITION_NAME = 'header';
const FOOTER_TRANSITION_NAME = 'footer';
const CHOOSE_FORM_TRANSITION_NAME = 'choose-form';
const CREATE_SESSION_FORM_TRANSITION_NAME = 'create-session-form';
const JOIN_SESSION_FORM_TRANSITION_NAME = 'join-session-form';
const MENU_TRANSITION_NAME = 'menu';

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
                    'A list of the available SVG icons with tips for their implementation',
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
            {
                icon: 'component',
                title: 'Buttons',
                description:
                    'A list of the available buttons with tips for their implementation',
                transitionName: BUTTONS_TRANSITION_NAME,
            },
            {
                icon: 'component',
                title: 'Inputs',
                description:
                    'A list of the available inputs with tips for their implementation',
                transitionName: INPUTS_TRANSITION_NAME,
            },
            {
                icon: 'component',
                title: 'Poker Cards',
                description: 'The poker cards used during voting',
                transitionName: POKER_CARDS_TRANSITION_NAME,
            },
        ],
        transitions: {
            [HOME_TRANSITION_NAME]: {
                targetState: HOME_STATE_NAME,
                action() {
                    console.log('Going back home');
                },
            },
            [BUTTONS_TRANSITION_NAME]: {
                targetState: BUTTONS_STATE_NAME,
                action() {
                    console.log('Opening Buttons');
                },
            },
            [INPUTS_TRANSITION_NAME]: {
                targetState: INPUTS_STATE_NAME,
                action() {
                    console.log('Opening Inputs');
                },
            },
            [POKER_CARDS_TRANSITION_NAME]: {
                targetState: POKER_CARDS_STATE_NAME,
                action() {
                    console.log('Opening Poker Cards');
                },
            },
        },
        type: 'folder',
    },
    [BUTTONS_STATE_NAME]: {
        options: [
            {
                icon: 'folder',
                title: '< Back',
                description: 'Go back to Molecules',
                transitionName: MOLECULES_TRANSITION_NAME,
            },
            {
                icon: 'folder',
                title: 'Home',
                description: 'Go back to Home screen',
                transitionName: HOME_TRANSITION_NAME,
            },
        ],
        transitions: {
            [MOLECULES_TRANSITION_NAME]: {
                targetState: MOLECULES_STATE_NAME,
                action() {
                    console.log('Going back to Molecules');
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
    [INPUTS_STATE_NAME]: {
        options: [
            {
                icon: 'folder',
                title: '< Back',
                description: 'Go back to Molecules',
                transitionName: MOLECULES_TRANSITION_NAME,
            },
            {
                icon: 'folder',
                title: 'Home',
                description: 'Go back to Home screen',
                transitionName: HOME_TRANSITION_NAME,
            },
        ],
        transitions: {
            [MOLECULES_TRANSITION_NAME]: {
                targetState: MOLECULES_STATE_NAME,
                action() {
                    console.log('Going back to Molecules');
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
    [POKER_CARDS_STATE_NAME]: {
        options: [
            {
                icon: 'folder',
                title: '< Back',
                description: 'Go back to Molecules',
                transitionName: MOLECULES_TRANSITION_NAME,
            },
            {
                icon: 'folder',
                title: 'Home',
                description: 'Go back to Home screen',
                transitionName: HOME_TRANSITION_NAME,
            },
        ],
        transitions: {
            [MOLECULES_TRANSITION_NAME]: {
                targetState: MOLECULES_STATE_NAME,
                action() {
                    console.log('Going back to Molecules');
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
    [ORGANISMS_STATE_NAME]: {
        options: [
            {
                icon: 'folder',
                title: '< Back',
                description: 'Go back a level',
                transitionName: HOME_TRANSITION_NAME,
            },
            {
                icon: 'component',
                title: 'Participants List',
                description:
                    'The participant list including participant cards and the associated actions',
                transitionName: PARTICIPANTS_LIST_TRANSITION_NAME,
            },
            {
                icon: 'component',
                title: 'Header',
                description: 'The main page header',
                transitionName: HEADER_TRANSITION_NAME,
            },
            {
                icon: 'component',
                title: 'Footer',
                description: 'The main page footer',
                transitionName: FOOTER_TRANSITION_NAME,
            },
            {
                icon: 'component',
                title: 'Choose Form',
                description:
                    'The initial form for choosing to either create or join a session',
                transitionName: CHOOSE_FORM_TRANSITION_NAME,
            },
            {
                icon: 'component',
                title: 'Create Session Form',
                description: 'The form for creating a new session',
                transitionName: CREATE_SESSION_FORM_TRANSITION_NAME,
            },
            {
                icon: 'component',
                title: 'Join Session Form',
                description: 'The form for joining an existing session',
                transitionName: JOIN_SESSION_FORM_TRANSITION_NAME,
            },
            {
                icon: 'component',
                title: 'Menu',
                description:
                    'The drop-down menu toggled by the header menu button',
                transitionName: MENU_TRANSITION_NAME,
            },
        ],
        transitions: {
            [HOME_TRANSITION_NAME]: {
                targetState: HOME_STATE_NAME,
                action() {
                    console.log('Going back home');
                },
            },
            [PARTICIPANTS_LIST_TRANSITION_NAME]: {
                targetState: PARTICIPANTS_LIST_STATE_NAME,
                action() {
                    console.log('Opening Participant Cards');
                },
            },
            [HEADER_TRANSITION_NAME]: {
                targetState: HEADER_STATE_NAME,
                action() {
                    console.log('Opening Header');
                },
            },
            [FOOTER_TRANSITION_NAME]: {
                targetState: FOOTER_STATE_NAME,
                action() {
                    console.log('Opening Footer');
                },
            },
            [CHOOSE_FORM_TRANSITION_NAME]: {
                targetState: CHOOSE_FORM_STATE_NAME,
                action() {
                    console.log('Opening Choose Form');
                },
            },
            [CREATE_SESSION_FORM_TRANSITION_NAME]: {
                targetState: CREATE_SESSION_FORM_STATE_NAME,
                action() {
                    console.log('Opening Create Session Form');
                },
            },
            [JOIN_SESSION_FORM_TRANSITION_NAME]: {
                targetState: JOIN_SESSION_FORM_STATE_NAME,
                action() {
                    console.log('Opening Join Session Form');
                },
            },
            [MENU_TRANSITION_NAME]: {
                targetState: MENU_STATE_NAME,
                action() {
                    console.log('Opening Menu');
                },
            },
        },
        type: 'folder',
    },
    [PARTICIPANTS_LIST_STATE_NAME]: {
        options: [
            {
                icon: 'folder',
                title: '< Back',
                description: 'Go back to Organisms',
                transitionName: ORGANISMS_TRANSITION_NAME,
            },
            {
                icon: 'folder',
                title: 'Home',
                description: 'Go back to Home screen',
                transitionName: HOME_TRANSITION_NAME,
            },
        ],
        transitions: {
            [ORGANISMS_TRANSITION_NAME]: {
                targetState: ORGANISMS_STATE_NAME,
                action() {
                    console.log('Going back to Organisms');
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
    [HEADER_STATE_NAME]: {
        options: [
            {
                icon: 'folder',
                title: '< Back',
                description: 'Go back to Organisms',
                transitionName: ORGANISMS_TRANSITION_NAME,
            },
            {
                icon: 'folder',
                title: 'Home',
                description: 'Go back to Home screen',
                transitionName: HOME_TRANSITION_NAME,
            },
        ],
        transitions: {
            [ORGANISMS_TRANSITION_NAME]: {
                targetState: ORGANISMS_STATE_NAME,
                action() {
                    console.log('Going back to Organisms');
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
    [FOOTER_STATE_NAME]: {
        options: [
            {
                icon: 'folder',
                title: '< Back',
                description: 'Go back to Organisms',
                transitionName: ORGANISMS_TRANSITION_NAME,
            },
            {
                icon: 'folder',
                title: 'Home',
                description: 'Go back to Home screen',
                transitionName: HOME_TRANSITION_NAME,
            },
        ],
        transitions: {
            [ORGANISMS_TRANSITION_NAME]: {
                targetState: ORGANISMS_STATE_NAME,
                action() {
                    console.log('Going back to Organisms');
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
    [CHOOSE_FORM_STATE_NAME]: {
        options: [
            {
                icon: 'folder',
                title: '< Back',
                description: 'Go back to Organisms',
                transitionName: ORGANISMS_TRANSITION_NAME,
            },
            {
                icon: 'folder',
                title: 'Home',
                description: 'Go back to Home screen',
                transitionName: HOME_TRANSITION_NAME,
            },
        ],
        transitions: {
            [ORGANISMS_TRANSITION_NAME]: {
                targetState: ORGANISMS_STATE_NAME,
                action() {
                    console.log('Going back to Organisms');
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
    [CREATE_SESSION_FORM_STATE_NAME]: {
        options: [
            {
                icon: 'folder',
                title: '< Back',
                description: 'Go back to Organisms',
                transitionName: ORGANISMS_TRANSITION_NAME,
            },
            {
                icon: 'folder',
                title: 'Home',
                description: 'Go back to Home screen',
                transitionName: HOME_TRANSITION_NAME,
            },
        ],
        transitions: {
            [ORGANISMS_TRANSITION_NAME]: {
                targetState: ORGANISMS_STATE_NAME,
                action() {
                    console.log('Going back to Organisms');
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
    [JOIN_SESSION_FORM_STATE_NAME]: {
        options: [
            {
                icon: 'folder',
                title: '< Back',
                description: 'Go back to Organisms',
                transitionName: ORGANISMS_TRANSITION_NAME,
            },
            {
                icon: 'folder',
                title: 'Home',
                description: 'Go back to Home screen',
                transitionName: HOME_TRANSITION_NAME,
            },
        ],
        transitions: {
            [ORGANISMS_TRANSITION_NAME]: {
                targetState: ORGANISMS_STATE_NAME,
                action() {
                    console.log('Going back to Organisms');
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
    [MENU_STATE_NAME]: {
        options: [
            {
                icon: 'folder',
                title: '< Back',
                description: 'Go back to Organisms',
                transitionName: ORGANISMS_TRANSITION_NAME,
            },
            {
                icon: 'folder',
                title: 'Home',
                description: 'Go back to Home screen',
                transitionName: HOME_TRANSITION_NAME,
            },
        ],
        transitions: {
            [ORGANISMS_TRANSITION_NAME]: {
                targetState: ORGANISMS_STATE_NAME,
                action() {
                    console.log('Going back to Organisms');
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
};

export default stateMachineDefinition;
