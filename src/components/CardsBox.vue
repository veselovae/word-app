<template>
    <div class="cards-box">
        <div class="create-card">
            <div class="term-box box">
                <input type="text" id="term" />
                <label for="term">term</label>
            </div>
            <div class="definition-box box">
                <input type="text" id="definition" />
                <label for="definition">definition</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {};
</script>

<style lang="scss" scoped>
    .create-card {
        /*:first-child {
            margin-bottom: 10px;
        }*/

        .box {
            input {
                display: block;
            }
        }

        /*[class*="box"] {
            display: flex;
            flex-direction: column;
        }*/
    }
</style>
