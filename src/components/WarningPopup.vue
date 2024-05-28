<template>
    <div class="warning-background">
        <div class="warning-container">
            <div class="warning-content">
                <h4 class="warning-header">Warning!</h4>
                <p class="warning-text">
                    Progress that you made may not be saved.
                </p>
                <div class="warning-buttons">
                    <button
                        class="warning-btn warning-leave-btn"
                        @click="leaveCurrentComponent()"
                    >
                        Leave
                    </button>
                    <button
                        class="warning-btn warning-cancel-btn"
                        @click="stayOnCurrentComponent()"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from "vuex";
    export default {
        props: [
            "replaceActiveComponent",
            "deleteSelectComponent",
            "selectComponent",
            "target",
            "deleteWarning",
        ],
        methods: {
            ...mapMutations(["resetIndex"]),
            leaveCurrentComponent() {
                this.deleteWarning();
                // this.resetIndex();
                this.replaceActiveComponent(this.target, this.selectComponent);
            },
            stayOnCurrentComponent() {
                this.deleteSelectComponent();
                this.deleteWarning();
            },
        },
    };
</script>

<style lang="scss">
    @import url("../assets/colors.css");
    .warning-background {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #ffffffbc;
        z-index: 10000;

        .warning-container {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: var(--red);
            color: #fff;
            padding: 20px;
            border-radius: 10px;

            .warning-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;

                h4 {
                    font-size: 25px;
                }

                .warning-text {
                    text-align: center;
                }

                .warning-buttons {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    gap: 10px;

                    .warning-btn {
                        padding: 7px 10px;
                        max-width: 130px;
                        flex: 1;
                        background-color: #fff;
                        border: 0;
                        border-radius: 5px;
                        cursor: pointer;
                        font-weight: 600;
                        color: var(--dark-blue);
                        transition: 0.2s;

                        &:hover {
                            background-color: var(--dark-red);
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
</style>
