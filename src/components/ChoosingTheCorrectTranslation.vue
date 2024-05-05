<template>
    <div class="container">
        <div class="container-content">
            <div class="term-wrap">
                <p>{{ getPairOfWords[0] }}</p>
            </div>
            <div class="answers-wrap">
                <span
                    class="answer-wrap"
                    v-for="(word, idx) in getCorrectAndRandomAnswers"
                    :key="idx"
                    @click="checkWord(word[1])"
                >
                    <span class="idx">{{ idx + 1 }}.</span>
                    <span class="answer">{{ word[0] }}</span>
                </span>
            </div>

            <div class="count-wrap">
                <p>{{ getCount }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from "vuex";

    export default {
        computed: mapGetters([
            "getPairOfWords",
            "getCount",
            "getCorrectAndRandomAnswers",
        ]),
        methods: {
            ...mapMutations(["resetIndex", "increaseIndex"]),
            checkWord(word) {
                console.log(word);
            },
        },
        mounted() {
            this.resetIndex();
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

                span.answer-wrap {
                    background-color: var(--beige);
                    transition: background-color 0.2s;
                    width: 340px;
                    border-radius: 10px;
                    min-height: calc(var(--size-elem-nav) / 2);
                    display: flex;
                    align-items: center;
                    padding: 10px 15px;
                    font-size: 25px;
                    cursor: pointer;

                    &:hover {
                        background-color: var(--dark-beige);
                    }

                    span.idx {
                        margin-right: 7px;
                    }
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
