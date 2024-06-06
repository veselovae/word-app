<template>
    <div class="all-cards">
        <div class="card" v-for="word of getWords" :key="word[2]">
            <img
                src="../assets/xmark-solid.svg"
                alt="remove"
                title="delete"
                @click="deleteWord(word[2])"
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
    @import url("../assets/colors.css");
    .all-cards {
        /*max-width: 1067px;*/
        width: auto;
        max-height: 609px;

        display: flex;
        flex-wrap: wrap;
        gap: 17px;

        overflow-y: scroll;

        padding-right: 5px;
        padding-bottom: 20px;
        &::-webkit-scrollbar {
            display: none;
        }

        /*scrollbar-gutter: stable;
        scrollbar-width: thin;
        scrollbar-color: #efbc75 #fcd8a6;*/

        .card {
            height: 125px;
            width: 250px;
            border-radius: 10px;
            background-color: var(--beige);
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
                border-bottom: 2px solid var(--dark-beige);
                color: var(--dark-blue);
                padding-bottom: 3px;
            }
        }
    }
</style>
