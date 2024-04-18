export default {
    actions: {},
    mutations: {
        addWord(state, arrPair) {
            state.words.unshift(arrPair);
        },
        deleteWord(state, idx) {
            state.words.splice(idx, 1);
        },
        resetIndex(state) {
            state.index = 0;
        },
        decreaseIndex(state) {
            if (state.index > 0) {
                state.index--;
            }
        },
        increaseIndex(state) {
            if (state.index < state.words.length - 1) {
                state.index++;
            }
        },
    },
    state: {
        words: [
            ["home", "дом"],
            ["tree", "дерево"],
            ["girl", "девочка"],
            ["computer", "компьютер"],
            ["mouse", "мышь"],
        ],
        index: 2,
    },
    getters: {
        getWords(state) {
            return state.words;
        },
        getPairOfWords(state) {
            return state.words[state.index];
        },
        // getCount(state) {
        //     return `${state.index + 1} / ${state.words.length}`;
        // },
    },
};
