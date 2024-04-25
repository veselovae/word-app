<template>
    <div class="container">
        <div class="card-and-button">
            <div class="card">
                <p class="definition">{{ this.getPairOfWords[1] }}</p>
                <div class="term" ref="term"></div>
            </div>
            <button>
                <img
                    src="../assets/arrow-down-solid.svg"
                    alt="next word"
                    @click="getNextWord()"
                />
            </button>
        </div>
        <div class="count">
            <p>{{ getCount }}</p>
        </div>
    </div>
</template>
<script>
    import { mapGetters, mapMutations } from "vuex";
    export default {
        computed: mapGetters(["getPairOfWords", "getCount"]),
        methods: {
            ...mapMutations(["resetIndex", "increaseIndex"]),
            getNextWord() {
                this.increaseIndex();
                this.createWord();
            },
            createWord() {
                let term = this.getPairOfWords[0];
                let result = this.getArr(term);
                let html = result.map((el) => {
                    if (el[0] === "i") return this.getInputBox(el[2]);
                    if (el[0] === "s")
                        return this.getSpanWithLetter(el[1], el[2]);
                });
                html.forEach((el) => {
                    this.$refs.term.append(el);
                });
                this.$refs.term.innerHTML = html.join("");
                this.getFocusToFirstInp();
                this.addEventToInp();
            },
            addEventToInp() {
                let inps = document.querySelectorAll(".inp-letter");
                inps.forEach((el) => {
                    el.addEventListener("keyup", this.getFocusToNextInp);
                });
            },
            getFocusToFirstInp() {
                let first = document.querySelector(".inp-letter");
                first.focus();
            },
            getFocusToNextInp(e) {
                const curEl = e.target;
                const idx = curEl.dataset.index;
                const currentWord = this.getPairOfWords;
                if (e.key === "Backspace" && idx > 0) {
                    curEl.previousElementSibling.value = "";
                    curEl.previousElementSibling.focus();

                    // console.log(idx);
                    // if (idx === 0) return false;
                    // curEl.previousElementSibling.focus();
                }
                if (e.key === "Backspace") {
                    if (idx > 0) {
                        if (curEl.previousElementSibling.tagName === "SPAN") {
                            let previousSibling = curEl;
                            let indexOfSibling = idx;
                            while (
                                previousSibling.previousElementSibling
                                    .tagName === "SPAN" &&
                                indexOfSibling - 1 > 0
                            ) {
                                previousSibling =
                                    previousSibling.previousElementSibling;
                                indexOfSibling = previousSibling.dataset.index;
                            }
                            previousSibling.previousElementSibling.focus();
                        }
                    } else if (idx == 0) return false;
                    // if (curEl.value === "") {
                    //     curEl.previousElementSibling.value = "";
                    //     curEl.previousElementSibling.focus();
                    // }
                    // console.log(idx);
                    // if (idx === 0) return false;
                    // curEl.previousElementSibling.focus();
                } else {
                    if (idx < currentWord[0].length - 1) {
                        if (curEl.nextElementSibling.tagName === "SPAN") {
                            let nextSibling = curEl.nextElementSibling;
                            let indexOfSibling = nextSibling.dataset.index;
                            while (
                                nextSibling.tagName === "SPAN" &&
                                indexOfSibling < currentWord[0].length - 1
                            ) {
                                nextSibling = nextSibling.nextElementSibling;
                                indexOfSibling = nextSibling.dataset.index;
                            }
                            nextSibling.focus();
                        }
                        curEl.nextElementSibling.focus();
                    }
                }
            },
            getArr(word) {
                let res = [];
                for (let i = 0; i < word.length; i++) {
                    res[i] = "s";
                }
                let num = null;
                if (word.length <= 5) {
                    num = word.length - 1;
                } else if (word.length <= 10) {
                    num = word.length - 2;
                } else {
                    num = word.length - 3;
                }

                let i = 0;
                let randoms = [];
                while (i < num) {
                    let r = this.getRandom(word);
                    if (!randoms.includes(r)) {
                        randoms.push(r);
                        res[r] = "i";
                        i++;
                    }
                }
                let letters = word.split("");
                res = res.map((el, index) => [el, letters[index], index]);

                return res;
            },
            getRandom(word) {
                return Math.floor(Math.random() * word.length);
            },
            getInputBox(idx) {
                return `<input class='inp-letter' type='text' maxlength=1' data-index=${idx}>`;
            },
            getSpanWithLetter(letter, idx) {
                return `<span class='letter' data-index=${idx}>${letter}</span>`;
            },
            formWord() {
                let el = Array.from(this.$refs.term.children);
                let arr = [];
                el.forEach((el) => {
                    if (el.tagName === "SPAN") arr.push(el.innerHTML);
                    else arr.push(el.value);
                });

                console.log(arr.join(""));
            },
        },
        mounted() {
            this.resetIndex();
            this.$nextTick(() => {
                this.createWord();
            });
        },
    };
</script>

<style lang="scss" scoped>
    @import url("../assets/colors.css");
    .container {
        width: 100%;
        padding-top: calc(125px + 17px);
        .card-and-button {
            /*max-width: 750px;*/
            max-width: 850px;
            display: flex;
            align-items: center;
            gap: 20px;
            .card {
                width: 100%;
                /*max-width: 750px;*/
                position: relative;
                perspective: 1000px;
                height: 409px;
                background-color: var(--dark-beige);
                border-radius: 30px;
                color: var(--dark-blue);
                display: flex;
                flex-direction: column;
                gap: 70px;
                justify-content: center;
                padding-left: 40px;

                .definition {
                    font-size: 40px;
                }

                .term {
                    display: flex;
                    gap: 5px;
                    align-items: flex-end;
                }
            }

            button {
                background-color: var(--beige);
                border: 0;
                border-radius: 50%;
                padding: 10px;
                transition: background-color 0.2s;

                &:hover {
                    background-color: var(--dark-beige);
                }

                img {
                    height: 50px;
                    width: 50px;
                    rotate: -90deg;
                }
            }
        }

        .count {
            margin-top: 20px;
            max-width: 750px;
            text-align: center;

            p {
                font-size: 30px;
                color: var(--dark-blue);
            }
        }
    }
</style>
