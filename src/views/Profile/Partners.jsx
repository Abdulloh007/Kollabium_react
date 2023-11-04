import { useEffect, useState } from "react";
import { getReferralCode } from "../../apis/refCodes";

function Partners() {

    const [refCode, setRefCode] = useState('')


    useEffect(() => {
        getReferralCode().then(res => setRefCode(res.data.data.code))
    }, [])

    return (
        <>
            <main class="content">

                <div class="team">
                    <div class="container">
                        <div class="team__inner">
                            <div class="team__top">
                                <h1 class="text40 font2">
                                    Партнерская программа
                                </h1>
                            </div>
                            <div class="levels">
                                <div class="levels__wrap">
                                    <div class="level-item ">
                                        <div class="level-item__num text24 font2">
                                            5
                                        </div>
                                        <div class="level-item__count">
                                            <span class="text20 text14-mob font2 purple-text2">120</span>
                                        </div>
                                        <div class="text12 font2">
                                            чел
                                        </div>
                                    </div>

                                    <div class="level-item ">
                                        <div class="level-item__num text24 font2">
                                            4
                                        </div>
                                        <div class="level-item__count">
                                            <span class="text20 text14-mob font2 purple-text2">500</span>
                                        </div>
                                        <div class="text12 font2">
                                            чел
                                        </div>
                                    </div>

                                    <div class="level-item _active">
                                        <div class="level-item__num text24 font2">
                                            3
                                        </div>
                                        <div class="level-item__count">
                                            <span class="text20 text14-mob font2 purple-text2">800</span>
                                        </div>
                                        <div class="text12 font2">
                                            чел
                                        </div>
                                    </div>

                                    <div class="level-item ">
                                        <div class="level-item__num text24 font2">
                                            2
                                        </div>
                                        <div class="level-item__count">
                                            <span class="text20 text14-mob font2 purple-text2">1 200</span>
                                        </div>
                                        <div class="text12 font2">
                                            чел
                                        </div>
                                    </div>

                                    <div class="level-item ">
                                        <div class="level-item__num text24 font2">
                                            1
                                        </div>
                                        <div class="level-item__count">
                                            <span class="text20 text14-mob font2 purple-text2">12 400</span>
                                        </div>
                                        <div class="text12 font2">
                                            чел
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="promo">
                                <div class="text24 text16-mob font2">
                                    Ваш промо код и пригласительная ссылка с промо кодом
                                </div>
                                <div class="promo-code">
                                    <div class="promo-code__num">
                                        <span class="text24 font2">
                                            {refCode ? (refCode) : ''}
                                        </span>
                                    </div>
                                    <button class="promo-code__btn" onClick={() => navigator.clipboard.writeText(refCode)}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.5781 3.32812C23.8594 3.60938 24 3.95312 24 4.35938V15C23.9688 15.8438 23.6719 16.5469 23.1094 17.1094C22.5469 17.6719 21.8438 17.9688 21 18H12C11.1562 17.9688 10.4531 17.6719 9.89062 17.1094C9.29688 16.5469 8.98438 15.8438 8.95312 15V3C8.98438 2.15625 9.28125 1.45312 9.84375 0.890625C10.4062 0.328125 11.1094 0.03125 11.9531 0H19.6406C20.0469 0 20.3906 0.140625 20.6719 0.421875L23.5781 3.32812ZM21.75 15H21.7031V6H19.5C19.0625 6 18.7031 5.85938 18.4219 5.57812C18.1406 5.29688 18 4.9375 18 4.5L17.9531 2.25H11.9531C11.4844 2.3125 11.2344 2.5625 11.2031 3V15C11.2344 15.4688 11.4844 15.7188 11.9531 15.75H21C21.4688 15.7188 21.7188 15.4688 21.75 15ZM12.75 21L12.7969 19.5H15V21C14.9688 21.8438 14.6719 22.5469 14.1094 23.1094C13.5469 23.6719 12.8438 23.9688 12 24H3C2.15625 23.9688 1.45312 23.6719 0.890625 23.1094C0.328125 22.5469 0.03125 21.8438 0 21V9C0.03125 8.15625 0.328125 7.45312 0.890625 6.89062C1.45312 6.32812 2.15625 6.03125 3 6H7.5V8.25H3C2.53125 8.28125 2.28125 8.53125 2.25 9L2.20312 21C2.23438 21.4688 2.48438 21.7188 2.95312 21.75H12C12.4688 21.7188 12.7188 21.4688 12.75 21Z" fill="#795AA0" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="promo-invite">
                                    <div class="text24 text16-mob font2">
                                        Пригласительная ссылка с промо кодом
                                    </div>
                                    <div class="promo-invite__link">
                                        <a href="" class="text18 text16-mob font2 primary-text">
                                            https://ZSyqctbO9ANq8mHkoBX8Pp/%F0%9F%98%8DKollabium
                                        </a>
                                    </div>
                                    <div class="promo-invite__nav">
                                        <button class="promo-invite__btn m-btn m-btn-purple _small">
                                            <span>Скопировать сссылку</span>
                                        </button>
                                    </div>
                                </div>

                                <div class="promo-follow">
                                    <div class="promo-follow__social">
                                        <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.5 0.625C23.0938 0.677083 26.349 1.5625 29.2656 3.28125C32.1823 5 34.5 7.31771 36.2188 10.2344C37.9375 13.151 38.8229 16.4062 38.875 20C38.8229 23.5938 37.9375 26.849 36.2188 29.7656C34.5 32.6823 32.1823 35 29.2656 36.7188C26.349 38.4375 23.0938 39.3229 19.5 39.375C15.9062 39.3229 12.651 38.4375 9.73438 36.7188C6.81771 35 4.5 32.6823 2.78125 29.7656C1.0625 26.849 0.177083 23.5938 0.125 20C0.177083 16.4062 1.0625 13.151 2.78125 10.2344C4.5 7.31771 6.81771 5 9.73438 3.28125C12.651 1.5625 15.9062 0.677083 19.5 0.625ZM28.4844 13.8281C28.4844 13.5677 28.4844 13.3073 28.4844 13.0469C28.4323 12.8385 28.3281 12.6562 28.1719 12.5C27.9115 12.3438 27.651 12.2656 27.3906 12.2656C27.1302 12.2656 26.5052 12.4479 25.5156 12.8125C24.5781 13.125 22.8073 13.8281 20.2031 14.9219C18.3281 15.7031 14.5521 17.3177 8.875 19.7656C7.98958 20.1302 7.52083 20.4948 7.46875 20.8594C7.46875 21.3802 8.01562 21.7708 9.10938 22.0312C9.26562 22.0312 9.42188 22.0573 9.57812 22.1094C10.0469 22.3177 10.5677 22.474 11.1406 22.5781C11.7135 22.7344 12.1823 22.8125 12.5469 22.8125C13.1719 22.8646 13.875 22.6302 14.6562 22.1094C19.9167 18.5156 22.651 16.6927 22.8594 16.6406C22.9635 16.5885 23.0938 16.6146 23.25 16.7188C23.3542 16.875 23.3802 16.9792 23.3281 17.0312C23.224 17.2917 22.651 17.8906 21.6094 18.8281C20.6198 19.8177 19.7083 20.7031 18.875 21.4844C18.3542 21.901 18.0677 22.1615 18.0156 22.2656C17.8594 22.4219 17.7031 22.5781 17.5469 22.7344C17.026 23.151 16.7135 23.5677 16.6094 23.9844C16.4531 24.349 16.7656 24.8177 17.5469 25.3906C18.3281 25.8594 19.0312 26.3021 19.6562 26.7188C20.2812 27.1875 21.0365 27.7083 21.9219 28.2812C22.1302 28.4375 22.3385 28.5938 22.5469 28.75C23.3281 29.375 24.1354 29.6875 24.9688 29.6875C25.5417 29.7396 25.9844 29.0885 26.2969 27.7344C26.5052 26.5365 26.7656 25.0521 27.0781 23.2812C27.3906 21.5104 27.6771 19.7656 27.9375 18.0469C28.1979 16.276 28.3802 14.8698 28.4844 13.8281Z" fill="#795AA0" />
                                        </svg>
                                    </div>
                                    <div class="promo-follow__content">
                                        <div class="text24 font2">
                                            Подписаться на телеграм бота Kollabium
                                        </div>
                                        <div class="promo-follow__nav">
                                            <button class="promo-invite__btn m-btn m-btn-purple _small">
                                                <span>Подписаться</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Partners;