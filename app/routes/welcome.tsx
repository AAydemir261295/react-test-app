import { Link, useNavigate } from "react-router";

export default function Welcome() {
    var navigate = useNavigate();

    return <div className="btn-container">
        <button className="btn-container__btn btn nostyle-btn" onClick={() => { navigate("/testing/1") }}>Начать тест</button>
    </div >;
}