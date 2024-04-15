<template>
    <div class="cards-box">
        <div class="creation-box">
            <div class="create-card">
                <div class="term-box box">
                    <input
                        type="text"
                        id="term"
                        v-model="term"
                        autofocus
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

            <button class="btn-create-card" @click="putNewWord()">
                <img src="../assets/arrow-down-solid.svg" alt="create" />
            </button>
        </div>

        <AllCards></AllCards>
    </div>
</template>

<script>
    import AllCards from "./AllCards.vue";
    import { mapMutations } from "vuex";
    export default {
        data() {
            return {
                term: "",
                definition: "",
            };
        },
        components: { AllCards },
        methods: {
            ...mapMutations(["addWord"]),
            putNewWord() {
                if (!this.term || !this.definition) return false;
                this.addWord([this.term, this.definition]);
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
    .cards-box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 17px;

        .creation-box {
            display: flex;
            align-items: center;
            gap: 17px;

            .create-card {
                background-color: #efbc75;
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
                        color: #1a4a5a;
                        font-weight: 500;
                        background-color: transparent;
                        outline: none;
                        border: 0;
                        border-bottom: 2px solid #148d8d; /*1a4a5a*/
                        transition: border-color 0.1s;

                        &:focus {
                            border-color: #1a4a5a;
                        }
                    }

                    label {
                        color: #1a4a5a;
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
                background-color: #efbc75;
                cursor: pointer;

                img {
                    height: 20px;
                    width: 20px;
                    rotate: -90deg;
                }
            }
        }
    }
</style>
