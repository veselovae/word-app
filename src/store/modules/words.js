import _ from "../../../node_modules/lodash";
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
            } else if (state.index === state.words.length - 1) {
                state.complete = true;
            }
        },
        resetScore(state) {
            state.score = 0;
        },
        increaseScore(state) {
            state.score++;
        },
        resetAll(state) {
            state.index = 0;
            state.score = 0;
            state.complete = false;
        },
    },
    state: {
        words: [
            ["computer", "компьютер"],
            ["home", "дом"],
            ["tree", "дерево"],
            ["girl", "девочка"],
            ["mouse", "мышь"],
        ],
        index: 2,
        score: 0,
        complete: false,
        shuffle: false,
    },
    getters: {
        getWords(state) {
            if (state.shuffle) {
                return _.shuffle(state.words);
            } else {
                return state.words;
            }
        },
        getPairOfWords(state, getters) {
            return getters.getWords[state.index];
        },
        getWordsLength(state) {
            return state.words.length;
        },
        getCount(state, getters) {
            return `${state.index + 1} / ${getters.getWordsLength}`;
        },
        getCorrectAndRandomAnswers(state, getters) {
            let translations = state.words.map((el) => el[1]);
            let random = [[getters.getPairOfWords[1], "true"]];
            while (random.length < 4) {
                const randomWord =
                    translations[_.random(0, translations.length, false)];
                const randomWords = random.map((el) => el[0]);
                if (!randomWords.includes(randomWord) && randomWord) {
                    random.push([randomWord, "false"]);
                }
            }
            return _.shuffle(random);
        },
        getScore(state) {
            return state.score;
        },
        getStatus(state) {
            return state.complete;
        },
    },
};
