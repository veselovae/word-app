<template>
    <div class="main">
        <NavigationBox></NavigationBox>
        <CardsBox></CardsBox>
    </div>
</template>

<script>
    import CardsBox from "../src/components/CardsBox.vue";
    import NavigationBox from "../src/components/NavigationBox.vue";
    export default {
        name: "App",
        components: { CardsBox, NavigationBox },
    };
</script>

<style lang="scss" scoped>
    .main {
        display: flex;
    }
</style>
