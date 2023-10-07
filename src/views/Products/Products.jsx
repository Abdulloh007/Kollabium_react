function Products() {
    return (
        <>
            <main class="content">

                <section class="shop">
                    <div class="container">
                        <div class="shop__inner _grid-column3">
                            <div class="shop__content">
                                <div class="shop-search">
                                    <fieldset class="search-field">
                                        <input type="text" placeholder="Показано 6 товаров из 700"/>
                                            <svg class="search-field__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.0008 20.9998L15.8038 15.8028M15.8038 15.8028C17.2104 14.3962 18.0006 12.4885 18.0006 10.4993C18.0006 8.51011 17.2104 6.60238 15.8038 5.19581C14.3972 3.78923 12.4895 2.99902 10.5003 2.99902C8.51108 2.99902 6.60336 3.78923 5.19678 5.19581C3.79021 6.60238 3 8.51011 3 10.4993C3 12.4885 3.79021 14.3962 5.19678 15.8028C6.60336 17.2094 8.51108 17.9996 10.5003 17.9996C12.4895 17.9996 14.3972 17.2094 15.8038 15.8028Z" stroke="#795AA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <select class="search-field__select">
                                                <option style={{color:'#000'}} selected hidden>Сортировка</option>
                                                <option style={{color:'#000'}}>Сортировка 1</option>
                                                <option style={{color:'#000'}}>Сортировка 2</option>
                                            </select>
                                    </fieldset>
                                </div>

                                <div class="relevant-products">
                                    <div class="relevant-products__title text18">
                                        Релевантная продукция
                                    </div>
                                    <div class="relevant-products__items">
                                        <div class="relevant-products__item">
                                            <span>Натюрморт</span>
                                        </div>
                                        <div class="relevant-products__item">
                                            <span>Фотография</span>
                                        </div>
                                        <div class="relevant-products__item">
                                            <span>Эксиз</span>
                                        </div>
                                        <div class="relevant-products__item">
                                            <span>Банка</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="shop-filter">
                                    <div class="shop-filter__mob">
                                        <div class="filter__title">
                                            <div class="text24 font2">Фильтры</div>
                                            <div class="chat-item__count">
                                                <span class="text16 text10-mob font2">
                                                    4
                                                </span>
                                            </div>
                                        </div>
                                        <div class="shop-filter__buttons">
                                            <button class="shop-filter__btn _show-filter">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.875 6.5C8.21875 6.53125 8.40625 6.71875 8.4375 7.0625V8.46875C8.82812 8.59375 9.14062 8.8125 9.375 9.125C9.625 9.45312 9.75 9.82812 9.75 10.25C9.75 10.6719 9.625 11.0469 9.375 11.375C9.14062 11.6875 8.82812 11.9062 8.4375 12.0312V17.9375C8.40625 18.2812 8.21875 18.4688 7.875 18.5C7.53125 18.4688 7.34375 18.2812 7.3125 17.9375V12.0312C6.92188 11.9062 6.60938 11.6875 6.375 11.375C6.125 11.0469 6 10.6719 6 10.25C6 9.82812 6.125 9.45312 6.375 9.125C6.60938 8.8125 6.92188 8.59375 7.3125 8.46875V7.0625C7.34375 6.71875 7.53125 6.53125 7.875 6.5ZM7.875 11C8.09375 11 8.27344 10.9297 8.41406 10.7891C8.55469 10.6484 8.625 10.4688 8.625 10.25C8.625 10.0312 8.55469 9.85156 8.41406 9.71094C8.27344 9.57031 8.09375 9.5 7.875 9.5C7.65625 9.5 7.47656 9.57031 7.33594 9.71094C7.19531 9.85156 7.125 10.0312 7.125 10.25C7.125 10.4688 7.19531 10.6484 7.33594 10.7891C7.47656 10.9297 7.65625 11 7.875 11ZM11.625 15.5C11.8438 15.5 12.0234 15.4297 12.1641 15.2891C12.3047 15.1484 12.375 14.9688 12.375 14.75C12.375 14.5312 12.3047 14.3516 12.1641 14.2109C12.0234 14.0703 11.8438 14 11.625 14C11.4062 14 11.2266 14.0703 11.0859 14.2109C10.9453 14.3516 10.875 14.5312 10.875 14.75C10.875 14.9688 10.9453 15.1484 11.0859 15.2891C11.2266 15.4297 11.4062 15.5 11.625 15.5ZM13.5 14.75C13.5 15.1719 13.375 15.5469 13.125 15.875C12.8906 16.1875 12.5781 16.4062 12.1875 16.5312V17.9375C12.1562 18.2812 11.9688 18.4688 11.625 18.5C11.2812 18.4688 11.0938 18.2812 11.0625 17.9375V16.5312C10.6719 16.4062 10.3594 16.1875 10.125 15.875C9.875 15.5469 9.75 15.1719 9.75 14.75C9.75 14.3281 9.875 13.9531 10.125 13.625C10.3594 13.3125 10.6719 13.0938 11.0625 12.9688V7.0625C11.0938 6.71875 11.2812 6.53125 11.625 6.5C11.9688 6.53125 12.1562 6.71875 12.1875 7.0625V12.9688C12.5781 13.0938 12.8906 13.3125 13.125 13.625C13.375 13.9531 13.5 14.3281 13.5 14.75ZM16.125 11C16.125 10.7812 16.0547 10.6016 15.9141 10.4609C15.7734 10.3203 15.5938 10.25 15.375 10.25C15.1562 10.25 14.9766 10.3203 14.8359 10.4609C14.6953 10.6016 14.625 10.7812 14.625 11C14.625 11.2188 14.6953 11.3984 14.8359 11.5391C14.9766 11.6797 15.1562 11.75 15.375 11.75C15.5938 11.75 15.7734 11.6797 15.9141 11.5391C16.0547 11.3984 16.125 11.2188 16.125 11ZM15.9375 12.7812V17.9375C15.9062 18.2812 15.7188 18.4688 15.375 18.5C15.0312 18.4688 14.8438 18.2812 14.8125 17.9375V12.7812C14.4219 12.6562 14.1094 12.4375 13.875 12.125C13.625 11.7969 13.5 11.4219 13.5 11C13.5 10.5781 13.625 10.2031 13.875 9.875C14.1094 9.5625 14.4219 9.34375 14.8125 9.21875V7.0625C14.8438 6.71875 15.0312 6.53125 15.375 6.5C15.7188 6.53125 15.9062 6.71875 15.9375 7.0625V9.21875C16.3281 9.34375 16.6406 9.5625 16.875 9.875C17.125 10.2031 17.25 10.5781 17.25 11C17.25 11.4219 17.125 11.7969 16.875 12.125C16.6406 12.4375 16.3281 12.6562 15.9375 12.7812Z" fill="#795AA0" />
                                                </svg>
                                            </button>
                                            <button class="shop-filter__btn">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.1016 10.6016C10.3672 10.3828 10.625 10.3828 10.875 10.6016L11.9766 11.7031L13.1016 10.6016C13.3672 10.3828 13.625 10.3828 13.875 10.6016C14.1094 10.8672 14.1094 11.125 13.875 11.375L12.7969 12.4766L13.875 13.6016C14.1094 13.8672 14.1094 14.125 13.875 14.375C13.625 14.6094 13.3672 14.6094 13.1016 14.375L11.9766 13.2969L10.875 14.375C10.625 14.6094 10.3672 14.6094 10.1016 14.375C9.88281 14.125 9.88281 13.8672 10.1016 13.6016L11.2031 12.4766L10.1016 11.375C9.88281 11.125 9.88281 10.8672 10.1016 10.6016ZM18 12.5C17.9844 13.625 17.7109 14.6328 17.1797 15.5234C16.6484 16.4297 15.9297 17.1484 15.0234 17.6797C14.1328 18.2109 13.125 18.4844 12 18.5C10.875 18.4844 9.86719 18.2109 8.97656 17.6797C8.07031 17.1484 7.35156 16.4297 6.82031 15.5234C6.28906 14.6328 6.01562 13.625 6 12.5C6.01562 11.375 6.28906 10.3672 6.82031 9.47656C7.35156 8.57031 8.07031 7.85156 8.97656 7.32031C9.86719 6.78906 10.875 6.51562 12 6.5C13.125 6.51562 14.1328 6.78906 15.0234 7.32031C15.9297 7.85156 16.6484 8.57031 17.1797 9.47656C17.7109 10.3672 17.9844 11.375 18 12.5ZM12 7.625C10.625 7.65625 9.47656 8.13281 8.55469 9.05469C7.63281 9.97656 7.15625 11.125 7.125 12.5C7.15625 13.875 7.63281 15.0234 8.55469 15.9453C9.47656 16.8672 10.625 17.3438 12 17.375C13.375 17.3438 14.5234 16.8672 15.4453 15.9453C16.3672 15.0234 16.8438 13.875 16.875 12.5C16.8438 11.125 16.3672 9.97656 15.4453 9.05469C14.5234 8.13281 13.375 7.65625 12 7.625Z" fill="#795AA0" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="filter">
                                        <div class="filter__top">
                                            <div class="filter__title">
                                                <div class="text24 font2">Фильтры</div>
                                                <div class="chat-item__count">
                                                    <span class="text16 text10-mob font2">
                                                        4
                                                    </span>
                                                </div>
                                            </div>
                                            <button class="filter__refresh">
                                                Сбросить все
                                            </button>
                                        </div>
                                        <div class="filter__content">
                                            <div class="filter-group">
                                                <div class="filter-group__title text20 font2">
                                                    Категории
                                                </div>
                                                <div class="filter__categories">
                                                    <div class="category-item">
                                                        <div class="category-item__show">
                                                            <div class="category-item__title">
                                                                <span>Электроника</span>
                                                            </div>
                                                            <button class="category-item__btn">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                        </div>

                                                        <div class="category-item__hidden">
                                                            <div class="category-item">
                                                                <div class="category-item__show">
                                                                    <div class="category-item__title">
                                                                        <span>Смартфоны</span>
                                                                    </div>
                                                                    <button class="category-item__btn">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        </svg>
                                                                    </button>
                                                                </div>

                                                                <div class="category-item__hidden">
                                                                    <div class="category-item__links">
                                                                        <a href="" class="category-item__link">Аксессуары</a>
                                                                        <a href="" class="category-item__link">Гаджеты</a>
                                                                        <a href="" class="category-item__link">Приложения</a>
                                                                        <a href="" class="category-item__link">Смартчасы</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="category-item">
                                                        <div class="category-item__show">
                                                            <div class="category-item__title">
                                                                <span>Бизнес</span>
                                                            </div>
                                                            <button class="category-item__btn">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                        </div>

                                                        <div class="category-item__hidden">
                                                            <div class="category-item__links">
                                                                <a href="" class="category-item__link">Аксессуары</a>
                                                                <a href="" class="category-item__link">Гаджеты</a>
                                                                <a href="" class="category-item__link">Приложения</a>
                                                                <a href="" class="category-item__link">Смартчасы</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="category-item">
                                                        <div class="category-item__show">
                                                            <div class="category-item__title">
                                                                <span>Компьютеры</span>
                                                            </div>
                                                            <button class="category-item__btn">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                        </div>

                                                        <div class="category-item__hidden">
                                                            <div class="category-item__links">
                                                                <a href="" class="category-item__link">Аксессуары</a>
                                                                <a href="" class="category-item__link">Гаджеты</a>
                                                                <a href="" class="category-item__link">Приложения</a>
                                                                <a href="" class="category-item__link">Смартчасы</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="category-item">
                                                        <div class="category-item__show">
                                                            <div class="category-item__title">
                                                                <span>Сад</span>
                                                            </div>
                                                            <button class="category-item__btn">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                        </div>

                                                        <div class="category-item__hidden">
                                                            <div class="category-item__links">
                                                                <a href="" class="category-item__link">Аксессуары</a>
                                                                <a href="" class="category-item__link">Гаджеты</a>
                                                                <a href="" class="category-item__link">Приложения</a>
                                                                <a href="" class="category-item__link">Смартчасы</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="category-item">
                                                        <div class="category-item__show">
                                                            <div class="category-item__title">
                                                                <span>Коллекционные предметы</span>
                                                            </div>
                                                            <button class="category-item__btn">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </button>
                                                        </div>

                                                        <div class="category-item__hidden">
                                                            <div class="category-item__links">
                                                                <a href="" class="category-item__link">Аксессуары</a>
                                                                <a href="" class="category-item__link">Гаджеты</a>
                                                                <a href="" class="category-item__link">Приложения</a>
                                                                <a href="" class="category-item__link">Смартчасы</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <fieldset class="fg2">
                                                <label>Свернутые фильтры</label>
                                                <select>
                                                    <option selected hidden>Свернутые фильтры</option>
                                                    <option>Свернутые фильтры 1</option>
                                                    <option>Свернутые фильтры 2</option>
                                                </select>
                                            </fieldset>
                                            <fieldset class="fg2">
                                                <label>Расширенные фильтры</label>
                                                <select>
                                                    <option>Рекомендованное</option>
                                                    <option>Рекомендованное 2</option>
                                                </select>
                                            </fieldset>
                                            <div class="filter__checks">
                                                <div class="m-check">
                                                    <input type="checkbox"/>
                                                        <label>Рекомендованное</label>
                                                </div>
                                                <div class="m-check">
                                                    <input type="checkbox"/>
                                                        <label>Последнее добавление</label>
                                                </div>
                                                <div class="m-check">
                                                    <input type="checkbox"/>
                                                        <label>Истекает срок действия</label>
                                                </div>
                                                <div class="m-check">
                                                    <input type="checkbox"/>
                                                        <label>Самое популярное</label>
                                                </div>
                                                <div class="m-check">
                                                    <input type="checkbox"/>
                                                        <label>Цена: высокая → низкая</label>
                                                </div>
                                                <div class="m-check">
                                                    <input type="checkbox"/>
                                                        <label>Цена: низкая → высокая</label>
                                                </div>
                                            </div>
                                            <fieldset class="fg2">
                                                <label>Год производства</label>
                                                <select>
                                                    <option>2011</option>
                                                    <option>2012</option>
                                                    <option>2013</option>
                                                    <option>2014</option>
                                                </select>
                                            </fieldset>
                                            <div class="filter__checks _four-col">
                                                <div class="m-check">
                                                    <input type="checkbox"/>
                                                        <label>2011</label>
                                                </div>
                                                <div class="m-check">
                                                    <input type="checkbox"/>
                                                        <label>2011</label>
                                                </div>
                                                <div class="m-check">
                                                    <input type="checkbox"/>
                                                        <label>2002</label>
                                                </div>
                                                <div class="m-check">
                                                    <input type="checkbox"/>
                                                        <label>2000</label>
                                                </div>
                                                <div class="m-check">
                                                    <input type="checkbox"/>
                                                        <label>1998</label>
                                                </div>
                                                <div class="m-check">
                                                    <input type="checkbox"/>
                                                        <label>1992</label>
                                                </div>
                                                <div class="m-check">
                                                    <input type="checkbox"/>
                                                        <label>1990</label>
                                                </div>
                                                <div class="m-check">
                                                    <input type="checkbox"/>
                                                        <label>1986</label>
                                                </div>
                                            </div>
                                            <button class="filter__btn m-btn m-btn-purple">
                                                <span>Сохранить</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="products">
                                    <div class="product-card">
                                        <div class="product-card__inner">
                                            <div class="product-card__img">
                                                <img src="img/product.png" alt=""/>
                                            </div>

                                            <div class="product-card__content">
                                                <div class="product-card__top">
                                                    <div class="product-card__price">
                                                        <span class="text16">$</span><span class="text32 bold-text">35,50</span>
                                                    </div>

                                                    <div class="product-card__sale">
                                                        <span>Скидка 50%</span>
                                                    </div>

                                                </div>
                                                <div class="product-card__title text32 font2">
                                                    Creativity stimulating lotion. Drink to generate better ideas!
                                                </div>
                                                <div class="text20 text10-mob">
                                                    Натюрмортом называют один из жанров изобразительного искусства. Термин произошел от
                                                </div>
                                                <div class="product-card__rating">
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
                                        <button class="info__btn m-btn m-btn-white round-btn">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.5 32.5L32.5 7.5M32.5 7.5L13.75 7.5M32.5 7.5L32.5 26.25" stroke="#795AA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div class="product-card">
                                        <div class="product-card__inner">
                                            <div class="product-card__img">
                                                <img src="img/product.png" alt=""/>
                                            </div>

                                            <div class="product-card__content">
                                                <div class="product-card__top">
                                                    <div class="product-card__price">
                                                        <span class="text16">$</span><span class="text32 bold-text">35,50</span>
                                                    </div>

                                                </div>
                                                <div class="product-card__title text32 font2">
                                                    Creativity stimulating lotion. Drink to generate better ideas!
                                                </div>
                                                <div class="text20 text10-mob">
                                                    Натюрмортом называют один из жанров изобразительного искусства. Термин произошел от
                                                </div>
                                                <div class="product-card__rating">
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
                                        <button class="info__btn m-btn m-btn-white round-btn">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.5 32.5L32.5 7.5M32.5 7.5L13.75 7.5M32.5 7.5L32.5 26.25" stroke="#795AA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div class="product-card">
                                        <div class="product-card__inner">
                                            <div class="product-card__img">
                                                <img src="img/product.png" alt=""/>
                                            </div>

                                            <div class="product-card__content">
                                                <div class="product-card__top">
                                                    <div class="product-card__price">
                                                        <span class="text16">$</span><span class="text32 bold-text">35,50</span>
                                                    </div>

                                                </div>
                                                <div class="product-card__title text32 font2">
                                                    Creativity stimulating lotion. Drink to generate better ideas!
                                                </div>
                                                <div class="text20 text10-mob">
                                                    Натюрмортом называют один из жанров изобразительного искусства. Термин произошел от
                                                </div>
                                                <div class="product-card__rating">
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
                                        <button class="info__btn m-btn m-btn-white round-btn">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.5 32.5L32.5 7.5M32.5 7.5L13.75 7.5M32.5 7.5L32.5 26.25" stroke="#795AA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div class="product-card">
                                        <div class="product-card__inner">
                                            <div class="product-card__img">
                                                <img src="img/product.png" alt=""/>
                                            </div>

                                            <div class="product-card__content">
                                                <div class="product-card__top">
                                                    <div class="product-card__price">
                                                        <span class="text16">$</span><span class="text32 bold-text">35,50</span>
                                                    </div>

                                                </div>
                                                <div class="product-card__title text32 font2">
                                                    Creativity stimulating lotion. Drink to generate better ideas!
                                                </div>
                                                <div class="text20 text10-mob">
                                                    Натюрмортом называют один из жанров изобразительного искусства. Термин произошел от
                                                </div>
                                                <div class="product-card__rating">
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
                                        <button class="info__btn m-btn m-btn-white round-btn">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.5 32.5L32.5 7.5M32.5 7.5L13.75 7.5M32.5 7.5L32.5 26.25" stroke="#795AA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div class="product-card">
                                        <div class="product-card__inner">
                                            <div class="product-card__img">
                                                <img src="img/product.png" alt=""/>
                                            </div>

                                            <div class="product-card__content">
                                                <div class="product-card__top">
                                                    <div class="product-card__price">
                                                        <span class="text16">$</span><span class="text32 bold-text">35,50</span>
                                                    </div>

                                                </div>
                                                <div class="product-card__title text32 font2">
                                                    Creativity stimulating lotion. Drink to generate better ideas!
                                                </div>
                                                <div class="text20 text10-mob">
                                                    Натюрмортом называют один из жанров изобразительного искусства. Термин произошел от
                                                </div>
                                                <div class="product-card__rating">
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
                                        <button class="info__btn m-btn m-btn-white round-btn">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.5 32.5L32.5 7.5M32.5 7.5L13.75 7.5M32.5 7.5L32.5 26.25" stroke="#795AA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div class="product-card">
                                        <div class="product-card__inner">
                                            <div class="product-card__img">
                                                <img src="img/product.png" alt=""/>
                                            </div>

                                            <div class="product-card__content">
                                                <div class="product-card__top">
                                                    <div class="product-card__price">
                                                        <span class="text16">$</span><span class="text32 bold-text">35,50</span>
                                                    </div>

                                                </div>
                                                <div class="product-card__title text32 font2">
                                                    Creativity stimulating lotion. Drink to generate better ideas!
                                                </div>
                                                <div class="text20 text10-mob">
                                                    Натюрмортом называют один из жанров изобразительного искусства. Термин произошел от
                                                </div>
                                                <div class="product-card__rating">
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
                                        <button class="info__btn m-btn m-btn-white round-btn">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.5 32.5L32.5 7.5M32.5 7.5L13.75 7.5M32.5 7.5L32.5 26.25" stroke="#795AA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div class="product-card">
                                        <div class="product-card__inner">
                                            <div class="product-card__img">
                                                <img src="img/product.png" alt=""/>
                                            </div>

                                            <div class="product-card__content">
                                                <div class="product-card__top">
                                                    <div class="product-card__price">
                                                        <span class="text16">$</span><span class="text32 bold-text">35,50</span>
                                                    </div>

                                                </div>
                                                <div class="product-card__title text32 font2">
                                                    Creativity stimulating lotion. Drink to generate better ideas!
                                                </div>
                                                <div class="text20 text10-mob">
                                                    Натюрмортом называют один из жанров изобразительного искусства. Термин произошел от
                                                </div>
                                                <div class="product-card__rating">
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
                                        <button class="info__btn m-btn m-btn-white round-btn">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.5 32.5L32.5 7.5M32.5 7.5L13.75 7.5M32.5 7.5L32.5 26.25" stroke="#795AA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div class="product-card">
                                        <div class="product-card__inner">
                                            <div class="product-card__img">
                                                <img src="img/product.png" alt=""/>
                                            </div>

                                            <div class="product-card__content">
                                                <div class="product-card__top">
                                                    <div class="product-card__price">
                                                        <span class="text16">$</span><span class="text32 bold-text">35,50</span>
                                                    </div>

                                                </div>
                                                <div class="product-card__title text32 font2">
                                                    Creativity stimulating lotion. Drink to generate better ideas!
                                                </div>
                                                <div class="text20 text10-mob">
                                                    Натюрмортом называют один из жанров изобразительного искусства. Термин произошел от
                                                </div>
                                                <div class="product-card__rating">
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
                                        <button class="info__btn m-btn m-btn-white round-btn">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.5 32.5L32.5 7.5M32.5 7.5L13.75 7.5M32.5 7.5L32.5 26.25" stroke="#795AA0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div class="shop__sidebar">

                            </div>
                        </div>
                    </div>
                </section>


            </main>
        </>
    )
}

export default Products;