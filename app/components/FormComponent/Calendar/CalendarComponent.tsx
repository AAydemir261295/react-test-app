import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDate } from "~/store/reducers/formReducer";


export function CalendarComponent(props: any) {
    var dispatch = useDispatch();
    var today = useSelector((state: any) => state.form)
    var [actualDate, setActualDate] = useState(new Date(today['date']));
    var days: any = [];

    useEffect(() => {
        document.addEventListener("click", (e: any) => {
            const calendar = document.querySelector(".calendar");
            if (!calendar?.contains(e.target) && e.target != props.dateInputRef.current) {
                props.changeVisibility(false);
            }
        })

    })

    function parseMonth() {
        var tmp = actualDate.toLocaleString("ru-RU", { month: "long" })
        var b = tmp.charAt(0);
        return b.toUpperCase() + tmp.slice(1, tmp.length);
    }

    function decrementMonth() {
        setActualDate(new Date(actualDate.setMonth(actualDate.getMonth() - 1)));
    }

    function incrementMonth() {
        setActualDate(new Date(actualDate.setMonth(actualDate.getMonth() + 1)));
    }

    function chooseDay(timeStamp: Date) {
        // setIsVisible(false);
        props.changeVisibility(false);
        dispatch(updateDate(timeStamp.getTime()))
    }


    function getDays() {
        let year = actualDate.getFullYear();
        let month = actualDate.getMonth();

        let dayone = new Date(actualDate.getFullYear(), actualDate.getMonth(), 0).getDay();
        let lastdate = new Date(actualDate.getFullYear(), actualDate.getMonth() + 1, 0).getDate();
        let dayend = new Date(actualDate.getFullYear(), actualDate.getMonth(), lastdate).getDay();

        for (let i = dayone; i > 0; i--) {
            days.push(<li key={i + " " + i} className="calendar__day"></li>);
        }


        for (let i = 1; i <= lastdate; i++) {

            let isToday = i === actualDate.getDate()
                && month === new Date().getMonth()
                && year === new Date().getFullYear();

            let t = new Date(year, month, i);

            if (isToday) {
                days.push(
                    <li key={i} className='calendar__day calendar__day--today' onClick={() => { chooseDay(t) }}>{i}</li>)
            } else {
                days.push(
                    <li key={i} className='calendar__day calendar__day--hoverable' onClick={() => { chooseDay(t) }}>{i}</li>)
            }
        }


        for (let i = dayend; i < 7; i++) {
            days.push(<li key={i + " " + i + " " + i} className="calendar__day"></li>);
        }
    }

    getDays();


    return <div className="calendar">
        <header className="calendar__header">
            <img className="calendar__header-left" onClick={() => { decrementMonth(); }} alt="" />
            {/* <span className="calendar__header-left">&lt;</span> */}
            <div className="calendar__header-month-year-wrapp">
                <h3 className="calendar__header-month">{parseMonth()}</h3>
                <h3 className="calendar__header-year">{actualDate.getFullYear()}</h3>
            </div>
            <img className="calendar__header-right" onClick={() => { incrementMonth(); }} alt="" />
        </header>

        <ul className="calendar__days-names nostyle-list">
            <li className="calendar__days-names-item">
                <span>пн</span>
            </li>
            <li className="calendar__days-names-item">
                <span>вт</span>
            </li>
            <li className="calendar__days-names-item">
                <span>ср</span>
            </li>
            <li className="calendar__days-names-item">
                <span>чт</span>
            </li>
            <li className="calendar__days-names-item">
                <span>пт</span>
            </li>
            <li className="calendar__days-names-item">
                <span>сб</span>
            </li>
            <li className="calendar__days-names-item">
                <span>вс</span>
            </li>
        </ul>


        <ul className="calendar__days nostyle-list">
            {days}
        </ul>

        <div>

        </div>
    </div >;
}