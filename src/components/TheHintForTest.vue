<template>
    <div class="hint-container-test">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
                fill="#148d8d"
                d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
            />
        </svg>

        <div class="hint-content">
            <div class="key enter-key">
                <img
                    class="enter-img"
                    src="../assets/keys/enter.png"
                    alt="enter-key"
                />
                <span>check word</span>
            </div>

            <div class="key numbers-keys">
                <div class="key-img">
                    <img src="../assets/keys/one.png" alt="one-key" />
                    <span class="sep">-</span>
                    <img src="../assets/keys/four.png" alt="four-key" />
                </div>

                <span class="desc">choosing a word</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .hint-container-test {
        height: 35px;
        width: 35px;
        position: absolute;
        bottom: -10px;
        right: -25px;

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

            .enter-key {
                img {
                    width: 50px;
                }

                span {
                    font-size: 13px;
                }
            }

            .key {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 10px;

                .key-img {
                    display: flex;
                    align-items: center;
                    gap: 5px;

                    img {
                        width: 30px;
                    }
                    span.sep {
                        font-weight: 900;
                        font-size: 15px;
                    }
                }

                span.desc {
                    display: block;
                    font-size: 13px;
                }
            }
        }
    }
</style>
