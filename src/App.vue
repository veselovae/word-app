<template>
    <div class="main">
        <NavigationBox></NavigationBox>
        <!-- <CardsBox style="display: none"></CardsBox>
        <StudyingByCards style="display: none"></StadyingByCards> -->
        <component :is="getActiveComponent"></component>
    </div>
</template>

<script>
    import NavigationBox from "../src/components/NavigationBox.vue";
    import CardsBox from "../src/components/CardsBox.vue";
    import StudyingByCards from "./components/StudyingByCards.vue";

    import { mapGetters } from "vuex";

    export default {
        name: "App",
        components: { CardsBox, NavigationBox, StudyingByCards },
        computed: mapGetters(["getActiveComponent"]),
    };
</script>

<style lang="scss" scoped>
    .main {
        display: flex;
    }
</style>
