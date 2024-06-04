<template>
    <div class="question-card-container">
        <div class="term"><slot name="term"></slot></div>
        <div class="def"><slot name="def"></slot></div>
        <div class="btns">
            <button>true</button>
            <button>false</button>
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
    };
</script>

<style lang="scss">
    .question-card-container {
        gap: 30px;
        .def {
            font-size: 30px;

            @media screen and (max-width: 600px) {
                font-size: 40px;
            }
        }

        .term {
            font-size: 60px !important;

            @media screen and (max-width: 600px) {
                font-size: 20px;
            }
        }

        .btns {
            width: 100%;
            display: flex;
            gap: 30px;

            @media screen and (max-width: 600px) {
                gap: 20px;
            }

            button {
                flex: 1;
                height: 70px;
                border-radius: 10px;
                border: 3px solid #fcd8a6;
                background: transparent;
                color: var(--dark-blue);
                font-size: 25px;
                transition: background 0.2s ease;

                @media screen and (max-width: 600px) {
                    height: 60px;
                    border: 2px solid #fcd8a6;
                    font-size: 20px;
                }

                @media screen and (max-width: 450px) {
                    height: 50px;
                    border: 2px solid #fcd8a6;
                    font-size: 15px;
                }

                &:hover {
                    background: var(--beige);
                }
            }
        }
    }
</style>
