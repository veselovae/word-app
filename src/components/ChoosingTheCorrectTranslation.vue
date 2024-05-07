<template>
    <div class="container">
        <ResultSection v-if="getStatus" />
        <div class="container-content" v-else>
            <div class="term-wrap">
                <p>{{ getPairOfWords[0] }}</p>
            </div>
            <div class="answers-wrap">
                <button
                    class="answer-wrap"
                    v-for="(word, idx) in getCorrectAndRandomAnswers"
                    :key="idx"
                    :data-correct="word[1]"
                    @click="checkWord($event.currentTarget)"
                >
                    <span class="idx">{{ idx + 1 }}.</span>
                    <span class="answer">{{ word[0] }}</span>
                </button>
            </div>

            <div class="count-wrap">
                <p>{{ getCount }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import ResultSection from "./ResultSection.vue";
    import { mapGetters, mapMutations } from "vuex";

    export default {
        components: { ResultSection },
        computed: mapGetters([
            "getPairOfWords",
            "getCount",
            "getCorrectAndRandomAnswers",
            "getStatus",
        ]),
        methods: {
            ...mapMutations([
                "resetIndex",
                "increaseIndex",
                "resetScore",
                "increaseScore",
            ]),
            checkWord(el) {
                console.log(el);
                const selectedBtn = el;
                const isCorrect = el.dataset.correct === "true";
                if (isCorrect) {
                    selectedBtn.classList.add("correct");
                    this.increaseScore();
                } else {
                    selectedBtn.classList.add("incorrect");
                }

                document.querySelectorAll(".answer-wrap").forEach((btn) => {
                    if (btn.dataset.correct === "true") {
                        btn.classList.add("correct");
                    }
                    btn.disabled = true;
                    btn.style.cursor = "not-allowed";
                });
                setTimeout(() => {
                    document.querySelectorAll(".answer-wrap").forEach((btn) => {
                        let bntClassList = Array.from(btn.classList);
                        if (bntClassList.includes("correct")) {
                            btn.classList.remove("correct");
                        } else if (bntClassList.includes("incorrect")) {
                            btn.classList.remove("incorrect");
                        }
                    });
                    this.showNextWord();
                }, 1000);
            },
            showNextWord() {
                document.querySelectorAll(".answer-wrap").forEach((btn) => {
                    btn.disabled = false;
                    btn.style.cursor = "pointer";
                });
                this.increaseIndex();
            },
        },
        mounted() {
            this.resetIndex();
            this.resetScore();
        },
    };
</script>

<style lang="scss" scoped>
    @import url("../assets/colors.css");
    .container {
        width: 100%;
        padding-top: calc(125px + 17px);

        .container-content {
            max-width: 750px;
            color: var(--dark-blue);

            .term-wrap {
                width: 100%;
                font-size: 60px;
                height: var(--size-elem-nav);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 17px;
            }

            .answers-wrap {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                align-items: start;
                gap: calc(var(--size-elem-nav) / 2 + 17px) 70px;

                button.answer-wrap {
                    background-color: var(--beige);
                    transition: all 0.2s;
                    width: 340px;
                    border-radius: 10px;
                    min-height: calc(var(--size-elem-nav) / 2);
                    display: flex;
                    align-items: center;
                    padding: 10px 15px;
                    font-size: 25px;
                    cursor: pointer;
                    border: 0;
                    color: var(--dark-blue);

                    &:hover {
                        background-color: var(--dark-beige);
                    }

                    &:disabled:hover {
                        background-color: var(--beige);
                    }

                    span.idx {
                        margin-right: 7px;
                    }
                }
                button.correct {
                    background-color: var(--green) !important;
                }
                button.incorrect {
                    background-color: var(--red) !important;
                }
            }
            .count-wrap {
                margin-top: 30px;
                width: 100%;
                text-align: center;

                p {
                    font-size: 30px;
                }
            }
        }
    }
</style>
