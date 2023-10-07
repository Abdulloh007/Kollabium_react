function Tests() {
    return (
        <>
            <main class="content">

                <div class="test">
                    <div class="container">
                        <div class="test__inner _blur-bg">
                            <div class="test__top">
                                <h1 class="text40 font2">
                                    Определение вашего отношения к мечтам
                                </h1>
                                <div class="test-progress">
                                    <div class="test-progress__top">
                                        <div class="test-progress__title text20 font2">
                                            Прогресс теста
                                        </div>
                                        <div class="text20">
                                            67%
                                        </div>
                                    </div>
                                    <div class="progressbar">
                                        <span style="width: 67%;"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="test__bottom">
                                <div class="test-question">
                                    <div class="test-question__top">
                                        <div class="text40 font2">
                                            Вопрос
                                        </div>
                                        <div class="test-question__num font2">
                                            <span class="text40 purple-text2">6</span>
                                            <span class="text24">/ 10</span>
                                        </div>
                                    </div>
                                    <div class="test-question__text">
                                        <div class="text40">Какие мечты и цели вы ставите перед собой в качестве фрилансера и как вы планируете их достигнуть?</div>
                                    </div>
                                    <img src="img/test.jpg" alt="" class="test-question__img"/>
                                </div>

                                <div class="test-answers">

                                    <div class="answer">
                                        <input type="radio" name="answer" checked/>
                                            <div class="answer__inner">
                                                <div class="text20 font2">
                                                    Моя главная мечта – стать одним из ведущих специалистов в области веб-разработки
                                                </div>
                                                <div class="answer__text">
                                                    <div class="text12">
                                                        Я хочу работать над интересными и сложными проектами, которые будут иметь значимость и положительный вклад в сфере технологий. Для достижения этой цели, я планирую активно развиваться и повышать свои навыки, изучая новейшие технологии и фреймворки, а также участвуя в профессиональных мероприятиях и образовательных программах.
                                                    </div>
                                                </div>
                                            </div>
                                    </div>

                                    <div class="answer">
                                        <input type="radio" name="answer"/>
                                            <div class="answer__inner">
                                                <div class="text20 font2">
                                                    Моя мечта – создать собственное агентство по цифровому маркетингу и веб-разработке
                                                </div>
                                                <div class="answer__text">
                                                    <div class="text12">
                                                        Я хочу собрать команду талантливых профессионалов и предоставлять качественные услуги для малого и среднего бизнеса. Планирую начать с небольших проектов, активно привлекать новых клиентов и укреплять репутацию компании, чтобы масштабироваться в будущем.
                                                    </div>
                                                </div>
                                            </div>
                                    </div>

                                    <div class="answer">
                                        <input type="radio" name="answer"/>
                                            <div class="answer__inner">
                                                <div class="text20 font2">
                                                    Моя главная цель – достичь финансовой независимости через фриланс
                                                </div>
                                                <div class="answer__text">
                                                    <div class="text12">
                                                        Я хочу свободно путешествовать и работать из любой точки мира, не завися от офиса и графика. Планирую развивать свою платформу для онлайн-обучения, создавать информационные продукты и привлекать аудиторию через социальные сети и блог.
                                                    </div>
                                                </div>
                                            </div>
                                    </div>

                                    <div class="answer">
                                        <input type="radio" name="answer"/>
                                            <div class="answer__inner">
                                                <div class="text20 font2">
                                                    Мои мечты – работать в сфере и использовать дизайне идля создания уникальных проектов
                                                </div>
                                                <div class="answer__text">
                                                    <div class="text12">
                                                        Я хочу работать с известными брендами и участвовать в крупных международных проектах. Планирую улучшать свои навыки, участвовать в конкурсах и презентовать свои работы на выставках и в онлайн-портфолио.
                                                    </div>
                                                </div>
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

export default Tests;