import Vuex from "vuex";
// import products from "./modules/products";

export default new Vuex.Store({
    actions: {},
    mutations: {
        // updatePosts(state, posts) {
        //     state.posts = posts;
        // },
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
});
