<template>
    <div class="container">
        <div class="card" @click="rotateCard">
            <ShuffleButton class="shuffle-btn" />
            <div class="front-side-card" ref="front">
                <p>{{ this.getPairOfWords[0] }}</p>
                <div class="count">
                    <p>{{ getCount }}</p>
                </div>
            </div>
            <div class="back-side-card" ref="back">
                <p>{{ this.getPairOfWords[1] }}</p>
                <div class="count">
                    <p>{{ getCount }}</p>
                </div>
            </div>
        </div>

        <div class="buttons-container">
            <div class="buttons">
                <button class="btn-prev btn" @click="getPrevCard" ref="prev">
                    <img src="../assets/arrow-down-solid.svg" alt="prev" />
                </button>
                <button class="btn-flip btn" @click="rotateCard" ref="flip">
                    flip
                </button>
                <button class="btn-next btn" @click="getNextCard" ref="next">
                    <img src="../assets/arrow-down-solid.svg" alt="next" />
                </button>
            </div>
        </div>
        <TheHintForStudyingByCards />
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from "vuex";
    import TheHintForStudyingByCards from "./TheHintForStudyingByCards.vue";
    import ShuffleButton from "./ShuffleButton.vue";

    export default {
        data() {
            return {
                flip: false,
            };
        },
        components: { TheHintForStudyingByCards, ShuffleButton },
        methods: {
            ...mapMutations(["resetIndex", "decreaseIndex", "increaseIndex"]),
            rotateCard() {
                this.$refs.front.classList.toggle("dis");
                this.$refs.back.classList.toggle("act");
                this.flip = !this.flip;
            },
            flipOnBtn(e) {
                if (e.key == " ") {
                    this.rotateCard();
                }
                this.$refs.flip.blur();
            },
            getPrevCard() {
                if (this.flip) {
                    this.rotateCard();
                    setTimeout(() => {
                        this.decreaseIndex();
                        // this.$refs.prev.blur();
                    }, 200);
                } else {
                    this.decreaseIndex();
                    // this.$refs.prev.blur();
                }
            },
            getPrevCardOnBtn(e) {
                if (e.key == "ArrowLeft") {
                    this.getPrevCard();
                }
            },
            getNextCard() {
                if (this.flip) {
                    this.rotateCard();
                    setTimeout(() => {
                        this.increaseIndex();
                        // this.$refs.next.blur();
                    }, 200);
                } else {
                    this.increaseIndex();
                    // this.$refs.next.blur();
                }
            },
            getNextCardOnBtn(e) {
                if (e.key == "ArrowRight") {
                    this.getNextCard();
                }
            },
        },
        computed: mapGetters(["getPairOfWords", "getCount", "getWarning"]),
        mounted() {
            this.$nextTick(() => {
                this.resetIndex();
                window.addEventListener("keyup", this.flipOnBtn);
                window.addEventListener("keyup", this.getPrevCardOnBtn);
                window.addEventListener("keyup", this.getNextCardOnBtn);
            });
        },
        beforeUnmount() {
            window.removeEventListener("keyup", this.flipOnBtn);
            window.removeEventListener("keyup", this.getPrevCardOnBtn);
            window.removeEventListener("keyup", this.getNextCardOnBtn);
        },
    };
</script>

<style lang="scss" scoped>
    @import url("../assets/colors.css");
    .container {
        width: 100%;
        padding-top: calc(125px + 17px);
        position: relative;
        .card {
            max-width: 750px;
            position: relative;
            perspective: 1000px;
            height: 409px;

            .shuffle-btn {
                top: -35px;
                right: 0;
            }

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
                    color: var(--dark-blue);
                }

                .count {
                    position: absolute;
                    right: 15px;
                    bottom: 10px;

                    p {
                        font-size: 25px;
                    }
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
