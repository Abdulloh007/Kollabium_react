function PaymentType() {
    return (
        <>
            <main class="content">

                <div class="team">
                    <div class="container">
                        <div class="team__inner">
                            <div class="team__top">
                                <h1 class="text40 font2">
                                    Варианты оплаты
                                </h1>
                            </div>
                            <div class="pay__items _grid-column3">
                                <div class="pay-item">
                                    <div class="pay-item__img">
                                        <img src="img/logo3.svg" alt=""/>
                                    </div>
                                    <div class="text24 font2">
                                        Токен платформы
                                    </div>
                                </div>
                                <div class="pay-item">
                                    <div class="pay-item__img">
                                        <img src="img/logo3.svg" alt=""/>
                                    </div>
                                    <div class="text24 font2">
                                        Банк карта <br/>
                                            <span>(данный способ в разработке)</span>
                                    </div>
                                </div>
                                <div class="pay-item">
                                    <div class="pay-item__img">
                                        <img src="img/logo3.svg" alt=""/>
                                    </div>
                                    <div class="text24 font2">
                                        Электронный кошелек <br/>
                                            <span>(данный способ в разработке)</span>
                                    </div>
                                </div>
                            </div>

                            <form class="gift">
                                <div class="text32 font2">
                                    Подарить подписку
                                </div>
                                <div class="gift__grid _grid-column3">
                                    <div class="fg">
                                        <input type="text" placeholder="E-mail или логин пользователя"/>
                                    </div>
                                </div>
                                <div class="gift__nav">
                                    <button class="gift__btn m-btn m-btn-purple _linear">
                                        <span>Продолжить</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default PaymentType;