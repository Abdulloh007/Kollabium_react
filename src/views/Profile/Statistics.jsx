function Statistics() {
    return (
        <>
            <main class="content">

                <section class="stat-page">
                    <div class="container">
                        <div class="stat-page__inner">
                            <div class="summary">
                                <div class="summary__top">
                                    <div class="text32 text16-mob font2">
                                        Сводка
                                    </div>
                                    <div class="stat-chart__selects">
                                        <div class="m-select _black">
                                            <select>
                                                <option>Неделя</option>
                                                <option>Месяц</option>
                                                <option>Год</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="wallet-stat">
                                    <div class="wallet-stat__group">
                                        <div class="wallet-stat__title text16">
                                            Выполнено проектов
                                        </div>
                                        <div class="wallet-stat__bottom">
                                            <div class="wallet-stat__price">
                                                <span class="text24 bold-text">12</span>
                                            </div>
                                            <div class="wallet-stat__progress">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 10L8 5L13 10" stroke="#009F85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <span class="text16">+2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="wallet-stat__group">
                                        <div class="wallet-stat__title text16">
                                            Заработано
                                        </div>
                                        <div class="wallet-stat__bottom">
                                            <div class="wallet-stat__price">
                                                <span class="text24 bold-text">5340</span>
                                            </div>
                                            <div class="wallet-stat__progress">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 10L8 5L13 10" stroke="#009F85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <span class="text16">+$232</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="wallet-stat__group">
                                        <div class="wallet-stat__title text16">
                                            Оценка клиентов
                                        </div>
                                        <div class="wallet-stat__bottom">
                                            <div class="wallet-stat__price">
                                                <span class="text24 bold-text">9.3</span>
                                            </div>
                                            <div class="wallet-stat__rating">
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.04827 0.951056C9.34629 0.0269732 10.6537 0.0269711 10.9517 0.951055L12.4563 5.61623C12.5897 6.03008 12.9753 6.31024 13.4102 6.30929L18.312 6.29857C19.2829 6.29645 19.6869 7.53988 18.9002 8.10887L14.9282 10.9814C14.5759 11.2362 14.4286 11.6895 14.5639 12.1028L16.0888 16.7613C16.3909 17.6841 15.3331 18.4526 14.5489 17.8802L10.5896 14.9903C10.2383 14.7339 9.76168 14.7339 9.41045 14.9903L5.45113 17.8802C4.66686 18.4526 3.60914 17.6841 3.9112 16.7613L5.43612 12.1028C5.57139 11.6895 5.4241 11.2362 5.07175 10.9814L1.09984 8.10887C0.313081 7.53988 0.717093 6.29645 1.68804 6.29857L6.58981 6.30929C7.02465 6.31024 7.41026 6.03008 7.54373 5.61623L9.04827 0.951056Z" fill="#795AA0" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="stat-chart">
                                <div class="stat-chart__top">
                                    <div class="text32 font2">
                                        График
                                    </div>
                                    <div class="stat-chart__selects">
                                        <div class="m-select _black">
                                            <select>
                                                <option>Выполненных проектов</option>
                                                <option>Выполненных проектов 2</option>
                                            </select>
                                        </div>
                                        <div class="m-select _black">
                                            <select>
                                                <option>Месяц</option>
                                                <option>Год</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="stat-chart__media">
                                    {/* <img src="img/chart2.svg" alt=""/> */}
                                        <div class="line-chart" id="chart"></div>
                                </div>
                            </div>

                            <div class="summary">
                                <div class="summary__top">
                                    <div class="text32 text16-mob font2">
                                        Итог
                                    </div>
                                </div>
                                <div class="wallet-stat">
                                    <div class="wallet-stat__group">
                                        <div class="wallet-stat__title text16">
                                            Выполнено проектов
                                        </div>
                                        <div class="wallet-stat__bottom">
                                            <div class="wallet-stat__price">
                                                <span class="text24 bold-text">96</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="wallet-stat__group">
                                        <div class="wallet-stat__title text16">
                                            Заработано
                                        </div>
                                        <div class="wallet-stat__bottom">
                                            <div class="wallet-stat__price">
                                                <span class="text24 bold-text">823,340</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="wallet-stat__group">
                                        <div class="wallet-stat__title text16">
                                            Оценка клиентов
                                        </div>
                                        <div class="wallet-stat__bottom">
                                            <div class="wallet-stat__price">
                                                <span class="text24 bold-text">9.8</span>
                                            </div>
                                            <div class="wallet-stat__rating">
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.04827 0.951056C9.34629 0.0269732 10.6537 0.0269711 10.9517 0.951055L12.4563 5.61623C12.5897 6.03008 12.9753 6.31024 13.4102 6.30929L18.312 6.29857C19.2829 6.29645 19.6869 7.53988 18.9002 8.10887L14.9282 10.9814C14.5759 11.2362 14.4286 11.6895 14.5639 12.1028L16.0888 16.7613C16.3909 17.6841 15.3331 18.4526 14.5489 17.8802L10.5896 14.9903C10.2383 14.7339 9.76168 14.7339 9.41045 14.9903L5.45113 17.8802C4.66686 18.4526 3.60914 17.6841 3.9112 16.7613L5.43612 12.1028C5.57139 11.6895 5.4241 11.2362 5.07175 10.9814L1.09984 8.10887C0.313081 7.53988 0.717093 6.29645 1.68804 6.29857L6.58981 6.30929C7.02465 6.31024 7.41026 6.03008 7.54373 5.61623L9.04827 0.951056Z" fill="#795AA0" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="reviews">
                                <div class="reviews__top">
                                    <div class="text32 text16-mob font2">
                                        Отзывы
                                    </div>
                                </div>
                                <div class="reviews__items">
                                    <div class="review-card">
                                        <div class="text24 text14-mob font2">
                                            Alexey Kruchkov
                                        </div>
                                        <div class="text16 text10-mob">
                                            Исполнитель крутой! Выполнил всё в срок и ещё помог с упаковкой
                                        </div>
                                        <div class="stock-card__rating">
                                            <div class="rating-input rating-input2" data-total-rating="5" data-rating-code="1">
                                                <div class="rating-input__item" data-rating-value="5">
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11432 1.08156C9.26399 0.620903 9.9157 0.620905 10.0654 1.08156L11.584 5.75532C11.7848 6.37336 12.3607 6.7918 13.0106 6.7918H17.9248C18.4092 6.7918 18.6106 7.4116 18.2187 7.6963L14.243 10.5848C13.7173 10.9668 13.4973 11.6439 13.6981 12.2619L15.2167 16.9357C15.3664 17.3963 14.8391 17.7794 14.4473 17.4947L10.4715 14.6061C9.94579 14.2242 9.2339 14.2242 8.70817 14.6061L4.73243 17.4947C4.34057 17.7794 3.81333 17.3963 3.96301 16.9357L5.4816 12.2619C5.68241 11.6439 5.46243 10.9668 4.9367 10.5848L0.960958 7.6963C0.569101 7.4116 0.770488 6.7918 1.25485 6.7918H6.16913C6.81897 6.7918 7.39491 6.37336 7.59572 5.75532L9.11432 1.08156Z" stroke="#795AA0" />
                                                    </svg>
                                                </div>
                                                <div class="rating-input__item" data-rating-value="4">
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11432 1.08156C9.26399 0.620903 9.9157 0.620905 10.0654 1.08156L11.584 5.75532C11.7848 6.37336 12.3607 6.7918 13.0106 6.7918H17.9248C18.4092 6.7918 18.6106 7.4116 18.2187 7.6963L14.243 10.5848C13.7173 10.9668 13.4973 11.6439 13.6981 12.2619L15.2167 16.9357C15.3664 17.3963 14.8391 17.7794 14.4473 17.4947L10.4715 14.6061C9.94579 14.2242 9.2339 14.2242 8.70817 14.6061L4.73243 17.4947C4.34057 17.7794 3.81333 17.3963 3.96301 16.9357L5.4816 12.2619C5.68241 11.6439 5.46243 10.9668 4.9367 10.5848L0.960958 7.6963C0.569101 7.4116 0.770488 6.7918 1.25485 6.7918H6.16913C6.81897 6.7918 7.39491 6.37336 7.59572 5.75532L9.11432 1.08156Z" stroke="#795AA0" />
                                                    </svg>
                                                </div>
                                                <div class="rating-input__item" data-rating-value="3">
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11432 1.08156C9.26399 0.620903 9.9157 0.620905 10.0654 1.08156L11.584 5.75532C11.7848 6.37336 12.3607 6.7918 13.0106 6.7918H17.9248C18.4092 6.7918 18.6106 7.4116 18.2187 7.6963L14.243 10.5848C13.7173 10.9668 13.4973 11.6439 13.6981 12.2619L15.2167 16.9357C15.3664 17.3963 14.8391 17.7794 14.4473 17.4947L10.4715 14.6061C9.94579 14.2242 9.2339 14.2242 8.70817 14.6061L4.73243 17.4947C4.34057 17.7794 3.81333 17.3963 3.96301 16.9357L5.4816 12.2619C5.68241 11.6439 5.46243 10.9668 4.9367 10.5848L0.960958 7.6963C0.569101 7.4116 0.770488 6.7918 1.25485 6.7918H6.16913C6.81897 6.7918 7.39491 6.37336 7.59572 5.75532L9.11432 1.08156Z" stroke="#795AA0" />
                                                    </svg>
                                                </div>
                                                <div class="rating-input__item" data-rating-value="2">
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11432 1.08156C9.26399 0.620903 9.9157 0.620905 10.0654 1.08156L11.584 5.75532C11.7848 6.37336 12.3607 6.7918 13.0106 6.7918H17.9248C18.4092 6.7918 18.6106 7.4116 18.2187 7.6963L14.243 10.5848C13.7173 10.9668 13.4973 11.6439 13.6981 12.2619L15.2167 16.9357C15.3664 17.3963 14.8391 17.7794 14.4473 17.4947L10.4715 14.6061C9.94579 14.2242 9.2339 14.2242 8.70817 14.6061L4.73243 17.4947C4.34057 17.7794 3.81333 17.3963 3.96301 16.9357L5.4816 12.2619C5.68241 11.6439 5.46243 10.9668 4.9367 10.5848L0.960958 7.6963C0.569101 7.4116 0.770488 6.7918 1.25485 6.7918H6.16913C6.81897 6.7918 7.39491 6.37336 7.59572 5.75532L9.11432 1.08156Z" stroke="#795AA0" />
                                                    </svg>
                                                </div>
                                                <div class="rating-input__item" data-rating-value="1">
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11432 1.08156C9.26399 0.620903 9.9157 0.620905 10.0654 1.08156L11.584 5.75532C11.7848 6.37336 12.3607 6.7918 13.0106 6.7918H17.9248C18.4092 6.7918 18.6106 7.4116 18.2187 7.6963L14.243 10.5848C13.7173 10.9668 13.4973 11.6439 13.6981 12.2619L15.2167 16.9357C15.3664 17.3963 14.8391 17.7794 14.4473 17.4947L10.4715 14.6061C9.94579 14.2242 9.2339 14.2242 8.70817 14.6061L4.73243 17.4947C4.34057 17.7794 3.81333 17.3963 3.96301 16.9357L5.4816 12.2619C5.68241 11.6439 5.46243 10.9668 4.9367 10.5848L0.960958 7.6963C0.569101 7.4116 0.770488 6.7918 1.25485 6.7918H6.16913C6.81897 6.7918 7.39491 6.37336 7.59572 5.75532L9.11432 1.08156Z" stroke="#795AA0" />
                                                    </svg>
                                                </div>
                                                <input class="rating-input__field" type="number" value="0"/>
                                            </div>

                                            <div class="text16 text10-mob">
                                                5 (23)
                                            </div>
                                        </div>
                                    </div>
                                    <div class="review-card">
                                        <div class="text24 text14-mob font2">
                                            Ivan Polotov
                                        </div>
                                        <div class="text16 text10-mob">
                                            Дизайнер от бога. Сделал быстро и качественно. Рекомендую!
                                        </div>
                                        <div class="stock-card__rating">
                                            <div class="rating-input rating-input2" data-total-rating="4" data-rating-code="1">
                                                <div class="rating-input__item" data-rating-value="5">
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11432 1.08156C9.26399 0.620903 9.9157 0.620905 10.0654 1.08156L11.584 5.75532C11.7848 6.37336 12.3607 6.7918 13.0106 6.7918H17.9248C18.4092 6.7918 18.6106 7.4116 18.2187 7.6963L14.243 10.5848C13.7173 10.9668 13.4973 11.6439 13.6981 12.2619L15.2167 16.9357C15.3664 17.3963 14.8391 17.7794 14.4473 17.4947L10.4715 14.6061C9.94579 14.2242 9.2339 14.2242 8.70817 14.6061L4.73243 17.4947C4.34057 17.7794 3.81333 17.3963 3.96301 16.9357L5.4816 12.2619C5.68241 11.6439 5.46243 10.9668 4.9367 10.5848L0.960958 7.6963C0.569101 7.4116 0.770488 6.7918 1.25485 6.7918H6.16913C6.81897 6.7918 7.39491 6.37336 7.59572 5.75532L9.11432 1.08156Z" stroke="#795AA0" />
                                                    </svg>
                                                </div>
                                                <div class="rating-input__item" data-rating-value="4">
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11432 1.08156C9.26399 0.620903 9.9157 0.620905 10.0654 1.08156L11.584 5.75532C11.7848 6.37336 12.3607 6.7918 13.0106 6.7918H17.9248C18.4092 6.7918 18.6106 7.4116 18.2187 7.6963L14.243 10.5848C13.7173 10.9668 13.4973 11.6439 13.6981 12.2619L15.2167 16.9357C15.3664 17.3963 14.8391 17.7794 14.4473 17.4947L10.4715 14.6061C9.94579 14.2242 9.2339 14.2242 8.70817 14.6061L4.73243 17.4947C4.34057 17.7794 3.81333 17.3963 3.96301 16.9357L5.4816 12.2619C5.68241 11.6439 5.46243 10.9668 4.9367 10.5848L0.960958 7.6963C0.569101 7.4116 0.770488 6.7918 1.25485 6.7918H6.16913C6.81897 6.7918 7.39491 6.37336 7.59572 5.75532L9.11432 1.08156Z" stroke="#795AA0" />
                                                    </svg>
                                                </div>
                                                <div class="rating-input__item" data-rating-value="3">
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11432 1.08156C9.26399 0.620903 9.9157 0.620905 10.0654 1.08156L11.584 5.75532C11.7848 6.37336 12.3607 6.7918 13.0106 6.7918H17.9248C18.4092 6.7918 18.6106 7.4116 18.2187 7.6963L14.243 10.5848C13.7173 10.9668 13.4973 11.6439 13.6981 12.2619L15.2167 16.9357C15.3664 17.3963 14.8391 17.7794 14.4473 17.4947L10.4715 14.6061C9.94579 14.2242 9.2339 14.2242 8.70817 14.6061L4.73243 17.4947C4.34057 17.7794 3.81333 17.3963 3.96301 16.9357L5.4816 12.2619C5.68241 11.6439 5.46243 10.9668 4.9367 10.5848L0.960958 7.6963C0.569101 7.4116 0.770488 6.7918 1.25485 6.7918H6.16913C6.81897 6.7918 7.39491 6.37336 7.59572 5.75532L9.11432 1.08156Z" stroke="#795AA0" />
                                                    </svg>
                                                </div>
                                                <div class="rating-input__item" data-rating-value="2">
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11432 1.08156C9.26399 0.620903 9.9157 0.620905 10.0654 1.08156L11.584 5.75532C11.7848 6.37336 12.3607 6.7918 13.0106 6.7918H17.9248C18.4092 6.7918 18.6106 7.4116 18.2187 7.6963L14.243 10.5848C13.7173 10.9668 13.4973 11.6439 13.6981 12.2619L15.2167 16.9357C15.3664 17.3963 14.8391 17.7794 14.4473 17.4947L10.4715 14.6061C9.94579 14.2242 9.2339 14.2242 8.70817 14.6061L4.73243 17.4947C4.34057 17.7794 3.81333 17.3963 3.96301 16.9357L5.4816 12.2619C5.68241 11.6439 5.46243 10.9668 4.9367 10.5848L0.960958 7.6963C0.569101 7.4116 0.770488 6.7918 1.25485 6.7918H6.16913C6.81897 6.7918 7.39491 6.37336 7.59572 5.75532L9.11432 1.08156Z" stroke="#795AA0" />
                                                    </svg>
                                                </div>
                                                <div class="rating-input__item" data-rating-value="1">
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11432 1.08156C9.26399 0.620903 9.9157 0.620905 10.0654 1.08156L11.584 5.75532C11.7848 6.37336 12.3607 6.7918 13.0106 6.7918H17.9248C18.4092 6.7918 18.6106 7.4116 18.2187 7.6963L14.243 10.5848C13.7173 10.9668 13.4973 11.6439 13.6981 12.2619L15.2167 16.9357C15.3664 17.3963 14.8391 17.7794 14.4473 17.4947L10.4715 14.6061C9.94579 14.2242 9.2339 14.2242 8.70817 14.6061L4.73243 17.4947C4.34057 17.7794 3.81333 17.3963 3.96301 16.9357L5.4816 12.2619C5.68241 11.6439 5.46243 10.9668 4.9367 10.5848L0.960958 7.6963C0.569101 7.4116 0.770488 6.7918 1.25485 6.7918H6.16913C6.81897 6.7918 7.39491 6.37336 7.59572 5.75532L9.11432 1.08156Z" stroke="#795AA0" />
                                                    </svg>
                                                </div>
                                                <input class="rating-input__field" type="number" value="0"/>
                                            </div>

                                            <div class="text16 text10-mob">
                                                4 (22)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


            </main>
        </>
    )
}

export default Statistics;