function Chat() {
    return (
        <>
            <main class="content">

                <div class="chat">
                    <div class="container">
                        <div class="chat__inner _blur-bg">
                            <div class="chat-list">
                                <fieldset class="search-field">
                                    <input type="text" placeholder="Поиск по сообщениям"/>
                                        <svg class="search-field__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.0008 20.9998L15.8038 15.8028M15.8038 15.8028C17.2104 14.3962 18.0006 12.4885 18.0006 10.4993C18.0006 8.51011 17.2104 6.60238 15.8038 5.19581C14.3972 3.78923 12.4895 2.99902 10.5003 2.99902C8.51108 2.99902 6.60336 3.78923 5.19678 5.19581C3.79021 6.60238 3 8.51011 3 10.4993C3 12.4885 3.79021 14.3962 5.19678 15.8028C6.60336 17.2094 8.51108 17.9996 10.5003 17.9996C12.4895 17.9996 14.3972 17.2094 15.8038 15.8028Z" stroke="#795AA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                </fieldset>

                                <div class="chat-list__mob">
                                    <div class="profile__mob-title">
                                        <span class="text24 font2">Сообщения</span>
                                    </div>
                                    <div class="chat-items">
                                        <div class="chat-item">
                                            <div class="chat-item__img">
                                                <div class="avatar">
                                                    <img src="img/avatar2.webp" alt=""/>
                                                </div>
                                            </div>
                                            <div class="chat-item__info">
                                                <div class="text16 text14-mob font2">
                                                    Iren Lasky
                                                </div>
                                                <div class="text16 text12-mob">
                                                    Когда будет готов макет?
                                                </div>
                                            </div>
                                            <div class="chat-item__count">
                                                <span class="text16 text14-mob font2">
                                                    3
                                                </span>
                                            </div>
                                        </div>

                                        <div class="chat-item">
                                            <div class="chat-item__img">
                                                <div class="avatar">
                                                    <img src="img/avatar3.webp" alt=""/>
                                                </div>
                                            </div>
                                            <div class="chat-item__info">
                                                <div class="text16 text14-mob font2">
                                                    Evan Jonathan
                                                </div>
                                                <div class="text16 text12-mob">
                                                    Давай сегодня встретимся и проведём мастермайнд...
                                                </div>
                                            </div>
                                            <div class="chat-item__count">
                                                <span class="text16 text14-mob font2">
                                                    5
                                                </span>
                                            </div>
                                        </div>

                                        <div class="chat-item">
                                            <div class="chat-item__img">
                                                <div class="avatar">
                                                    <img src="img/avatar4.webp" alt=""/>
                                                </div>
                                            </div>
                                            <div class="chat-item__info">
                                                <div class="text16 text14-mob font2">
                                                    Helen Kawalsky
                                                </div>
                                                <div class="text16 text12-mob">
                                                    Результаты супер! Спасибо большое, словил инсайты...
                                                </div>
                                            </div>
                                            <div class="chat-item__count">
                                                <span class="text16 text14-mob font2">
                                                    12
                                                </span>
                                            </div>
                                        </div>

                                        <div class="chat-item">
                                            <div class="chat-item__img">
                                                <div class="avatar">
                                                    <img src="img/avatar5.webp" alt=""/>
                                                </div>
                                            </div>
                                            <div class="chat-item__info">
                                                <div class="text16 text14-mob font2">
                                                    Jully Walbert
                                                </div>
                                                <div class="text16 text12-mob">
                                                    Да, отлично. Договорились. 🤝
                                                </div>
                                            </div>
                                            <div class="chat-item__count">
                                                <span class="text16 text14-mob font2">
                                                    7
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="chat-area">
                                <div class="chat-area__top">
                                    <div class="chat-user">
                                        <div class="chat-user__img">
                                            <div class="avatar">
                                                <img src="img/avatar2.webp" alt=""/>
                                            </div>
                                        </div>
                                        <div class="chat-user__info">
                                            <div class="text32 text14-mob font2">
                                                Iren Lasky
                                            </div>
                                            <div class="text16 text10-mob">
                                                Заходил последний раз вчера в 19:47
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chat-nav">
                                        <button class="chat-nav__btn">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M26.25 17.5L34.1167 9.63333C34.2915 9.45874 34.5141 9.33986 34.7564 9.29172C34.9988 9.24358 35.2499 9.26834 35.4782 9.36285C35.7065 9.45737 35.9016 9.61742 36.039 9.82278C36.1764 10.0281 36.2498 10.2696 36.25 10.5167V29.4833C36.2498 29.7304 36.1764 29.9719 36.039 30.1772C35.9016 30.3826 35.7065 30.5426 35.4782 30.6371C35.2499 30.7317 34.9988 30.7564 34.7564 30.7083C34.5141 30.6601 34.2915 30.5413 34.1167 30.3667L26.25 22.5M7.5 31.25H22.5C23.4946 31.25 24.4484 30.8549 25.1516 30.1516C25.8549 29.4484 26.25 28.4946 26.25 27.5V12.5C26.25 11.5054 25.8549 10.5516 25.1516 9.84835C24.4484 9.14509 23.4946 8.75 22.5 8.75H7.5C6.50544 8.75 5.55161 9.14509 4.84835 9.84835C4.14509 10.5516 3.75 11.5054 3.75 12.5V27.5C3.75 28.4946 4.14509 29.4484 4.84835 30.1516C5.55161 30.8549 6.50544 31.25 7.5 31.25Z" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" />
                                            </svg>
                                        </button>
                                        <button class="chat-nav__btn">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.75 11.25C3.75 25.0567 14.9433 36.25 28.75 36.25H32.5C33.4946 36.25 34.4484 35.8549 35.1516 35.1516C35.8549 34.4484 36.25 33.4946 36.25 32.5V30.2133C36.25 29.3533 35.665 28.6033 34.83 28.395L27.4583 26.5517C26.725 26.3683 25.955 26.6433 25.5033 27.2467L23.8867 29.4017C23.4167 30.0283 22.605 30.305 21.87 30.035C19.1415 29.0319 16.6636 27.4476 14.608 25.392C12.5524 23.3364 10.9681 20.8585 9.965 18.13C9.695 17.395 9.97167 16.5833 10.5983 16.1133L12.7533 14.4967C13.3583 14.045 13.6317 13.2733 13.4483 12.5417L11.605 5.17C11.5036 4.76449 11.2695 4.40451 10.9401 4.14723C10.6106 3.88995 10.2047 3.75014 9.78667 3.75H7.5C6.50544 3.75 5.55161 4.14509 4.84835 4.84835C4.14509 5.55161 3.75 6.50544 3.75 7.5V11.25Z" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                        <button class="chat-nav__btn">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.25 20C11.25 20.3315 11.1183 20.6495 10.8839 20.8839C10.6495 21.1183 10.3315 21.25 10 21.25C9.66848 21.25 9.35054 21.1183 9.11612 20.8839C8.8817 20.6495 8.75 20.3315 8.75 20C8.75 19.6685 8.8817 19.3505 9.11612 19.1161C9.35054 18.8817 9.66848 18.75 10 18.75C10.3315 18.75 10.6495 18.8817 10.8839 19.1161C11.1183 19.3505 11.25 19.6685 11.25 20ZM21.25 20C21.25 20.3315 21.1183 20.6495 20.8839 20.8839C20.6495 21.1183 20.3315 21.25 20 21.25C19.6685 21.25 19.3505 21.1183 19.1161 20.8839C18.8817 20.6495 18.75 20.3315 18.75 20C18.75 19.6685 18.8817 19.3505 19.1161 19.1161C19.3505 18.8817 19.6685 18.75 20 18.75C20.3315 18.75 20.6495 18.8817 20.8839 19.1161C21.1183 19.3505 21.25 19.6685 21.25 20ZM31.25 20C31.25 20.3315 31.1183 20.6495 30.8839 20.8839C30.6495 21.1183 30.3315 21.25 30 21.25C29.6685 21.25 29.3505 21.1183 29.1161 20.8839C28.8817 20.6495 28.75 20.3315 28.75 20C28.75 19.6685 28.8817 19.3505 29.1161 19.1161C29.3505 18.8817 29.6685 18.75 30 18.75C30.3315 18.75 30.6495 18.8817 30.8839 19.1161C31.1183 19.3505 31.25 19.6685 31.25 20Z" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="chat-area__content">
                                    <div class="messages">
                                        <div class="message">
                                            <div class="avatar">
                                                <img src="img/avatar2.webp" alt=""/>
                                            </div>
                                            <div class="message__text">
                                                <div class="text16 text14-mob">
                                                    Вы готовы к сдаче проекта?
                                                </div>
                                            </div>
                                        </div>
                                        <div class="message _type2">
                                            <div class="message__text">
                                                <div class="text16 text14-mob">
                                                    Да, осталось немного правок внести и всё готово
                                                </div>
                                            </div>
                                        </div>
                                        <div class="message">
                                            <div class="avatar">
                                                <img src="img/avatar2.webp" alt=""/>
                                            </div>
                                            <div class="message__text">
                                                <div class="text16 text14-mob">
                                                    Когда будет готов макет?
                                                </div>
                                            </div>
                                        </div>
                                        <div class="message _type2">
                                            <div class="message__text">
                                                <div class="text16 text14-mob">
                                                    Ориентировочно в 17:00 по МСК времени
                                                </div>
                                            </div>
                                        </div>
                                        <div class="message">
                                            <div class="avatar">
                                                <img src="img/avatar2.webp" alt=""/>
                                            </div>
                                            <div class="message__text">
                                                <div class="text16 text14-mob">
                                                    Отлично, буду ждать1
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-area__bottom">
                                    <fieldset class="chat-field">
                                        <input type="text" placeholder="Написать сообщение"/>
                                            <div class="chat-field__buttons _nav1">
                                                <button class="chat-field__btn">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.375 12.7388L10.682 20.4318C9.83811 21.2757 8.69351 21.7498 7.50003 21.7498C6.30655 21.7498 5.16195 21.2757 4.31803 20.4318C3.47411 19.5878 3 18.4432 3 17.2498C3 16.0563 3.47411 14.9117 4.31803 14.0678L15.258 3.12777C15.5367 2.84923 15.8675 2.62831 16.2315 2.47762C16.5956 2.32693 16.9857 2.24942 17.3797 2.24951C17.7737 2.2496 18.1639 2.3273 18.5278 2.47816C18.8918 2.62903 19.2225 2.8501 19.501 3.12877C19.7796 3.40743 20.0005 3.73823 20.1512 4.10227C20.3019 4.46631 20.3794 4.85647 20.3793 5.25047C20.3792 5.64447 20.3015 6.03459 20.1506 6.39857C19.9998 6.76254 19.7787 7.09323 19.5 7.37177L8.55203 18.3198C8.26801 18.592 7.88839 18.7408 7.49497 18.7358C7.10156 18.7309 6.72585 18.5715 6.44883 18.2921C6.1718 18.0127 6.01564 17.6357 6.01399 17.2422C6.01234 16.8488 6.16535 16.4705 6.44003 16.1888L14.25 8.37877M8.56103 18.3098L8.55103 18.3198" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="chat-field__buttons _nav2">
                                                <button class="chat-field__btn">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 18.75C13.5913 18.75 15.1174 18.1179 16.2426 16.9926C17.3679 15.8674 18 14.3413 18 12.75V11.25M12 18.75C10.4087 18.75 8.88258 18.1179 7.75736 16.9926C6.63214 15.8674 6 14.3413 6 12.75V11.25M12 18.75V22.5M8.25 22.5H15.75M12 15.75C11.2044 15.75 10.4413 15.4339 9.87868 14.8713C9.31607 14.3087 9 13.5456 9 12.75V4.5C9 3.70435 9.31607 2.94129 9.87868 2.37868C10.4413 1.81607 11.2044 1.5 12 1.5C12.7956 1.5 13.5587 1.81607 14.1213 2.37868C14.6839 2.94129 15 3.70435 15 4.5V12.75C15 13.5456 14.6839 14.3087 14.1213 14.8713C13.5587 15.4339 12.7956 15.75 12 15.75Z" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                                <button class="chat-field__btn">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.00053 12L3.26953 3.12598C9.80234 5.02565 15.9629 8.02677 21.4855 12C15.9633 15.9738 9.80311 18.9755 3.27053 20.876L6.00053 12ZM6.00053 12H13.5005" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Chat;