describe('[RouteStore]', () => {
    let state;
    let transition;
    beforeEach(() => {
        jest.resetModules();

        const router = require('./router');

        transition = router.transition;
        router.routeStore.subscribe((emittedState) => {
            state = emittedState;
        });
    });

    it('should initialise the state value', () => {
        expect(state).toBeDefined();
        expect(state.route).toEqual('/');
    });

    it('should transition to the correct state', () => {
        state.options.forEach((option) => {
            transition(option.transitionName);
            transition('home');
        });

        transition('atoms');
        transition('icons');
        transition('atoms');

        expect(state.route).toEqual('/atoms');
    });

    it('should prevent invalid transitions', () => {
        expect(state.route).toEqual('/');
        console.error = jest.fn();

        transition("That's not a valid transition name...");

        expect(console.error).toHaveBeenCalled();
        expect(state.route).toEqual('/');
    });
});
