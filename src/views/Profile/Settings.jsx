function Settings() {
    return (
        <>
            <main class="content">

                <div class="profile">
                    <div class="container">
                        <div class="profile__inner">
                            <div class="profile__sidebar">
                                <div class="profile-nav">
                                    <a href="" class="profile-nav__link">
                                        <span>Профиль</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                    <a href="" class="profile-nav__link">
                                        <span>Уведомления</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                    <a href="" class="profile-nav__link">
                                        <span>Способ оплаты</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                    <a href="" class="profile-nav__link">
                                        <span>Безопасность</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                    <a href="" class="profile-nav__link">
                                        <span>Настройки</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="profile__content">
                                <div class="profile__mob-title">
                                    <span class="text24 font2">Профиль</span>
                                </div>
                                <div class="profile__top">
                                    <h1 class="text40 font2">
                                        Заполните информацию
                                    </h1>
                                    <button class="profile__save m-btn m-btn-purple">
                                        <span>Сохранить</span>
                                    </button>
                                </div>
                                <form class="profile-form">
                                    <div class="profile-form__grid">
                                        <fieldset class="fg">
                                            <label>Никнейм</label>
                                            <input type="text"/>
                                        </fieldset>
                                        <fieldset class="fg">
                                            <label>Номер телефона</label>
                                            <input type="text"/>
                                        </fieldset>
                                        <fieldset class="fg">
                                            <label>Город</label>
                                            <input type="text"/>
                                        </fieldset>
                                        <fieldset class="fg">
                                            <label>Язык</label>
                                            <input type="text"/>
                                        </fieldset>
                                        <fieldset class="fg">
                                            <label>Язык</label>
                                            <input type="text"/>
                                        </fieldset>
                                        <fieldset class="fg date-field">
                                            <label>Дата рождения</label>
                                            <input class="date-input" type="text"/>
                                                <svg class="date-field__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                        </fieldset>
                                    </div>
                                    <div class="auth-form__nav">

                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Settings;