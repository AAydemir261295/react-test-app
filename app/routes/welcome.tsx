import { Link } from "react-router";

export default function Welcome() {
    return <div className="btn-container">
        <Link to="/testing">
            <button className="btn-container__btn btn nostyle-btn" >Начать тест</button>
        </Link>
    </div>;
}