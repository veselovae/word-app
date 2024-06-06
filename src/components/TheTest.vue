<template>
    <div class="container">
        <div class="result" v-if="getStatus">
            <ResultSection class="result-for-test" />
            <TheTestResult :result="result" />
        </div>

        <div class="test-container" v-else>
            <button class="btn-start" @click="getRandomQuestionComp()">
                Start
            </button>

            <div class="question-box">
                <TheWriting
                    v-if="current == 'TheWriting'"
                    :length="this.getPairOfWords[0].length"
                    @sendingResponse="checkAnswer"
                >
                    {{ this.getPairOfWords[1] }}
                </TheWriting>
                <YesOrNo
                    v-else-if="current == 'YesOrNo'"
                    @sendingResponse="checkAnswer"
                >
                    <template v-slot:term>{{
                        this.getPairOfWords[0]
                    }}</template>
                    <template v-slot:def>{{
                        this.getRandomDefForYONComp[0]
                    }}</template>
                </YesOrNo>
                <TheChoice
                    v-else-if="current == 'TheChoice'"
                    @sendingResponse="checkAnswer"
                >
                    <slot>{{ this.getPairOfWords[0] }}</slot>
                </TheChoice>

                <!-- <button @click="nextCard()" class="next-word">
                    <img src="../assets/arrow-down-solid.svg" alt="next word" />
                </button> -->
            </div>
            <div class="count">
                <p>{{ this.getCount }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from "../../node_modules/lodash";
    import TheWriting from "./comps-for-test/TheWriting.vue";
    import YesOrNo from "./comps-for-test/YesOrNo.vue";
    import TheChoice from "./comps-for-test/TheChoice.vue";
    import ResultSection from "./ResultSection.vue";
    import TheTestResult from "./TheTestResult.vue";

    import { mapGetters, mapMutations } from "vuex";

    export default {
        data() {
            return {
                current: "",
                comps: ["TheWriting", "YesOrNo", "TheChoice"],
                result: [],
            };
        },
        computed: {
            ...mapGetters([
                "getPairOfWords",
                "getCount",
                "getCorrectAndRandomAnswers",
                "getPairOfCorrectAndRandomAnwersWithoutSuffle",
                "getStatus",
                "getIndex",
            ]),
            getRandomDefForYONComp() {
                return this.getPairOfCorrectAndRandomAnwersWithoutSuffle[
                    _.random(0, 1, false)
                ];
            },
        },
        components: {
            TheWriting,
            YesOrNo,
            TheChoice,
            ResultSection,
            TheTestResult,
        },
        methods: {
            ...mapMutations([
                "toggleShuffle",
                "resetAll",
                "increaseIndex",
                "increaseScore",
            ]),
            getRandomQuestionComp() {
                return this.comps[_.random(0, this.comps.length - 1, false)];
            },
            checkAnswer(answer, comp) {
                if (this.getIndex == 0) {
                    this.result = [];
                }

                if (comp == "TheChoice") {
                    if (answer[1] == "true") {
                        this.increaseScore();
                        this.result.push([
                            [true, "TheChoice"],
                            this.getPairOfWords,
                        ]);
                    } else {
                        this.result.push([
                            [false, "TheChoice"],
                            this.getPairOfWords,
                            answer[0],
                        ]);
                    }
                } else if (comp == "YesOrNo") {
                    if (
                        (this.getRandomDefForYONComp[1] && answer) ||
                        (!this.getRandomDefForYONComp[1] && !answer)
                    ) {
                        this.increaseScore();
                        this.result.push([
                            [true, "YesOrNo"],
                            [
                                this.getPairOfWords[0],
                                this.getRandomDefForYONComp[0],
                            ],
                            answer,
                        ]);
                    } else {
                        this.result.push([
                            [false, "YesOrNo"],
                            [
                                this.getPairOfWords[0],
                                this.getRandomDefForYONComp[0],
                            ],
                            answer,
                        ]);
                    }
                } else if (comp == "TheWriting") {
                    if (
                        this.getPairOfWords[0].toLowerCase() ==
                        answer.toLowerCase()
                    ) {
                        this.increaseScore();
                        this.result.push([
                            [true, "TheWriting"],
                            this.getPairOfWords,
                        ]);
                    } else {
                        this.result.push([
                            [false, "TheWriting"],
                            this.getPairOfWords,
                            answer,
                        ]);
                    }
                }

                this.nextCard();
            },
            nextCard() {
                this.increaseIndex();
                this.current = this.getRandomQuestionComp();
            },
        },
        mounted() {
            this.resetAll();
            this.toggleShuffle();
            this.current = this.getRandomQuestionComp();
        },
    };
</script>

<style lang="scss">
    .container {
        width: 100%;
        padding-top: calc(125px + 17px);
        position: relative;
        overflow: hidden;

        .result {
            margin-top: -142px;
            overflow: hidden;

            @media screen and (orientation: portrait) {
                margin-top: -50px;
            }

            .result-for-test {
                flex-direction: row;
                max-width: 1000px;
                width: 100%;
                align-items: center;

                @media screen and (max-width: 700px) {
                    flex-direction: column;
                    width: max-content;
                    align-items: flex-start;
                }

                .result-content {
                    font-size: 50px;

                    @media screen and (max-width: 1000px) {
                        font-size: 40px;
                    }
                }

                img {
                    width: 226px;
                    height: 226px;
                    position: relative;
                    left: -16px;

                    @media screen and (max-width: 1000px) {
                        width: 180px;
                        height: 180px;
                    }
                }
            }
        }

        .btn-start {
            display: none;
        }

        .question-box {
            display: flex;
            align-items: center;
            gap: 10px;

            .next-word {
                background-color: var(--beige);
                border: 0;
                border-radius: 50%;
                padding: 10px;
                transition: background-color 0.2s;

                &:hover {
                    background-color: var(--dark-beige);
                }

                img {
                    height: 50px;
                    width: 50px;
                    rotate: -90deg;

                    @media screen and (orientation: portrait) and (max-width: 600px) {
                        height: 30px;
                        width: 30px;
                    }
                }
            }
        }

        .count {
            margin-top: 20px;
            max-width: 750px;
            text-align: center;

            p {
                font-size: 30px;
                color: var(--dark-blue);
            }
        }
    }
</style>
