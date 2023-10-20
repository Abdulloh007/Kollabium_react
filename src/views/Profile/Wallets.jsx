import { useEffect, useState } from "react";
import { getMyBalance, getMyTrs } from "../../apis/users";
import { withdrawWallet } from "../../apis/wallet";

function Wallets() {

    const [wallet, setWallet] = useState({})
    const [walletTrs, setWalletTrs] = useState([])
    const [validator, setValidator] = useState({})
    const [address, setAddress] = useState('')
    const [amount, setAmount] = useState('')
    const [isOpen, setOpenSate] = useState(false)
    const [modalTarget, setModalTarget] = useState('')

    useEffect(() => {
        getMyBalance(atob(localStorage.getItem(btoa('wallet')))).then(res => setWallet(res.data.result))
        getMyTrs().then(res => setWalletTrs(res.data.data)).catch(err => alert(err))
    }, [])

    function withdarw() {
        withdrawWallet(address, amount)
            .then(res => {
                alert(res.data.message)
                getMyBalance(atob(localStorage.getItem(btoa('wallet')))).then(res => setWallet(res.data.result))
                getMyTrs().then(res => setWalletTrs(res.data.data)).catch(err => alert(err))
                closeModal()
            })
            .catch(error => setValidator(error.response.data.errors))

    }

    function openModal(target) {
        setModalTarget(target)
        setOpenSate(true)
    }

    function closeModal() {
        setOpenSate(false)
    }
    return (
        <>
            <main class="content">

                <section class="wallet-page">
                    <div class="container">
                        <div class="wallet-page__inner">
                            <div class="wallet-page__top">
                                <div class="wallet-balance">
                                    <div class="wallet-balance__top">
                                        <div class="text32 font2">
                                            Баланс
                                        </div>
                                        <div class="wallet-balance__badges">
                                            <div onClick={() => openModal('pull')} class="badge">
                                                <span class="text16">Ввод</span>
                                            </div>
                                            <div onClick={() => openModal('withdraw')} class="badge">
                                                <span class="text16">Вывод</span>
                                            </div>
                                        </div>
                                    </div>
                                    {wallet.kollabium
                                        ? (
                                            <div class="wallet">
                                                <div class="wallet__top">
                                                    <img src={wallet?.kollabium?.avatar} alt="" />
                                                    <span>Kollabium</span>
                                                </div>
                                                <div class="wallet__sum">
                                                    <span>{wallet?.kollabium?.amount ? (wallet?.kollabium?.amount / Math.pow(10, 18)).toFixed(3) : 0.00} KollabiuM</span>
                                                </div>
                                                <div class="effect-1"></div>
                                                <div class="effect-2"></div>
                                                <div class="wallet__desc">
                                                    ВАШ КОШЕЛЕК
                                                </div>
                                            </div>
                                        )
                                        : (
                                            <div class="wallet">
                                                <div class="wallet__top">
                                                    <img src={wallet?.del?.avatar} alt="" />
                                                    <span>Del</span>
                                                </div>
                                                <div class="wallet__sum">
                                                    <span>{wallet?.del?.amount ? (wallet?.del?.amount / Math.pow(10, 18)).toFixed(3) : 0.00} Del</span>
                                                </div>
                                                <div class="effect-1"></div>
                                                <div class="effect-2"></div>
                                                <div class="wallet__desc">
                                                    ВАШ КОШЕЛЕК
                                                </div>
                                            </div>
                                        )}
                                </div>
                                <div class="wallet-action">
                                    <button class="wallet-action__btn _type1">
                                        <span>Делегировать</span>
                                        <svg class="_view1" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.916 9.25L21.666 13M21.666 13L17.916 16.75M21.666 13H3.66602" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <svg class="_view2" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.25 17.75L12.5 21.5M12.5 21.5L8.75 17.75M12.5 21.5L12.5 3.5" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                    <button class="wallet-action__btn _type2">
                                        <svg class="_view1" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.41602 16.75L3.66602 13M3.66602 13L7.41602 9.25M3.66602 13L21.666 13" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <svg class="_view2" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.25 17.75L12.5 21.5M12.5 21.5L8.75 17.75M12.5 21.5L12.5 3.5" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span>Разделегировать</span>
                                    </button>
                                </div>
                                <div class="delegate">
                                    <div class="delegate__top">
                                        <div class="text32 font2">
                                            Делегировано
                                        </div>
                                        <div class="delegate__hint">
                                            <span>?</span>
                                        </div>
                                    </div>
                                    <div class="wallet">
                                        <div class="wallet__top">
                                            <img src="img/bitcoin.svg" alt="" />
                                            <span>Token Name</span>
                                        </div>
                                        <div class="wallet__sum">
                                            <span>12,500 USD</span>
                                        </div>
                                        <div class="effect-1"></div>
                                        <div class="effect-2"></div>
                                        <div class="wallet__desc">
                                            ВАШ КОШЕЛЕК
                                        </div>
                                    </div>
                                </div>
                                <div class="benefit">
                                    <div class="wallet">
                                        <div class="wallet__top">
                                            <img src="img/bitcoin.svg" alt="" />
                                            <span>Token Name</span>
                                        </div>
                                        <div class="wallet__sum">
                                            <span>1,400 USD</span>
                                        </div>
                                        <div class="effect-1"></div>
                                        <div class="effect-2"></div>
                                        <div class="wallet__desc">
                                            УПУЩЕННАЯ ВЫГОДА
                                        </div>
                                    </div>
                                    <button class="benefit__btn m-btn m-btn-purple">
                                        <span>Как получить?</span>
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 8.25L12.5 15.75L5 8.25" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="wallet-stat">
                                <div class="wallet-stat__group">
                                    <div class="wallet-stat__title text16">
                                        Получено от делегирования
                                    </div>
                                    <div class="wallet-stat__bottom">
                                        <div class="wallet-stat__price">
                                            <span class="text16">$</span><span class="text24 bold-text">53,440</span>
                                        </div>
                                        <div class="wallet-stat__progress">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 10L8 5L13 10" stroke="#009F85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span class="text16">+2.1%</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="wallet-stat__group">
                                    <div class="wallet-stat__title text16">
                                        Получено от партнерской программы
                                    </div>
                                    <div class="wallet-stat__bottom">
                                        <div class="wallet-stat__price">
                                            <span class="text16">$</span><span class="text24 bold-text">4,543</span>
                                        </div>
                                        <div class="wallet-stat__progress _red">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 5L8 10L3 5" stroke="#FF4040" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span class="text16">-6%</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="wallet-stat__group">
                                    <div class="wallet-stat__title text16">
                                        Получено от партнерской программы в делегирование
                                    </div>
                                    <div class="wallet-stat__bottom">
                                        <div class="wallet-stat__price">
                                            <span class="text24 bold-text">4150</span>
                                        </div>
                                        <div class="wallet-stat__progress">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 10L8 5L13 10" stroke="#009F85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span class="text16">+34</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="wallet-stat__group">
                                    <div class="wallet-stat__title text16">
                                        По счету прошло
                                    </div>
                                    <div class="wallet-stat__bottom">
                                        <div class="wallet-stat__price">
                                            <span class="text16">$</span><span class="text24 bold-text">77,373</span>
                                        </div>
                                        <div class="wallet-stat__progress _red">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 5L8 10L3 5" stroke="#FF4040" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span class="text16">-6%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="wallet-page__bottom">
                                <div class="balance-history">
                                    <div class="balance-history__top">
                                        <div class="text24 font2">
                                            Баланс
                                        </div>
                                        <div class="balance-history__nav">
                                            <button class="balance-history__btn">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 18L10 11.3818L16 5" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                            <button class="balance-history__btn">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 5L16 11.6182L10 18" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="balance-history__items">
                                        {!walletTrs.length ? (<p>У вас нет транзакций!</p>) : (<></>)}
                                        {walletTrs.map(item => (
                                            <div class="transaction-card">
                                                <div class="transaction-card__content">
                                                    <div class="transaction-card__img">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.25 3H3.636C4.146 3 4.591 3.343 4.723 3.835L5.106 5.272M5.106 5.272C10.6766 5.11589 16.2419 5.73515 21.642 7.112C20.818 9.566 19.839 11.95 18.718 14.25H7.5M5.106 5.272L7.5 14.25M7.5 14.25C6.70435 14.25 5.94129 14.5661 5.37868 15.1287C4.81607 15.6913 4.5 16.4544 4.5 17.25H20.25M6 20.25C6 20.4489 5.92098 20.6397 5.78033 20.7803C5.63968 20.921 5.44891 21 5.25 21C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25C4.5 20.0511 4.57902 19.8603 4.71967 19.7197C4.86032 19.579 5.05109 19.5 5.25 19.5C5.44891 19.5 5.63968 19.579 5.78033 19.7197C5.92098 19.8603 6 20.0511 6 20.25ZM18.75 20.25C18.75 20.4489 18.671 20.6397 18.5303 20.7803C18.3897 20.921 18.1989 21 18 21C17.8011 21 17.6103 20.921 17.4697 20.7803C17.329 20.6397 17.25 20.4489 17.25 20.25C17.25 20.0511 17.329 19.8603 17.4697 19.7197C17.6103 19.579 17.8011 19.5 18 19.5C18.1989 19.5 18.3897 19.579 18.5303 19.7197C18.671 19.8603 18.75 20.0511 18.75 20.25Z" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <div class="transaction-card__info">
                                                        <div class="text16 text12-mob bold-text">
                                                            Apple Store
                                                        </div>
                                                        <div class="text16 text10-mob">
                                                            {new Date(item.created_at).toLocaleDateString()}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="transaction-card__nums">
                                                    <div class="text16 text12-mob">*6439</div>
                                                    <div class="text16 text10-mob">Credit Card</div>
                                                </div>
                                                <div class="transaction-card__price">
                                                    <span class="text16 text10-mob">-$</span><span class="text24 bold-text">{item.amount}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div class="faq">
                                    <div class="faq__items">
                                        <div class="qa-card">
                                            <div class="qa-card__show">
                                                <div class="text16">
                                                    Что такое «Делегирование»?
                                                </div>
                                                <button class="qa-card__btn">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="qa-card__hidden">
                                                <div class="qa-card__text">
                                                    <p>Что такое «Делегирование»?</p>
                                                    <p>Что такое «Делегирование»?</p>
                                                    <p>Что такое «Делегирование»?</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="qa-card">
                                            <div class="qa-card__show">
                                                <div class="text16">
                                                    Как работает ваш заработок?
                                                </div>
                                                <button class="qa-card__btn">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="qa-card__hidden">
                                                <div class="qa-card__text">
                                                    <p>Что такое «Делегирование»?</p>
                                                    <p>Что такое «Делегирование»?</p>
                                                    <p>Что такое «Делегирование»?</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="qa-card">
                                            <div class="qa-card__show">
                                                <div class="text16">
                                                    Почему «Делегирование» надежно?
                                                </div>
                                                <button class="qa-card__btn">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="qa-card__hidden">
                                                <div class="qa-card__text">
                                                    <p>Что такое «Делегирование»?</p>
                                                    <p>Что такое «Делегирование»?</p>
                                                    <p>Что такое «Делегирование»?</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="qa-card">
                                            <div class="qa-card__show">
                                                <div class="text16">
                                                    Как устроен блокчейн, как система, что позволяет делегировать?
                                                </div>
                                                <button class="qa-card__btn">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#795AA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="qa-card__hidden">
                                                <div class="qa-card__text">
                                                    <p>Что такое «Делегирование»?</p>
                                                    <p>Что такое «Делегирование»?</p>
                                                    <p>Что такое «Делегирование»?</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className={isOpen ? "dialog active" : "dialog"}>
                    {modalTarget == 'withdraw' ? (
                        <div className="dialog-content-wraap">
                            <div className="dialog-header">
                                <h4>Вывод</h4>
                                <img onClick={() => closeModal()} className="icon" src="/svg/close.svg" alt="" />
                            </div>
                            <form class="dialog-body auth-form">
                                <fieldset class="fg _required">
                                    <label>Кошелек</label>
                                    <input type="text" name="title" onInput={e => setAddress(e.target.value)} />
                                    {validator?.address ? (
                                        <p>{validator?.address[0]}</p>
                                    ) : ''}

                                </fieldset>
                                <fieldset class="fg _required">
                                    <label>Сумма</label>
                                    <input type="number" name="content" onInput={e => setAmount(e.target.value)} />
                                    {validator?.amount ? (
                                        <p>{validator?.amount[0]}</p>
                                    ) : ''}

                                </fieldset>
                                <div class="auth-form__nav">
                                    <button type="button" onClick={() => withdarw()} class="auth-form__btn m-btn m-btn-purple">
                                        <span>Продолжить</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="dialog-content-wraap">
                            <div className="dialog-header">
                                <h4>Ввод</h4>
                                <img onClick={() => closeModal()} className="icon" src="/svg/close.svg" alt="" />
                            </div>
                            <div class="dialog-body share-wallet">
                                <button className="address" onClick={() => navigator.clipboard.writeText(atob(localStorage.getItem(btoa('wallet'))))}>{atob(localStorage.getItem(btoa('wallet')))}</button>
                                <div class="auth-form__nav">
                                    <button type="button" class="auth-form__btn m-btn m-btn-purple">
                                        <span>Поделиться</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="dialog-overlay" onClick={() => closeModal()}></div>
                </div>

            </main>

        </>
    )
}

export default Wallets;