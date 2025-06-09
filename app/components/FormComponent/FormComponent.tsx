import { Calendar } from "./Calendar/CalendarComponent";

export function FormComponent() {

    return <div className="form">

        <Calendar></Calendar>
        {/* <header>
            <h3>Общая информация о ребенке</h3>
        </header>

        <form action="">
            <fieldset>

                <div>
                    <label htmlFor="child-name">Имя ребенка</label>
                    <input type="text" id="child-name" />
                </div>

                <div>
                    <p>Дата рождения ребенка</p>
                    <Calendar></Calendar>
                </div>


                <fieldset>
                    <legend>Пол ребенка</legend>
                    <div>
                        <label htmlFor="man">Мужской</label>
                        <input type="radio" id="man" />
                    </div>
                    <div>
                        <label htmlFor="woman">Женский</label>
                        <input type="radio" id="woman" />
                    </div>
                </fieldset>

                <div>
                    <label htmlFor="parent-name">Имя родителя, заполняющего анкету</label>
                    <input type="text" id="parent-name" />
                </div>



            </fieldset>

            <div>
                <p>
                    Пожалуйста, внимательно прочитайте каждый вопрос и выберите наиболее подходящий вариант ответа, отражающий поведение и эмоциональное состояние вашего ребенка в течение последних 2-4 недель. Отвечайте максимально честно и искренне, так как от этого зависит точность оценки психоэмоционального развития Вашего ребенка.
                </p>
                <p>Все вопросы обязательны к заполнению</p>
            </div>


            <ul className="nostyle-list">
                <li>
                    <header> <h1>Раздел 1. Эмоциональная сфера</h1></header>
                    <fieldset>
                        <legend>Ребенок часто выражает радость и удовольствие</legend>
                        <div><label htmlFor="very-rare">Очень редко</label> <input type="radio" id="very-rare" /></div>
                        <div><label htmlFor="rare">Редко</label> <input type="radio" id="rare" /></div>
                        <div><label htmlFor="sometimes">Иногда</label> <input type="radio" id="sometimes" /></div>
                        <div><label htmlFor="often">Часто</label> <input type="radio" id="often" /></div>
                        <div><label htmlFor="always">Всегда</label> <input type="radio" id="always" /></div>
                    </fieldset>
                    <fieldset>
                        <legend>Ребенок часто выражает радость и удовольствие</legend>
                        <div><label htmlFor="very-rare">Очень редко</label> <input type="radio" id="very-rare" /></div>
                        <div><label htmlFor="rare">Редко</label> <input type="radio" id="rare" /></div>
                        <div><label htmlFor="sometimes">Иногда</label> <input type="radio" id="sometimes" /></div>
                        <div><label htmlFor="often">Часто</label> <input type="radio" id="often" /></div>
                        <div><label htmlFor="always">Всегда</label> <input type="radio" id="always" /></div>
                    </fieldset>
                    <fieldset>
                        <legend>Ребенок часто грустит или плачет без видимой причин</legend>
                        <div><label htmlFor="very-rare">Очень редко</label> <input type="radio" id="very-rare" /></div>
                        <div><label htmlFor="rare">Редко</label> <input type="radio" id="rare" /></div>
                        <div><label htmlFor="sometimes">Иногда</label> <input type="radio" id="sometimes" /></div>
                        <div><label htmlFor="often">Часто</label> <input type="radio" id="often" /></div>
                        <div><label htmlFor="always">Всегда</label> <input type="radio" id="always" /></div>
                    </fieldset>
                    <fieldset>
                        <legend>Ребенок часто грустит или плачет без видимой причины</legend>
                        <div><label htmlFor="very-rare">Очень редко</label> <input type="radio" id="very-rare" /></div>
                        <div><label htmlFor="rare">Редко</label> <input type="radio" id="rare" /></div>
                        <div><label htmlFor="sometimes">Иногда</label> <input type="radio" id="sometimes" /></div>
                        <div><label htmlFor="often">Часто</label> <input type="radio" id="often" /></div>
                        <div><label htmlFor="always">Всегда</label> <input type="radio" id="always" /></div>
                    </fieldset>
                </li>
                <li>
                    <header> <h1>Раздел 2. Социальное взаимодействие</h1></header>
                    <fieldset>
                        <legend>Ребенок легко заводит друзей</legend>
                        <div><label htmlFor="very-rare">Очень редко</label> <input type="radio" id="very-rare" /></div>
                        <div><label htmlFor="rare">Редко</label> <input type="radio" id="rare" /></div>
                        <div><label htmlFor="sometimes">Иногда</label> <input type="radio" id="sometimes" /></div>
                        <div><label htmlFor="often">Часто</label> <input type="radio" id="often" /></div>
                        <div><label htmlFor="always">Всегда</label> <input type="radio" id="always" /></div>
                    </fieldset>
                    <fieldset>
                        <legend>Ребенок легко заводит друзей</legend>
                        <div><label htmlFor="very-rare">Очень редко</label> <input type="radio" id="very-rare" /></div>
                        <div><label htmlFor="rare">Редко</label> <input type="radio" id="rare" /></div>
                        <div><label htmlFor="sometimes">Иногда</label> <input type="radio" id="sometimes" /></div>
                        <div><label htmlFor="often">Часто</label> <input type="radio" id="often" /></div>
                        <div><label htmlFor="always">Всегда</label> <input type="radio" id="always" /></div>
                    </fieldset>
                    <fieldset>
                        <legend>Ребенок предпочитает играть один, а не с другими детьми</legend>
                        <div><label htmlFor="very-rare">Очень редко</label> <input type="radio" id="very-rare" /></div>
                        <div><label htmlFor="rare">Редко</label> <input type="radio" id="rare" /></div>
                        <div><label htmlFor="sometimes">Иногда</label> <input type="radio" id="sometimes" /></div>
                        <div><label htmlFor="often">Часто</label> <input type="radio" id="often" /></div>
                        <div><label htmlFor="always">Всегда</label> <input type="radio" id="always" /></div>
                    </fieldset>
                    <fieldset>
                        <legend>Ребенок предпочитает играть один, а не с другими детьми</legend>
                        <div><label htmlFor="very-rare">Очень редко</label> <input type="radio" id="very-rare" /></div>
                        <div><label htmlFor="rare">Редко</label> <input type="radio" id="rare" /></div>
                        <div><label htmlFor="sometimes">Иногда</label> <input type="radio" id="sometimes" /></div>
                        <div><label htmlFor="often">Часто</label> <input type="radio" id="often" /></div>
                        <div><label htmlFor="always">Всегда</label> <input type="radio" id="always" /></div>
                    </fieldset>

                </li>
                <li>
                    <header> <h1>Раздел 3. Саморегуляция и поведение</h1></header>
                    <fieldset>
                        <legend>Ребенок умеет следовать правилам и инструкциям</legend>
                        <div><label htmlFor="very-rare">Очень редко</label> <input type="radio" id="very-rare" /></div>
                        <div><label htmlFor="rare">Редко</label> <input type="radio" id="rare" /></div>
                        <div><label htmlFor="sometimes">Иногда</label> <input type="radio" id="sometimes" /></div>
                        <div><label htmlFor="often">Часто</label> <input type="radio" id="often" /></div>
                        <div><label htmlFor="always">Всегда</label> <input type="radio" id="always" /></div>
                    </fieldset>
                    <fieldset>
                        <legend> Ребенок умеет следовать правилам и инструкциям</legend>
                        <div><label htmlFor="very-rare">Очень редко</label> <input type="radio" id="very-rare" /></div>
                        <div><label htmlFor="rare">Редко</label> <input type="radio" id="rare" /></div>
                        <div><label htmlFor="sometimes">Иногда</label> <input type="radio" id="sometimes" /></div>
                        <div><label htmlFor="often">Часто</label> <input type="radio" id="often" /></div>
                        <div><label htmlFor="always">Всегда</label> <input type="radio" id="always" /></div>
                    </fieldset>
                    <fieldset>
                        <legend>Ребенку трудно контролировать свои импульсы</legend>
                        <div><label htmlFor="very-rare">Очень редко</label> <input type="radio" id="very-rare" /></div>
                        <div><label htmlFor="rare">Редко</label> <input type="radio" id="rare" /></div>
                        <div><label htmlFor="sometimes">Иногда</label> <input type="radio" id="sometimes" /></div>
                        <div><label htmlFor="often">Часто</label> <input type="radio" id="often" /></div>
                        <div><label htmlFor="always">Всегда</label> <input type="radio" id="always" /></div>
                    </fieldset>
                    <fieldset>
                        <legend>Ребенку трудно контролировать свои импульсы</legend>
                        <div><label htmlFor="very-rare">Очень редко</label> <input type="radio" id="very-rare" /></div>
                        <div><label htmlFor="rare">Редко</label> <input type="radio" id="rare" /></div>
                        <div><label htmlFor="sometimes">Иногда</label> <input type="radio" id="sometimes" /></div>
                        <div><label htmlFor="often">Часто</label> <input type="radio" id="often" /></div>
                        <div><label htmlFor="always">Всегда</label> <input type="radio" id="always" /></div>
                    </fieldset>
                </li>
                <li>
                    <header><h1>Раздел 4. Самооценка и уверенность в себе</h1></header>
                    <fieldset>
                        <legend>Ребенок уверен с своих силах и способностях</legend>
                        <div><label htmlFor="very-rare">Очень редко</label> <input type="radio" id="very-rare" /></div>
                        <div><label htmlFor="rare">Редко</label> <input type="radio" id="rare" /></div>
                        <div><label htmlFor="sometimes">Иногда</label> <input type="radio" id="sometimes" /></div>
                        <div><label htmlFor="often">Часто</label> <input type="radio" id="often" /></div>
                        <div><label htmlFor="always">Всегда</label> <input type="radio" id="always" /></div>
                    </fieldset>
                    <fieldset>
                        <legend>Ребенок уверен с своих силах и способностях</legend>
                        <div><label htmlFor="very-rare">Очень редко</label> <input type="radio" id="very-rare" /></div>
                        <div><label htmlFor="rare">Редко</label> <input type="radio" id="rare" /></div>
                        <div><label htmlFor="sometimes">Иногда</label> <input type="radio" id="sometimes" /></div>
                        <div><label htmlFor="often">Часто</label> <input type="radio" id="often" /></div>
                        <div><label htmlFor="always">Всегда</label> <input type="radio" id="always" /></div>
                    </fieldset>
                    <fieldset>
                        <legend>Ребенок часто сомневается в себе</legend>
                        <div><label htmlFor="very-rare">Очень редко</label> <input type="radio" id="very-rare" /></div>
                        <div><label htmlFor="rare">Редко</label> <input type="radio" id="rare" /></div>
                        <div><label htmlFor="sometimes">Иногда</label> <input type="radio" id="sometimes" /></div>
                        <div><label htmlFor="often">Часто</label> <input type="radio" id="often" /></div>
                        <div><label htmlFor="always">Всегда</label> <input type="radio" id="always" /></div>
                    </fieldset>
                    <fieldset>
                        <legend>Ребенок часто сомневается в себе</legend>
                        <div><label htmlFor="very-rare">Очень редко</label> <input type="radio" id="very-rare" /></div>
                        <div><label htmlFor="rare">Редко</label> <input type="radio" id="rare" /></div>
                        <div><label htmlFor="sometimes">Иногда</label> <input type="radio" id="sometimes" /></div>
                        <div><label htmlFor="often">Часто</label> <input type="radio" id="often" /></div>
                        <div><label htmlFor="always">Всегда</label> <input type="radio" id="always" /></div>
                    </fieldset>
                </li>
                <li>
                    <header><h1>Раздел 5. Общие вопросы</h1></header>
                    <fieldset>
                        <legend>Как вы оцениваете общее эмоциональное состояние вашего ребенка?</legend>
                        <div><label htmlFor="very-rare">Очень редко</label> <input type="radio" id="very-rare" /></div>
                        <div><label htmlFor="rare">Редко</label> <input type="radio" id="rare" /></div>
                        <div><label htmlFor="sometimes">Иногда</label> <input type="radio" id="sometimes" /></div>
                        <div><label htmlFor="often">Часто</label> <input type="radio" id="often" /></div>
                        <div><label htmlFor="always">Всегда</label> <input type="radio" id="always" /></div>
                    </fieldset>

                    <fieldset>
                        <div>
                            <label htmlFor="more">Есть ли у вашего ребека какие-либо особенности развития или поведения о которых Вы хотели бы сообщить дополнительно?</label>
                            <textarea name="" id="more"></textarea>
                        </div>
                        <div>
                            <label htmlFor="powers">Какие, на Ваш взгляд, сильные стороны и таланты есть у Вашего ребенка?</label>
                            <textarea name="" id="powers"></textarea>
                        </div>
                        <div>
                            <label htmlFor="attention">Какие, на Ваш взгляд, области требуют особого внимания и развития у Вашего ребенка?</label>
                            <textarea name="" id="attention"></textarea>
                        </div>
                        <div>
                            <label htmlFor="doctors">Обращались ли Вы ранее к специалистам (психологу, неврологу, логопеду) по поводу развития или поведения Вашего ребенка?</label>
                            <textarea name="" id="doctors"></textarea>
                        </div>
                    </fieldset>
                </li>
            </ul>
        </form> */}
    </div >;
} 