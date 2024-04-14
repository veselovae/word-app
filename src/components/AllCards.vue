<template>
    <div class="all-cards">
        <div class="card">
            <img src="../assets/xmark-solid.svg" alt="remove" />
            <p class="term">term</p>
            <p class="definition">definition</p>
        </div>
        <div class="card">
            <img src="../assets/xmark-solid.svg" alt="remove" />
            <p class="term">term</p>
            <p class="definition">definition</p>
        </div>
        <div class="card">
            <img src="../assets/xmark-solid.svg" alt="remove" />
            <p class="term">term</p>
            <p class="definition">definition</p>
        </div>
        <div class="card">
            <img src="../assets/xmark-solid.svg" alt="remove" />
            <p class="term">term</p>
            <p class="definition">definition</p>
        </div>
        <div class="card">
            <img src="../assets/xmark-solid.svg" alt="remove" />
            <p class="term">term</p>
            <p class="definition">definition</p>
        </div>
        <div class="card">
            <img src="../assets/xmark-solid.svg" alt="remove" />
            <p class="term">term</p>
            <p class="definition">definition</p>
        </div>
    </div>
</template>

<script>
    export default {};
</script>

<style lang="scss" scoped>
    .all-cards {
        height: 600px;
        overflow-y: auto;
        padding-right: 2px;

        scrollbar-gutter: stable;
        scrollbar-width: thin;
        scrollbar-color: #efbc75 #fcd8a6;

        .card {
            height: 100px;
            width: 250px;
            border-radius: 10px;
            background-color: #fcd8a6;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 20px;
            padding-left: 20px;
            padding-right: 20px;
            margin-bottom: 15px;
            position: relative;

            &:last-child {
                margin-bottom: 0;
            }

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
