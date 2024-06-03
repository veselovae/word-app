<template>
    <div class="question-card-container">
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
                    @keyup.enter="checkWord()"
                />
            </div>
        </div>
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
</style>
