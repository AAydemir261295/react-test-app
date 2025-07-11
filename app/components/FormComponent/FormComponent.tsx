import { useEffect, useRef, useState } from "react";
import { CalendarComponent } from "./Calendar/CalendarComponent";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { saveForm } from "~/store/reducers/formReducer";

const inputNames = [
    "child-name,date", "sex", "parent-name",
    "radosti0", "radosti1", "grusti2", "grusti3",
    "friends0", "friends1", "alone2", "alone3",
    "free0", "free1", "dangerous2", "dangerous3",
    "confidence0", "confidence1", "uncertainty2",
    "uncertainty3", "child-emotions", "peculiarities",
    "talents", "attention", "psy"
]

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
    var dispatch = useDispatch();
    var [isVisible, setIsVisible] = useState(false);
    var formState = useSelector((state: any) => state.form);
    var dateInputRef = useRef(null);

    var radios = new Map();

    function changeVisibility(newState: boolean) {
        setIsVisible(newState);
    }

    function storeForm(formData: FormData) {
        if (formData) {
            let values = formData.entries();
            let result = new Map();
            for (const pair of values) {
                let key = pair[0];
                let value = pair[1] as string;
                if (key == "date") {
                    var date = value.split(".");
                    var timeStamp = new Date(parseInt(date[2]), parseInt(date[1]), parseInt(date[0])).getTime();
                    result.set(key, timeStamp);
                } else if (value == "on") {
                } else {
                    result.set(key, { value: value });
                }
            }
            var tmp = new Map([...result, ...radios]);
            dispatch(saveForm(Object.fromEntries(tmp.entries())));
            navigate("/result")
        }
    }

    function onChangeRadio(e: any) {
        var target = e.target;
        var id = target.id;
        var name = target.name;
        radios.set(name, { value: id });
    }

    var items: any = [];

    function drawItems() {
        for (let q = 0; q < chapters.length; q++) {
            const chapter = chapters[q];
            items.push(<li key={q}>
                <header className="form-container__chapter">
                    <h5 className="form-container__chapter-text">{chapter.header}</h5>
                </header>
                {chapter.questions.map((v, idx) =>
                    <fieldset key={idx} className="four-fieldset form-container__radios nostyle-fieldset">
                        <legend className="four-fieldset__legend">{v}</legend>

                        <div className="four-fieldset__question">

                            <div >
                                <label className="radio-container" >
                                    <input defaultChecked={
                                        idx > 1 ?
                                            formState[chapter.names[1] + idx].value == "very-rare" ? true : false :
                                            formState[chapter.names[0] + idx].value == "very-rare" ? true : false
                                    } onChange={onChangeRadio} className="radio-container__input" type="radio" id="very-rare" name={idx > 1 ? chapter.names[1] + idx : chapter.names[0] + idx} />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Очень редко</span>
                                </label>
                            </div>

                            <div >
                                <label className="radio-container" >
                                    <input defaultChecked={
                                        idx > 1 ?
                                            formState[chapter.names[1] + idx].value == "rare" ? true : false :
                                            formState[chapter.names[0] + idx].value == "rare" ? true : false
                                    } onChange={onChangeRadio} className="radio-container__input" type="radio" id="rare" name={idx > 1 ? chapter.names[1] + idx : chapter.names[0] + idx} />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Редко</span>
                                </label>
                            </div>

                            <div >
                                <label className="radio-container" >
                                    <input defaultChecked={
                                        idx > 1 ?
                                            formState[chapter.names[1] + idx].value == "sometimes" ? true : false :
                                            formState[chapter.names[0] + idx].value == "sometimes" ? true : false
                                    } onChange={onChangeRadio} className="radio-container__input" type="radio" id="sometimes" name={idx > 1 ? chapter.names[1] + idx : chapter.names[0] + idx} />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Иногда</span>
                                </label>
                            </div>

                            <div >
                                <label className="radio-container" >
                                    <input defaultChecked={
                                        idx > 1 ?
                                            formState[chapter.names[1] + idx].value == "often" ? true : false :
                                            formState[chapter.names[0] + idx].value == "often" ? true : false
                                    } onChange={onChangeRadio} className="radio-container__input" type="radio" id="often" name={idx > 1 ? chapter.names[1] + idx : chapter.names[0] + idx} />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Часто</span>
                                </label>
                            </div>

                            <div >
                                <label className="radio-container" >
                                    <input defaultChecked={
                                        idx > 1 ?
                                            formState[chapter.names[1] + idx].value == "always" ? true : false :
                                            formState[chapter.names[0] + idx].value == "always" ? true : false
                                    } onChange={onChangeRadio} className="radio-container__input" type="radio" id="always" name={idx > 1 ? chapter.names[1] + idx : chapter.names[0] + idx} />
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

    drawItems();





    return <div className="form-container">
        <header className="form-container__header">
            <h3 className="form-container__header-text">Общая информация о ребенке</h3>
        </header>

        <form action={storeForm} className="form-container__form">

            <div className="form-container__child-name-container">
                <label className="form-container__child-name-label" htmlFor="child-name">Имя ребенка</label>
                <input className="nostyle-input input" type="text" id="child-name" name="child-name" defaultValue={formState['child-name'].value} />
            </div>

            <div className="form-container__date-input-container">
                <label className="form-container__date-input-label">Дата рождения ребенка</label>
                <input className="form-container__date-input nostyle-input input"
                    ref={dateInputRef}
                    value={new Date(formState['date']).toLocaleDateString("RU", { day: "2-digit", month: "2-digit", year: "numeric" })} name="date" type="text"
                    onClick={() => setIsVisible(true)} readOnly />
                {isVisible ?
                    <CalendarComponent
                        dateInputRef={dateInputRef}
                        isVisible={isVisible}
                        changeVisibility={changeVisibility}
                        className="form-container__date-input-calendar"></CalendarComponent> :
                    ""
                }

            </div>


            <fieldset className="form-container__child-sex-container nostyle-fieldset">
                <legend className="form-container__child-sex-legend">Пол ребенка</legend>

                <div className="form-container__child-sex-radios">
                    <div>
                        <label className="radio-container">
                            <input defaultChecked={
                                formState.sex.value == "man" ? true : false
                            } onChange={onChangeRadio} className="radio-container__input" type="radio" id="man" name="sex" />
                            <span className="radio-container__checkmark"></span>
                            <span className="radio-container__text">Мужской</span>
                        </label>
                    </div>
                    <div>
                        <label className="radio-container">
                            <input defaultChecked={
                                formState.sex.value == "woman" ? true : false
                            } onChange={onChangeRadio} className="radio-container__input" type="radio" id="woman" name="sex" />
                            <span className="radio-container__checkmark"></span>
                            <span className="radio-container__text">Женский</span>
                        </label>
                    </div>
                </div>
            </fieldset>

            <div className="form-container__parent-name-container">
                <label className="form-container__parent-name-label" htmlFor="parent-name">Имя родителя, заполняющего анкету</label>
                <input defaultValue={formState["parent-name"].value} className="form-container__parent-name-input input" type="text" id="parent-name" name="parent-name" />
            </div>

            <div className="form-container__notice-container">
                <p className="form-container__notice-first-paragraph">
                    Пожалуйста, внимательно прочитайте каждый вопрос
                    и выберите наиболее подходящий вариант ответа,
                    отражающий поведение и эмоциональное состояние вашего ребенка
                    в течение последних 2-4 недель. Отвечайте максимально честно и искренне,
                    так как от этого зависит точность оценки психоэмоционального развития Вашего ребенка.
                </p>
                <p className="form-container__notice-second-paragraph">Все вопросы обязательны к заполнению</p>
            </div>

            <ul className="form-container__questions nostyle-list">
                {items}

                <li>
                    <header className="form-container__chapter">
                        <h5 className="form-container__chapter-text">Раздел 5. Общие вопросы</h5>
                    </header>

                    <fieldset className="four-fieldset form-container__radios-last nostyle-fieldset">
                        <legend className="four-fieldset__legend">Как вы оцениваете общее эмоциональное состояние вашего ребенка?</legend>

                        <div className="four-fieldset__question-last">
                            <div className="four-fieldset__wrapp">
                                <label className="radio-container" >
                                    <input defaultChecked={
                                        formState['child-emotions'].value == "very-rare" ? true : false
                                    } onChange={onChangeRadio} className="radio-container__input" type="radio" id="very-rare" name="child-emotions" />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Отличное</span>
                                </label>
                            </div>

                            <div className="four-fieldset__wrapp">
                                <label className="radio-container" >
                                    <input defaultChecked={
                                        formState['child-emotions'].value == "rare" ? true : false
                                    } onChange={onChangeRadio} className="radio-container__input" type="radio" id="rare" name="child-emotions" />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Хорошее</span>
                                </label>
                            </div>

                            <div className="four-fieldset__wrapp">
                                <label className="radio-container" >
                                    <input defaultChecked={
                                        formState['child-emotions'].value == "sometimes" ? true : false
                                    } onChange={onChangeRadio} className="radio-container__input" type="radio" id="sometimes" name="child-emotions" />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Удовлетворительное</span>
                                </label>
                            </div>

                            <div className="four-fieldset__wrapp">
                                <label className="radio-container" >
                                    <input defaultChecked={
                                        formState['child-emotions'].value == "often" ? true : false
                                    } onChange={onChangeRadio} className="radio-container__input" type="radio" id="often" name="child-emotions" />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Неудовлетворительное</span>
                                </label>
                            </div>

                            <div className="four-fieldset__wrapp">
                                <label className="radio-container" >
                                    <input defaultChecked={
                                        formState['child-emotions'].value == "always" ? true : false
                                    } onChange={onChangeRadio} className="radio-container__input" type="radio" id="always" name="child-emotions" />
                                    <span className="radio-container__checkmark"></span>
                                    <span className="radio-container__text">Очень плохое</span>
                                </label>
                            </div>

                        </div>
                    </fieldset>

                    <fieldset className="four-fieldset form-container__textareas nostyle-fieldset">
                        <div className="four-fieldset__textarea-container">
                            <label className="four-fieldset__textarea-label" htmlFor="more">Есть ли у вашего ребенка какие-либо особенности развития или поведения о которых Вы хотели бы сообщить дополнительно?</label>
                            <textarea defaultValue={formState.peculiarities.value} className="textarea" name="peculiarities" id="more"></textarea>
                        </div>
                        <div className="four-fieldset__textarea-container">
                            <label className="four-fieldset__textarea-label" htmlFor="powers">Какие, на Ваш взгляд, сильные стороны и таланты есть у Вашего ребенка?</label>
                            <textarea defaultValue={formState.talents.value} className="textarea" name="talents" id="powers"></textarea>
                        </div>
                        <div className="four-fieldset__textarea-container">
                            <label className="four-fieldset__textarea-label" htmlFor="attention">Какие, на Ваш взгляд, области требуют особого внимания и развития у Вашего ребенка?</label>
                            <textarea defaultValue={formState.attention.value} className="textarea" name="attention" id="attention"></textarea>
                        </div>
                        <div className="four-fieldset__textarea-container">
                            <label className="four-fieldset__textarea-label">Обращались ли Вы ранее к специалистам (психологу, неврологу, логопеду) по поводу развития или поведения Вашего ребенка?</label>
                            <textarea defaultValue={formState.psy.value} className="textarea" name="psy" id="doctors"></textarea>
                        </div>
                    </fieldset>
                </li>
            </ul>

            <div className="form-container__btns">
                <button className="form-container__btn-previous btn btn--previous btn-smooth nostyle-btn"
                    onClick={(e) => {
                        navigate("/testing/1", { state: { previous: "/testing/2" } })
                    }} type="button">К загрузке рисунков</button>
                <button className="form-container__btn-result btn btn--result btn--disabled nostyle-btn" type="submit">Узнать результаты</button>
            </div>


        </form>

        <span className="form-container__stage stage">Шаг 2/3</span>

    </div >;
} 