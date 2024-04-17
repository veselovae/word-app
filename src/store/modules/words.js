export default {
    actions: {},
    mutations: {
        addWord(state, arrPair) {
            state.words.unshift(arrPair);
        },
        deleteWord(state, idx) {
            this.state.words.splice(idx, 1);
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
    },
    getters: {
        getWords(state) {
            return state.words;
        },
    },
};
