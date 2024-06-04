<template>
    <div class="cards-box">
        <div class="creation-box">
            <div class="create-card">
                <div class="term-box box">
                    <input
                        type="text"
                        id="term"
                        v-model="term"
                        @keyup.enter="putNewWord()"
                        @keyup.down="getFocusToDef()"
                        ref="inpTerm"
                    />
                    <label for="term">term</label>
                </div>
                <div class="definition-box box">
                    <input
                        type="text"
                        id="definition"
                        v-model="definition"
                        @keyup.enter="putNewWord()"
                        @keyup.up="getFocusToTerm()"
                        ref="inpDef"
                    />
                    <label for="definition">definition</label>
                </div>
            </div>

            <button
                class="btn-create-card"
                @click="putNewWord()"
                title="create"
            >
                <img src="../assets/arrow-down-solid.svg" alt="create" />
            </button>
        </div>

        <AllCards />
        <HintEnter class="hint">add word</HintEnter>
    </div>
</template>

<script>
    import AllCards from "./AllCards.vue";
    import HintEnter from "./HintEnter.vue";
    import { mapMutations } from "vuex";
    export default {
        data() {
            return {
                term: "",
                definition: "",
            };
        },
        components: { AllCards, HintEnter },
        methods: {
            ...mapMutations(["addWord"]),
            putNewWord() {
                if (!this.term || !this.definition) return false;

                const idxDate = new Date();

                this.addWord([
                    this.term.trim(),
                    this.definition.trim(),
                    +idxDate,
                ]);
                this.term = "";
                this.definition = "";
                this.$refs.inpTerm.focus();
            },
            getFocusToDef() {
                this.$refs.inpDef.focus();
            },
            getFocusToTerm() {
                this.$refs.inpTerm.focus();
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import url("../assets/colors.css");
    .cards-box {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 17px;
        position: fixed;

        .hint {
            position: fixed;
            /*bottom: 30px;
            right: 20px;*/
        }

        .creation-box {
            display: flex;
            align-items: center;
            gap: 17px;

            .create-card {
                background-color: var(--dark-beige);
                padding: 13px 20px;
                border-radius: 10px;
                min-width: 250px;
                height: 125px;

                .box {
                    display: flex;
                    flex-direction: column;

                    input {
                        width: 100%;
                        font-size: 16px;
                        padding: 3px 0;
                        color: var(--dark-blue);
                        font-weight: 500;
                        background-color: transparent;
                        outline: none;
                        border: 0;
                        border-bottom: 2px solid var(--cyan);
                        transition: border-color 0.1s;

                        &:focus {
                            border-color: var(--dark-blue);
                        }
                    }

                    label {
                        color: var(--dark-blue);
                        margin-top: 3px;
                        font-size: 13px;
                        user-select: none;
                    }
                }

                .term-box {
                    margin-bottom: 7px;
                }
            }

            .btn-create-card {
                border-radius: 50%;
                padding: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                background-color: var(--beige);
                transition: background-color 0.2s;
                cursor: pointer;

                &:hover {
                    background-color: var(--dark-beige);
                }

                img {
                    height: 20px;
                    width: 20px;
                    rotate: -90deg;
                }
            }
        }
    }
</style>
