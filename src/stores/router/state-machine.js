// https://kentcdodds.com/blog/implementing-a-simple-state-machine-library-in-javascript

function getState(machineDefinition, stateName) {
    const { options, type } = machineDefinition[stateName];
    return {
        options,
        type,
        route: stateName,
    };
}

function isValidStatename(machineDefinition, stateName) {
    return Boolean(machineDefinition[stateName]);
}

export function createMachine(machineDefinition) {
    const state = getState(
        machineDefinition,
        isValidStatename(machineDefinition, machineDefinition.initialStateName)
            ? machineDefinition.initialStateName
            : '/'
    );

    const machine = {
        state,
        transition(currentState, transitionName) {
            const currentStateDefinition =
                machineDefinition[currentState.route];
            const transition =
                currentStateDefinition.transitions[transitionName];

            if (!transition) {
                console.error(
                    `Transition Error: Invalid transition name: ${currentState.route} -> ${transitionName}`
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
