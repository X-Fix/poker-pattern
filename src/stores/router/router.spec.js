describe('[RouteStore]', () => {
    beforeEach(() => {
        jest.resetModules();
    });

    describe('getStore()', () => {
        it('should set the initial state to "home" by default', () => {
            const routeStore = require('./router').getStore();

            let state;
            routeStore.subscribe((emittedState) => {
                state = emittedState;
            });

            expect(state).toBeDefined();
            expect(state.route).toEqual('/');
        });

        it('should set the initial state to the route provided if valid', () => {
            const routeStore = require('./router').getStore('/atoms/icons');

            let state;
            routeStore.subscribe((emittedState) => {
                state = emittedState;
            });

            expect(state).toBeDefined();
            expect(state.route).toEqual('/atoms/icons');
        });

        it('should fall back to defaults if the route provided is unrecognised', () => {
            const routeStore = require('./router').getStore(
                '/something/is/not/right'
            );

            let state;
            routeStore.subscribe((emittedState) => {
                state = emittedState;
            });

            expect(state).toBeDefined();
            expect(state.route).toEqual('/');
        });
    });

    describe('transition()', () => {
        it('should update the state according to the provided transition', () => {
            const { getStore, transition } = require('./router');
            const routeStore = getStore();

            let state;
            routeStore.subscribe((emittedState) => {
                state = emittedState;
            });

            state.options.forEach((option) => {
                transition(option.transitionName);
                transition('home');
            });
            transition('atoms');
            transition('icons');
            transition('atoms');

            expect(state.route).toEqual('/atoms');
        });

        it('should not update state when provided with an unrecognised transition', () => {
            const { getStore, transition } = require('./router');
            const routeStore = getStore();
            console.error = jest.fn();

            let state;
            routeStore.subscribe((emittedState) => {
                state = emittedState;
            });

            expect(state.route).toEqual('/');

            transition("That's not a valid transition name...");

            expect(console.error).toHaveBeenCalled();
            expect(state.route).toEqual('/');
        });
    });
});
