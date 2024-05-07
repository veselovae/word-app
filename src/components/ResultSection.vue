<template>
    <div class="result-container">
        <div class="result-content">
            <h3 class="result-header">Result:</h3>
            <div class="result-text">
                <span class="result-score">{{ getScore }}</span> /
                {{ getWordsLength }}
            </div>
        </div>
        <button class="btn-reset-index" @click="resetAll()">Start Again</button>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from "vuex";
    export default {
        computed: {
            ...mapGetters(["getScore", "getWordsLength"]),
        },
        methods: {
            ...mapMutations(["resetAll"]),
        },
    };
</script>

<style lang="scss">
    @import url("../assets/colors.css");
    .result-container {
        height: var(--size-elem-nav);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        .result-content {
            display: flex;
            align-items: center;
            gap: 20px;
            font-size: 30px;
            margin-bottom: 20px;
            color: var(--dark-blue);
        }
        .btn-reset-index {
            font-size: 20px;
            padding: 5px 10px;
            border-radius: 7px;
            border: 0;
            background-color: var(--cyan);
            color: #fff;
            transition: background-color 0.2s;
            cursor: pointer;

            &:hover {
                background-color: var(--dark-blue);
            }
        }
    }
</style>
