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
        toggleShuffle(state) {
            if (state.index) {
                state.index = 0;
                state.score = 0;
                state.shuffle = !state.shuffle;
            } else {
                state.shuffle = !state.shuffle;
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
            state.shuffle = false;
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
        index: 0,
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
        getIndex(state) {
            return state.index;
        },
        getCorrectAndRandomAnswers(state, getters) {
            let translations = state.words.map((el) => el[1]);
            let random = [[getters.getPairOfWords[1], "true"]];
            if (state.words.length < 4) {
                translations.forEach((el) => {
                    if (!getters.getPairOfWords[1].includes(el)) {
                        random.push([el, "false"]);
                    }
                });
                while (random.length < 4) {
                    random.push([null, "false"]);
                }
            } else {
                while (random.length < 4) {
                    const randomWord =
                        translations[_.random(0, translations.length, false)];
                    const randomWords = random.map((el) => el[0]);
                    if (!randomWords.includes(randomWord) && randomWord) {
                        random.push([randomWord, "false"]);
                    }
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
        getFeedback(state) {
            const amount = state.words.length;
            const score = state.score;
            const part = amount / 3;

            if (score <= part) {
                return "bad";
            } else if (score <= part * 2) {
                return "normal";
            } else if (score <= amount) {
                return "good";
            }
        },
    },
};
