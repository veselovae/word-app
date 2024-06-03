<template>
    <nav>
        <button
            class="nav-btn btn-creation active"
            title="create new card"
            data-component="CardsBox"
            @click="setActiveComponent($event.currentTarget, 'CardsBox')"
        >
            <img src="../assets/menu/circle-plus-solid.svg" alt="create" />
        </button>
        <button
            class="nav-btn btn-cards"
            @click="setActiveComponent($event.currentTarget, 'StudyingByCards')"
        >
            <svg
                width="70"
                height="50"
                viewBox="0 0 70 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="13.4598"
                    y="3"
                    width="53.5402"
                    height="32.4615"
                    rx="7"
                    stroke="white"
                    stroke-width="6"
                />
                <rect
                    x="3"
                    y="14.5385"
                    width="53.5402"
                    height="32.4615"
                    rx="7"
                    fill="white"
                    stroke="white"
                    stroke-width="6"
                />
            </svg>
        </button>
        <button
            class="nav-btn btn-choosing"
            @click="
                setActiveComponent(
                    $event.currentTarget,
                    'ChoosingTheCorrectTranslation'
                )
            "
        >
            <svg
                width="70"
                height="44"
                viewBox="0 0 70 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="33.2927" height="20" rx="5" fill="white" />
                <rect
                    x="36.7073"
                    width="33.2927"
                    height="20"
                    rx="5"
                    fill="white"
                />
                <rect
                    x="36.7073"
                    y="24"
                    width="33.2927"
                    height="20"
                    rx="5"
                    fill="white"
                />
                <rect y="24" width="33.2927" height="20" rx="5" fill="white" />
            </svg>
        </button>
        <button
            class="nav-btn btn-writing"
            @click="setActiveComponent($event.currentTarget, 'WritingTraining')"
        >
            <img src="../assets/menu/pen-solid.svg" alt="write" />
        </button>
        <button class="nav-btn btn-test">
            <img
                id="test"
                src="../assets/menu/file-lines-regular.svg"
                alt="write"
            />
        </button>
        <!-- <button class="nav-btn btn-game">
            <img src="../assets/menu/gamepad-solid.svg" alt="write" />
        </button> -->
        <WarningPopup
            v-if="warning"
            :replaceActiveComponent="replaceActiveComponent"
            :deleteSelectComponent="deleteSelectComponent"
            :deleteWarning="deleteWarning"
            :selectComponent="selectComponent"
            :target="target"
        />
    </nav>
</template>

<script>
    import { mapGetters, mapMutations } from "vuex";
    import WarningPopup from "./WarningPopup.vue";
    export default {
        data() {
            return {
                selectComponent: "",
                target: "",
                warning: false,
            };
        },
        components: { WarningPopup },
        computed: mapGetters(["getIndex", "getWarning", "getActiveComponent"]),
        methods: {
            ...mapMutations([
                "changeActiveComponent",
                "makeWarning",
                "resetIndex",
            ]),
            deleteWarning() {
                this.warning = false;
            },
            setActiveComponent(target, comp) {
                if (this.getActiveComponent != comp) {
                    this.selectComponent = comp;
                    this.target = target;
                    this.checkProgress();

                    if (!this.warning) {
                        this.replaceActiveComponent(target, comp);
                    }
                }
            },
            replaceActiveComponent(target, comp) {
                this.changeActiveComponent(comp);
                let btns = document.querySelectorAll(".nav-btn");
                btns.forEach((btn) => {
                    btn.classList.remove("active");
                });
                target.classList.add("active");

                this.resetIndex();
            },

            deleteSelectComponent() {
                this.selectComponent = null;
                this.target = null;
            },

            checkProgress() {
                if (this.getIndex) {
                    this.warning = true;
                }
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import url("../assets/colors.css");
    nav {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /*gap: 17px;*/
        margin-right: 87px;
        min-height: calc(100vh - (40px * 2));
        position: fixed;
        z-index: 10000;
        @media screen and (orientation: portrait) {
            display: flex;
            flex-direction: row;
            min-height: var(--size-elem-nav);
            width: calc(100vw - (40px * 2));
            justify-content: space-between;
            margin-right: 0px;
        }

        button {
            width: var(--size-elem-nav);
            height: var(--size-elem-nav);
            background-color: var(--cyan);
            border: 0;
            border-radius: 10px;
            cursor: pointer;

            @media screen and (orientation: portrait) and (max-width: 600px) {
                width: calc(var(--size-elem-nav) - 30px);
                height: calc(var(--size-elem-nav) - 30px);
            }

            @media screen and (orientation: portrait) and (max-width: 450px) {
                width: calc(var(--size-elem-nav) - 40px);
                height: calc(var(--size-elem-nav) - 40px);
            }

            &:focus-visible {
                outline: 2px solid var(--dark-blue);
            }

            &.active {
                background-color: var(--dark-blue);
            }
        }

        svg {
            width: var(--size-nav-icon);

            @media screen and (orientation: portrait) and (max-width: 600px) {
                width: calc(var(--size-nav-icon) - 20px);
            }
        }

        img {
            width: var(--size-nav-icon);

            @media screen and (orientation: portrait) and (max-width: 600px) {
                width: calc(var(--size-nav-icon) - 20px);
            }

            &[id="test"] {
                height: var(--size-nav-icon);

                @media screen and (orientation: portrait) and (max-width: 600px) {
                    height: calc(var(--size-nav-icon) - 20px);
                }
            }
        }
    }
</style>
