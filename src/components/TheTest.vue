<template>
    <div class="container">
        <button class="btn-start" @click="getRandomQuestionComp()">
            Start
        </button>
        <div class="question-box">
            <TheWriting
                v-if="current == 'TheWriting'"
                :length="this.getPairOfWords[0].length"
            >
                {{ this.getPairOfWords[1] }}
            </TheWriting>
            <YesOrNo v-else-if="current == 'YesOrNo'">
                <template v-slot:def>{{ this.getPairOfWords[1] }}</template>
                <template v-slot:term>{{ this.getPairOfWords[0] }}</template>
            </YesOrNo>
            <TheChoice v-else-if="current == 'TheChoice'">
                <slot>{{ this.getPairOfWords[0] }}</slot>
            </TheChoice>

            <button @click="checkWord()" class="next-word">
                <img src="../assets/arrow-down-solid.svg" alt="next word" />
            </button>
        </div>
        <div class="count">
            <p>{{ this.getCount }}</p>
        </div>
    </div>
</template>

<script>
    import _ from "../../node_modules/lodash";
    import TheWriting from "./comps-for-test/TheWriting.vue";
    import YesOrNo from "./comps-for-test/YesOrNo.vue";
    import TheChoice from "./comps-for-test/TheChoice.vue";
    import { mapGetters, mapMutations } from "vuex";

    export default {
        data() {
            return {
                current: "",
                comps: ["TheWriting", "YesOrNo", "TheChoice"],
            };
        },
        computed: mapGetters(["getPairOfWords", "getCount"]),
        components: { TheWriting, YesOrNo, TheChoice },
        methods: {
            ...mapMutations(["toggleShuffle", "resetAll"]),
            getRandomQuestionComp() {
                return this.comps[_.random(0, this.comps.length - 1, false)];
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
