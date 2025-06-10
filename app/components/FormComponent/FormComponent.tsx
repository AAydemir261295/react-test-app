import { useEffect, useRef, useState } from "react";
import { CalendarComponent } from "./Calendar/CalendarComponent";
import { useNavigate } from "react-router";

const chapters = [
    {
        header: "Раздел 1. Эмоциональная сфера",
        questions: [
            "Ребенок часто выражает радость и удовольствие",
            "Ребенок часто выражает радость и удовольствие",
            "Ребенок часто грустит или плачет без видимой причин",
            "Ребенок часто грустит или плачет без видимой причин",
        ],
        names: ['radosti', "grusti"],
    },
    {
        header: "Раздел 2. Социальное взаимодействие",
        questions: [
            "Ребенок легко заводит друзей",
            "Ребенок легко заводит друзей",
            "Ребенок предпочитает играть один, а не с другими детьми",
            "Ребенок предпочитает играть один, а не с другими детьми",
        ],
        names: ["friends", "alone"],

    },
    {
        header: "Раздел 3. Саморегуляция и поведение",
        questions: [
            "Ребенок умеет следовать правилам и инструкциям",
            "Ребенок умеет следовать правилам и инструкциям",
            "Ребенку трудно контролировать свои импульсы",
            "Ребенку трудно контролировать свои импульсы",
        ],
        names: ["free", "dangerous"],

    },
    {
        header: "Раздел 4. Самооценка и уверенность в себе",
        questions: [
            "Ребенок уверен с своих силах и способностях",
            "Ребенок уверен с своих силах и способностях",
            "Ребенок часто сомневается в себе",
            "Ребенок часто сомневается в себе",
        ],
        names: ["confidence", "uncertainty"],

    }
]


export function FormComponent() {
    var navigate = useNavigate();
    var [date, setDate] = useState(new Date(Date.now()));
    var [isVisible, setIsVisible] = useState("calendar--invisible");
    // var [form, setForm] = useState({});
    var formRef = useRef(null);

    useEffect(() => {
        var calendar = document.querySelector(".calendar");
        var input = document.querySelector(".form__date-input");
        document.addEventListener("click", (e) => {
            if (!calendar?.contains(e.target) && e.target != input) {
                setIsVisible("calendar--invisible");
            } else if (e.target?.classList.contains("calendar__day")) {
                console.log("?");
                setIsVisible("calendar--invisible");
            }
        })
    })


    function showCalendar() {
        setIsVisible("");
    }


    var items = [];

    function temp() {
        for (let q = 0; q < chapters.length; q++) {
            const chapter = chapters[q];

            items.push(<li className="form__questions-item" key={q}>
                <header className="form__chapter">
                    <h5 className="form__chapter-text">{chapter.header}</h5>
                </header>
                {chapter.questions.map((v, idx) =>
                    <fieldset key={idx} className="four-fieldset form__radios nostyle-fieldset">
                        <legend className="four-fieldset__legend">{v}</legend>

                        <div className="four-fieldset__question">

                            <div >
                                <label className="radio-container" >
                                    <input className="radio-container__input" type="radio" id="very-rare" name={idx > 1 ? chapter.names[1] + idx : chapter.names[0] + idx} />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Очень редко</span>
                                </label>
                            </div>

                            <div >
                                <label className="radio-container" >
                                    <input className="radio-container__input" type="radio" id="rare" name={idx > 1 ? chapter.names[1] + idx : chapter.names[0] + idx} />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Редко</span>
                                </label>
                            </div>

                            <div >
                                <label className="radio-container" >
                                    <input className="radio-container__input" type="radio" id="sometimes" name={idx > 1 ? chapter.names[1] + idx : chapter.names[0] + idx} />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Иногда</span>
                                </label>
                            </div>

                            <div >
                                <label className="radio-container" >
                                    <input className="radio-container__input" type="radio" id="often" name={idx > 1 ? chapter.names[1] + idx : chapter.names[0] + idx} />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Часто</span>
                                </label>
                            </div>

                            <div >
                                <label className="radio-container" >
                                    <input className="radio-container__input" type="radio" id="always" name={idx > 1 ? chapter.names[1] + idx : chapter.names[0] + idx} />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Всегда</span>
                                </label>
                            </div>


                        </div>
                    </fieldset>
                )}

            </li>);
        }
    }

    temp();


    return <div className="form">
        <header className="form__header">
            <h3 className="form__header-text">Общая информация о ребенке</h3>
        </header>

        <form ref={formRef}>

            <div className="form__child-name-container">
                <label className="form__child-name-label" htmlFor="child-name">Имя ребенка</label>
                <input className="nostyle-input input" type="text" id="child-name" name="child-name" />
            </div>

            <div className="form__date-input-container">
                <label className="form__date-input-label">Дата рождения ребенка</label>
                <input className="form__date-input nostyle-input input" name="date" type="text" onClick={() => showCalendar()} value={date.toLocaleDateString("RU", { day: "2-digit", month: "2-digit", year: "numeric" })} readOnly />
                <CalendarComponent className="form__date-input-calendar" today={date} updateInput={setDate} showCalendar={isVisible}></CalendarComponent>
            </div>


            <fieldset className="form__child-sex-container nostyle-fieldset">
                <legend className="form__child-sex-legend">Пол ребенка</legend>

                <div className="form__child-sex-radios">
                    <div>
                        <label className="radio-container">
                            <input className="radio-container__input" type="radio" name="sex" />
                            <span className="radio-container__checkmark"></span>
                            <span className="radio-container__text">Мужской</span>
                        </label>
                    </div>
                    <div>
                        <label className="radio-container">
                            <input className="radio-container__input" type="radio" name="sex" />
                            <span className="radio-container__checkmark"></span>
                            <span className="radio-container__text">Женский</span>
                        </label>
                    </div>
                </div>

            </fieldset>

            <div className="form__parent-name-container">
                <label className="form__parent-name-label" htmlFor="parent-name">Имя родителя, заполняющего анкету</label>
                <input className="form__parent-name-input input" type="text" id="parent-name" name="parent-name" />
            </div>

            <div className="form__notice-container">
                <p className="form__notice-first-paragraph">
                    Пожалуйста, внимательно прочитайте каждый вопрос
                    и выберите наиболее подходящий вариант ответа,
                    отражающий поведение и эмоциональное состояние вашего ребенка
                    в течение последних 2-4 недель. Отвечайте максимально честно и искренне,
                    так как от этого зависит точность оценки психоэмоционального развития Вашего ребенка.
                </p>
                <p className="form__notice-second-paragraph">Все вопросы обязательны к заполнению</p>
            </div>

            <ul className="form__questions nostyle-list">
                {items}

                <li>
                    <header className="form__chapter">
                        <h5 className="form__chapter-text">Раздел 5. Общие вопросы</h5>
                    </header>

                    <fieldset className="four-fieldset form__radios nostyle-fieldset">
                        <legend className="four-fieldset__legend">Как вы оцениваете общее эмоциональное состояние вашего ребенка?</legend>

                        <div className="four-fieldset__question">
                            <div >
                                <label className="radio-container" >
                                    <input className="radio-container__input" type="radio" id="very-rare" name="child-emotions" />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Очень редко</span>
                                </label>
                            </div>

                            <div >
                                <label className="radio-container" >
                                    <input className="radio-container__input" type="radio" id="rare" name="child-emotions" />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Редко</span>
                                </label>
                            </div>

                            <div >
                                <label className="radio-container" >
                                    <input className="radio-container__input" type="radio" id="sometimes" name="child-emotions" />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Иногда</span>
                                </label>
                            </div>

                            <div >
                                <label className="radio-container" >
                                    <input className="radio-container__input" type="radio" id="often" name="child-emotions" />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Часто</span>
                                </label>
                            </div>

                            <div >
                                <label className="radio-container" >
                                    <input className="radio-container__input" type="radio" id="always" name="child-emotions" />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Всегда</span>
                                </label>
                            </div>

                        </div>
                    </fieldset>

                    <fieldset className="four-fieldset nostyle-fieldset">
                        <div className="four-fieldset__textarea-container">
                            <label className="four-fieldset__textarea-label" htmlFor="more">Есть ли у вашего ребенка какие-либо особенности развития или поведения о которых Вы хотели бы сообщить дополнительно?</label>
                            <textarea className="textarea" name="peculiarities" id="more"></textarea>
                        </div>
                        <div className="four-fieldset__textarea-container">
                            <label className="four-fieldset__textarea-label" htmlFor="powers">Какие, на Ваш взгляд, сильные стороны и таланты есть у Вашего ребенка?</label>
                            <textarea className="textarea" name="talents" id="powers"></textarea>
                        </div>
                        <div className="four-fieldset__textarea-container">
                            <label className="four-fieldset__textarea-label" htmlFor="attention">Какие, на Ваш взгляд, области требуют особого внимания и развития у Вашего ребенка?</label>
                            <textarea className="textarea" name="attention" id="attention"></textarea>
                        </div>
                        <div className="four-fieldset__textarea-container">
                            <label className="four-fieldset__textarea-label">Обращались ли Вы ранее к специалистам (психологу, неврологу, логопеду) по поводу развития или поведения Вашего ребенка?</label>
                            <textarea className="textarea" name="psy" id="doctors"></textarea>
                        </div>
                    </fieldset>
                </li>
            </ul>


        </form>
        <footer className="form-footer">
            <span className="form-footer__stage">Шаг 2/3</span>

            <div className="form-footer__buttons">
                <button className="form-footer__btn form-footer__btn-previous btn btn--previous btn-smooth nostyle-btn" onClick={(e) => { navigate("/testing/1") }}>К загрузке рисунков</button>
                <button className="form-footer__btn form-footer__btn-result btn btn--result btn--disabled nostyle-btn" onClick={(e) => console.log(new FormData(formRef.current))}>Узнать результаты</button>
            </div>
        </footer>
    </div >;
} 