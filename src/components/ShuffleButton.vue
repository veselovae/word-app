<template>
    <div class="shuffle-btn">
        <label for="shuffle" class="shuffle-btn-img"
            ><img src="../assets/shuffle-solid.svg" alt="shuffle" for="shuffle"
        /></label>
        <input type="checkbox" id="shuffle" @click="toggleShuffle" />
        <label for="shuffle" class="toggle-shuffle-btn"></label>
    </div>
</template>

<script>
    import { mapMutations } from "vuex";
    export default {
        methods: mapMutations(["toggleShuffle"]),
    };
</script>

<style lang="scss">
    @import url("../assets/colors.css");
    .shuffle-btn {
        position: absolute;
        top: -35px;
        right: 0;
        width: auto;
        display: flex;
        align-items: center;
        gap: 10px;

        .shuffle-btn-img {
            display: flex;
            align-items: center;
            img {
                width: 20px;
            }
        }

        .toggle-shuffle-btn {
            position: relative;
            width: 46px;
            height: 25px;
            border-radius: 200px;
            cursor: pointer;
            background-color: var(--cyan);

            &::before {
                position: absolute;
                content: "";
                background-color: #fff;
                width: 21px;
                height: 21px;
                border-radius: 50%;
                margin: 2px;
                transition: 0.2s;
            }
        }

        input:checked + .toggle-shuffle-btn {
            background: var(--dark-blue);

            &::before {
                transform: translateX(21px);
            }
        }

        input {
            display: none;
        }
    }
</style>
