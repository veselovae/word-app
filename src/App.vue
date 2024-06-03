<template>
    <div class="main">
        <NavigationBox></NavigationBox>
        <component :is="getActiveComponent" class="component"></component>
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
        width: 100vw;
        /*min-height: 100vh;*/
        padding: 40px;
        overflow-x: hidden;

        .component {
            margin-left: 160px;
            min-height: calc(100vh - (40px * 2));
            @media screen and (orientation: portrait) {
                margin-left: 0;
                padding-top: 160px;
            }

            @media screen and (max-width: 600px) {
                padding-top: 130px;
            }

            @media screen and (max-width: 450px) {
                padding-top: 120px;
            }
        }
    }
</style>
