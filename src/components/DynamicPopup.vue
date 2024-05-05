<template>
    <div class="popup-background">
        <div class="popup-container">
            <div class="popup-content">
                <h4>Wrong Answer!</h4>
                <div class="answer your-answer">
                    <p>Your answer:</p>
                    <slot name="yourAnswer"></slot>
                </div>
                <div class="answer correct-answer">
                    <p>Correct:</p>
                    <slot name="corect"></slot>
                </div>
                <div class="btn-popup-container">
                    <button
                        class="btn-popup-close"
                        @click="closePopup()"
                        ref="btn"
                    >
                        Ok
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["closePopup", "beforePopupUnmount"],
        mounted() {
            this.$refs.btn.focus();
        },
        unmounted() {
            this.beforePopupUnmount();
        },
    };
</script>

<style lang="scss" scoped>
    @import url("../assets/colors.css");
    .popup-background {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #ffffffbc;

        .popup-container {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: var(--cyan);
            color: #fff;
            padding: 20px 40px;
            border-radius: 10px;

            h4 {
                font-size: 30px;
                margin-bottom: 20px;
            }

            .answer {
                display: flex;
                gap: 10px;
                font-size: 20px;

                p {
                    font-weight: bold;
                }
            }
            .btn-popup-container {
                width: 100%;
                text-align: center;

                .btn-popup-close {
                    padding: 5px 10px;
                    width: 150px;
                    margin-top: 20px;
                    border: 0;
                    font-size: 20px;
                    font-weight: 500;
                    border-radius: 5px;
                    cursor: pointer;
                    background-color: #fff;
                    color: var(--dark-blue);
                    transition: all 0.2s;

                    &:hover {
                        background-color: var(--dark-blue);
                        color: #fff;
                    }

                    &:focus-visible,
                    &:focus {
                        outline: 2px solid var(--dark-blue);
                        outline-offset: -3px;
                    }
                }
            }
        }
    }
</style>
