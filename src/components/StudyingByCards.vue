<template>
    <div class="container">
        <div class="card" @click="rotateCard">
            <div class="front-side-card" ref="front">
                <p>Term</p>
            </div>
            <div class="back-side-card" ref="back">
                <p>Definition</p>
            </div>
        </div>
        <div class="buttons">
            <button class="prev"></button>
            <button class="flip"></button>
            <button class="next"></button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            rotateCard() {
                this.$refs.front.classList.toggle("dis");
                this.$refs.back.classList.toggle("act");
            },
            flipOnBtn(e) {
                if (e.key == " ") {
                    this.rotateCard();
                }
            },
        },
        mounted() {
            this.$nextTick(() =>
                window.addEventListener("keyup", this.flipOnBtn)
            );
        },
        beforeUnmount() {
            window.removeEventListener("keyup", this.flipOnBtn);
        },
    };
</script>

<style lang="scss" scoped>
    @import url("../assets/colors.css");
    .container {
        width: 100%;
        padding-top: calc(125px + 17px);
        .card {
            max-width: 750px;
            position: relative;
            perspective: 1000px;
            height: 409px;

            .back-side-card,
            .front-side-card {
                height: 409px;
                width: 100%;
                border-radius: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                transition: 1s;
                backface-visibility: hidden;

                p {
                    font-size: 50px;
                }
            }
            .front-side-card {
                background-color: var(--beige);
            }
            .back-side-card {
                background-color: var(--dark-beige);
                transform: rotateX(-180deg);
            }

            .dis {
                transform: rotateX(180deg) !important;
            }

            .act {
                transform: rotateX(0) !important;
            }
        }
        .buttons {
            position: relative;
        }
    }
</style>
