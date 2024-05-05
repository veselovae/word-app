<template>
    <div class="container">
        <div class="container-content">
            <div class="term-wrap">
                <p>term</p>
            </div>
            <div class="answers-wrap">
                <span class="answer first-answer">1. Answer1</span>
                <span class="answer second-answer">2. Answer2</span>
                <span class="answer third-answer">3. Answer3</span>
                <span class="answer fourth-answer">4. Answer4</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import url("../assets/colors.css");
    .container {
        width: 100%;
        padding-top: calc(125px + 17px);

        .container-content {
            max-width: 750px;

            .term-wrap {
                width: 100%;
                font-size: 60px;
                height: var(--size-elem-nav);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 17px;
            }

            .answers-wrap {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                align-items: start;
                gap: calc(var(--size-elem-nav) / 2 + 17px) 70px;

                span {
                    background-color: var(--beige);
                    transition: background-color 0.2s;
                    width: 340px;
                    border-radius: 10px;
                    min-height: calc(var(--size-elem-nav) / 2);
                    display: flex;
                    align-items: center;
                    padding: 10px 15px;
                    font-size: 25px;

                    &:hover {
                        background-color: var(--dark-beige);
                    }
                }
            }
        }
    }
</style>
