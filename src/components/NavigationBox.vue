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
        <button class="nav-btn btn-choosing">
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
        <button class="nav-btn btn-game">
            <img src="../assets/menu/gamepad-solid.svg" alt="write" />
        </button>
    </nav>
</template>

<script>
    import { mapMutations } from "vuex";
    export default {
        methods: {
            ...mapMutations(["changeActiveComponent"]),
            setActiveComponent(target, comp) {
                this.changeActiveComponent(comp);
                let btns = document.querySelectorAll(".nav-btn");
                btns.forEach((btn) => {
                    btn.classList.remove("active");
                });
                target.classList.add("active");
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import url("../assets/colors.css");
    nav {
        display: flex;
        flex-direction: column;
        gap: 17px;
        margin-right: 87px;

        button {
            width: 125px;
            height: 125px;
            background-color: var(--cyan);
            border: 0;
            border-radius: 10px;
            cursor: pointer;

            &:focus-visible {
                outline: 0;
            }

            &.active {
                background-color: var(--dark-blue);
            }
        }

        img {
            width: 70px;

            &[id="test"] {
                height: 70px;
            }
        }
    }
</style>
