export default {
    actions: {},
    mutations: {
        changeActiveComponent(state, component) {
            state.activeComponent = component;
        },
    },
    state: {
        activeComponent: "CardsBox",
    },
    getters: {
        getActiveComponent(state) {
            return state.activeComponent;
        },
    },
};
