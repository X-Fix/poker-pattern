import { readable } from 'svelte/store';
import stateMachine from './state-machine';

let currentState = stateMachine.state;

let setState;
export const routeStore = readable(currentState, function start(set) {
    setState = set;
});

export function transition(transitionName) {
    currentState = stateMachine.transition(currentState, transitionName);
    setState(currentState);
}
