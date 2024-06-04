<template>
    <div class="question-card-container">
        <div class="term"><slot></slot></div>
        <div class="btns-answers">
            <button
                class="btn-answer"
                v-for="(word, idx) in getCorrectAndRandomAnswers"
                :key="idx"
                :data-correct="word[1]"
                @click="sendToParent(word, 'TheChoice')"
            >
                <span class="idx">{{ idx + 1 }}.</span>
                <span class="answer">{{ word[0] }}</span>
            </button>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        computed: mapGetters(["getCorrectAndRandomAnswers"]),
        methods: {
            sendToParent(value, comp) {
                this.$emit("sendingResponse", value, comp);
            },
        },
    };
</script>

<style lang="scss">
    .question-card-container {
        width: 100%;
        max-width: 750px;
        position: relative;
        perspective: 1000px;
        height: 409px;
        background-color: var(--dark-beige);
        border-radius: 30px;
        color: var(--dark-blue);
        display: flex;
        flex-direction: column;
        gap: 70px;
        justify-content: center;
        padding: 40px;

        @media screen and (max-width: 600px) {
            height: 350px;
        }

        @media screen and (max-width: 450px) {
            height: 300px;
        }

        @media screen and (max-width: 762px) {
            gap: 15px;
        }
        .term {
            font-size: 50px;

            @media screen and (max-width: 762px) {
                font-size: 30px;
            }
        }

        .btns-answers {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;

            @media screen and (max-width: 762px) {
                flex-wrap: nowrap;
                flex-direction: column;
                gap: 5px;
            }

            .btn-answer {
                width: 320px;
                background-color: var(--beige);
                transition: all 0.2s;
                border-radius: 10px;
                border: 3px solid var(--beige);
                min-height: calc(var(--size-elem-nav) / 2);
                display: flex;
                align-items: center;
                padding: 10px 15px;
                font-size: 25px;
                cursor: pointer;
                color: var(--dark-blue);

                @media screen and (max-width: 1060px) {
                    width: 270px;
                    font-size: 20px;
                }

                @media screen and (max-width: 820px) {
                    width: 250px;
                    font-size: 20px;
                }

                @media screen and (max-width: 762px) {
                    width: 100%;
                }

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
        }
    }
</style>
