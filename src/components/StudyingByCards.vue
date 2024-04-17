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
    </div>
</template>

<script>
    export default {
        methods: {
            rotateCard() {
                this.$refs.front.classList.toggle("dis");
                this.$refs.back.classList.toggle("act");
            },
        },
        mounted() {
            this.$nextTick(() =>
                window.addEventListener("keyup", (e) => {
                    if (e.key == " ") {
                        this.rotateCard();
                    }
                })
            );
        },
    };
</script>

<style lang="scss" scoped>
    @import url("../assets/colors.css");
    .container {
        width: 100%;
        .card {
            margin-top: calc(125px + 17px);
            max-width: 750px;
            position: relative;
            perspective: 1000px;

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
    }
</style>
