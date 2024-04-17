<template>
    <div class="all-cards">
        <div class="card" v-for="(word, idx) of getWords" :key="idx">
            <img
                src="../assets/xmark-solid.svg"
                alt="remove"
                title="delete"
                @click="deleteWord(idx)"
            />
            <p class="term">{{ word[0] }}</p>
            <p class="definition">{{ word[1] }}</p>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from "vuex";
    export default {
        computed: mapGetters(["getWords"]),
        methods: mapMutations(["deleteWord"]),
    };
</script>

<style lang="scss" scoped>
    .all-cards {
        /*max-width: 1067px;*/
        width: auto;
        max-height: 693px;

        display: flex;
        flex-wrap: wrap;
        gap: 17px;

        overflow-y: scroll;

        padding-right: 5px;
        &::-webkit-scrollbar {
            display: none; /* for Chrome, Safari, and Opera */
        }

        /*scrollbar-gutter: stable;
        scrollbar-width: thin;
        scrollbar-color: #efbc75 #fcd8a6;*/

        .card {
            height: 125px;
            width: 250px;
            border-radius: 10px;
            background-color: #fcd8a6;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 20px;
            padding-left: 20px;
            padding-right: 20px;
            position: relative;

            img {
                position: absolute;
                right: 5px;
                top: 5px;
                height: 15px;
                width: 15px;
                cursor: pointer;
            }

            p {
                border-bottom: 2px solid #efbc75;
                color: #1a4a5a;
                padding-bottom: 3px;
            }
        }
    }
</style>
