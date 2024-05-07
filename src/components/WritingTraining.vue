<template>
    <div class="container">
        <div class="card-and-button">
            <div class="card">
                <p class="definition">{{ this.getPairOfWords[1] }}</p>
                <!-- <div class="term" ref="term"></div> -->
                <div style="display: flex; flex-direction: row">
                    <v-otp-input
                        ref="otpInput"
                        input-classes="otp-input"
                        separator=""
                        inputType="letter-numeric"
                        :num-inputs="this.getPairOfWords[0].length"
                        v-model:value="word"
                        :should-auto-focus="true"
                        :should-focus-order="true"
                        @keyup.enter="checkWord()"
                        :isDisabled="dis"
                    />
                </div>
            </div>
            <button @click="checkWord()">
                <img src="../assets/arrow-down-solid.svg" alt="next word" />
            </button>
        </div>
        <div class="count">
            <p>{{ getCount }}</p>
        </div>

        <DymanicPopup
            v-if="showPopup"
            :closePopup="closePopup"
            :beforePopupUnmount="beforePopupUnmount"
        >
            <template v-slot:yourAnswer>
                {{ word }}
            </template>
            <template v-slot:corect>
                {{ getPairOfWords[0] }}
            </template>
        </DymanicPopup>
    </div>
</template>
<script>
    import { mapGetters, mapMutations } from "vuex";
    import DymanicPopup from "./DynamicPopup.vue";
    export default {
        data() {
            return {
                word: "",
                showPopup: false,
                dis: false,
            };
        },
        components: { DymanicPopup },
        computed: mapGetters(["getPairOfWords", "getCount"]),
        methods: {
            ...mapMutations(["resetIndex", "increaseIndex"]),
            checkWord() {
                if (this.word) {
                    if (
                        this.word.toLowerCase() ===
                        this.getPairOfWords[0].toLowerCase()
                    ) {
                        this.getNextWord();
                    } else {
                        this.showPopup = true;
                        this.dis = true;
                    }
                }
            },
            closePopup() {
                this.showPopup = false;
                this.getNextWord();
                this.dis = false;
            },
            beforePopupUnmount() {
                let el = document.querySelector(".otp-input");
                el.focus();
            },
            clearInput() {
                this.$refs.otpInput.clearInput();
            },
            getNextWord() {
                this.increaseIndex();
                this.clearInput();
            },
            getRandom(word) {
                return Math.floor(Math.random() * word.length);
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
        .card-and-button {
            /*max-width: 750px;*/
            max-width: 850px;
            display: flex;
            align-items: center;
            gap: 20px;
            .card {
                width: 100%;
                /*max-width: 750px;*/
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
                padding-left: 40px;

                .definition {
                    font-size: 40px;
                }

                .term {
                    display: flex;
                    gap: 5px;
                    align-items: flex-end;
                }
            }

            button {
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
