<template>
    <div class="container">
        <div class="card" @click="rotateCard">
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

        <div class="hint-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                    fill="#148d8d"
                    d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
                />
            </svg>

            <div class="hint-content">
                <div class="key left-key">
                    <img src="../assets/keys/left.png" alt="left-key" />
                    <span>previous word</span>
                </div>
                <div class="key space-key">
                    <img src="../assets/keys/space.png" alt="space-key" />
                    <span>flip card</span>
                </div>
                <div class="key right-key">
                    <img src="../assets/keys/right.png" alt="right-key" />
                    <span>next word</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from "vuex";
    export default {
        methods: {
            ...mapMutations(["resetIndex", "decreaseIndex", "increaseIndex"]),
            rotateCard() {
                this.$refs.front.classList.toggle("dis");
                this.$refs.back.classList.toggle("act");
            },
            flipOnBtn(e) {
                if (e.key == " ") {
                    this.rotateCard();
                }
                this.$refs.flip.blur();
            },
            getPrevCard() {
                this.decreaseIndex();
                this.$refs.prev.blur();
            },
            getPrevCardOnBtn(e) {
                if (e.key == "ArrowLeft") {
                    this.getPrevCard();
                }
            },
            getNextCard() {
                this.increaseIndex();
                this.$refs.next.blur();
            },
            getNextCardOnBtn(e) {
                if (e.key == "ArrowRight") {
                    this.getNextCard();
                }
            },
        },
        computed: mapGetters(["getPairOfWords", "getCount"]),
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

        .hint-container {
            height: 35px;
            width: 35px;
            position: absolute;
            bottom: 0;
            right: 0;

            svg path {
                transition: fill 0.2s;
            }

            &:hover {
                svg path {
                    fill: #1a4a5a;
                }

                div.hint-content {
                    display: block;
                }
            }

            div.hint-content {
                position: absolute;
                bottom: 35px;
                right: 35px;
                background-color: var(--beige);
                border-radius: 10px;
                padding: 10px;
                width: 180px;
                display: none;

                .key {
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    img {
                        width: 50px;
                    }
                    span {
                        display: block;
                        font-size: 13px;
                    }
                }
            }
        }
    }
</style>
