export default {
    actions: {},
    mutations: {
        changeActiveComponent(state, component) {
            state.activeComponent = component;
        },
    },
    state: {
        activeComponent: "StudyingByCards",
    },
    getters: {
        getActiveComponent(state) {
            return state.activeComponent;
        },
    },
};
