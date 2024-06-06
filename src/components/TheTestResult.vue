<template>
    <div class="test-result-box">
        <div
            class="test-result-card"
            v-for="(card, id) of result"
            :key="id"
            :data-status="card[0][0]"
        >
            <span class="result-card-term">{{ card[1][0] }}</span>
            <span class="result-card-def">{{ card[1][1] }}</span>
            <div class="result-card-your-answer">
                <span class="result-card-wrong" v-if="!card[0][0]"
                    >your: {{ card[2] }}</span
                >
                <span
                    class="result-card-true"
                    v-if="card[0][1] == 'YesOrNo' && card[0][0]"
                    >your: {{ card[2] }}</span
                >
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["result"],
    };
</script>
<style lang="scss">
    .test-result-box {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none;
        }

        @media screen and (max-width: 1000px) {
            max-height: calc(100vh - 180px - 40px - 40px - 20px);
        }

        @media screen and (orientation: portrait) {
            max-height: calc(100vh - 100px - 10px - 180px - 40px - 40px - 20px);
        }

        @media screen and (max-width: 700px) {
            max-height: calc(100vh - 100px - 10px - 291px - 40px - 40px - 20px);
        }

        @media (max-width: 600px) {
            max-height: calc(100vh - 70px - 10px - 291px - 40px - 40px - 20px);
        }

        @media (max-width: 450px) {
            max-height: calc(100vh - 60px - 10px - 291px - 40px - 40px - 20px);
        }

        .test-result-card {
            height: 180px;
            max-width: 320px;
            width: 100%;
            border-radius: 30px;
            padding: 5px 20px;
            color: var(--dark-blue);
            display: flex;
            flex-direction: column;

            @media screen and (max-width: 750px) {
                max-width: 290px;
            }

            @media screen and (max-width: 700px) {
                max-width: 250px;
            }

            @media screen and (max-width: 700px) {
                max-width: 100%;
            }

            &[data-status="true"] {
                background-color: var(--green);
            }
            &[data-status="false"] {
                background-color: var(--red);
            }

            .result-card-term {
                font-size: 50px;
                margin-bottom: 8px;
            }

            .result-card-def {
                font-size: 30px;
                margin-bottom: 15px;
            }

            .result-card-your-answer {
                font-size: 24px;

                .result-card-wrong {
                    color: var(--dark-red);
                }

                .result-card-true {
                    color: var(--dark-green);
                }
            }
        }
    }
</style>
