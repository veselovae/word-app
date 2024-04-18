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
        <div class="buttons-container">
            <div class="buttons">
                <button class="btn-prev btn">
                    <img src="../assets/arrow-down-solid.svg" alt="prev" />
                </button>
                <button class="btn-flip btn" @click="rotateCard">flip</button>
                <button class="btn-next btn">
                    <img src="../assets/arrow-down-solid.svg" alt="next" />
                </button>
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
                transition: 0.7s;
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
        .buttons-container {
            position: relative;
            margin-top: 17px;
            max-width: 750px;
            .buttons {
                display: flex;
                gap: 42px;
                justify-content: center;

                .btn {
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: var(--beige);
                    transition: background-color 0.2s;
                    border: 0;
                    outline: 0;

                    &:hover {
                        background-color: var(--dark-beige);
                    }
                }

                .btn-prev,
                .btn-next {
                    width: 40px;
                    border-radius: 50%;

                    img {
                        height: 20px;
                        width: 20px;
                    }
                }
                .btn-prev {
                    img {
                        rotate: 90deg;
                    }
                }

                .btn-next {
                    img {
                        rotate: -90deg;
                    }
                }

                .btn-flip {
                    width: 109px;
                    border-radius: 50px;
                    font-size: 25px;
                    color: var(--dark-blue);
                }
            }
        }
    }
</style>
