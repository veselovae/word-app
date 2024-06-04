<template>
    <div class="question-writing-card-container">
        <div class="writing-card">
            <div class="def"><slot></slot></div>
            <div class="term">
                <div style="display: flex; flex-direction: row">
                    <v-otp-input
                        ref="otpInput"
                        input-classes="otp-input"
                        separator=""
                        inputType="letter-numeric"
                        :num-inputs="this.length"
                        v-model:value="word"
                        :should-auto-focus="true"
                        :should-focus-order="true"
                        @keyup.enter="sendToParent(this.word, 'TheWriting')"
                    />
                </div>
            </div>
        </div>
        <button
            @click="sendToParent(this.word, 'TheWriting')"
            class="next-word"
        >
            <img src="../../assets/arrow-down-solid.svg" alt="next word" />
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                word: "",
            };
        },
        props: ["length"],
        methods: {
            sendToParent(value, comp) {
                this.$emit("sendingResponse", value, comp);
                this.word = "";
            },
        },
    };
</script>

<style lang="scss">
    .question-writing-card-container {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        color: var(--dark-blue);
        gap: 10px;

        .writing-card {
            width: 100%;
            max-width: 750px;
            height: 409px;
            display: flex;
            flex-direction: column;
            gap: 70px;
            justify-content: center;
            padding: 40px;
            background-color: var(--dark-beige);
            border-radius: 30px;

            @media screen and (max-width: 600px) {
                height: 350px;
            }

            @media screen and (max-width: 450px) {
                height: 300px;
            }

            .def {
                font-size: 40px;

                @media screen and (max-width: 600px) {
                    font-size: 30px;
                }
            }

            .term {
                display: flex;
                gap: 5px;
                align-items: flex-end;
            }
        }
    }
</style>
