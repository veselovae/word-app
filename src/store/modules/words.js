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
    },
    getters: {
        getWords(state) {
            return state.words;
        },
        getPairOfWords(state) {
            return state.words[state.index];
        },
        getCount(state) {
            return `${state.index + 1} / ${state.words.length}`;
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
    },
};
