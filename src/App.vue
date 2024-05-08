<template>
    <div class="main">
        <NavigationBox></NavigationBox>
        <component :is="getActiveComponent"></component>
    </div>
</template>

<script>
    import NavigationBox from "../src/components/NavigationBox.vue";
    import CardsBox from "../src/components/CardsBox.vue";
    import StudyingByCards from "./components/StudyingByCards.vue";
    import WritingTraining from "./components/WritingTraining.vue";
    import ChoosingTheCorrectTranslation from "./components/ChoosingTheCorrectTranslation.vue";

    import { mapGetters } from "vuex";

    export default {
        name: "App",
        components: {
            CardsBox,
            NavigationBox,
            StudyingByCards,
            WritingTraining,
            ChoosingTheCorrectTranslation,
        },
        computed: mapGetters(["getActiveComponent"]),
    };
</script>

<style lang="scss" scoped>
    .main {
        display: flex;
        width: calc(100vw);
        min-height: 100vh;
        padding: 40px;
    }
</style>
