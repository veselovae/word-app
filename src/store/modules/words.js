import _ from "../../../node_modules/lodash";
export default {
    actions: {},
    mutations: {
        addWord(state, arrPair) {
            state.words.unshift(arrPair);
            localStorage.setItem("words", JSON.stringify(state.words));
        },
        deleteWord(state, idx) {
            const deletedEl = state.words.find((el) => el[2] == idx);
            const idxOfArray = state.words.indexOf(deletedEl);
            state.words.splice(idxOfArray, 1);
            localStorage.setItem("words", JSON.stringify(state.words));
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
        words: localStorage.getItem("words")
            ? JSON.parse(localStorage.getItem("words"))
            : [],
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
        getPairOfCorrectAndRandomAnwersWithoutSuffle(state, getters) {
            let translations = state.words.map((el) => el[1]);
            let random = [[getters.getPairOfWords[1], true]];
            if (state.words.length < 2) {
                random.push([getters.getPairOfWords[1], true]);
            } else {
                while (random.length < 2) {
                    const randomWord =
                        translations[_.random(0, translations.length, false)];
                    const randomWords = random.map((el) => el[0]);
                    if (!randomWords.includes(randomWord) && randomWord) {
                        random.push([randomWord, false]);
                    }
                }
            }
            return random;
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
