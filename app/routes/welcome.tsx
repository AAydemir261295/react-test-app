import { Link } from "react-router";

export default function Welcome() {
    return <Link to="/testing">
        <button className="btn nostyle-btn" >Начать тест</button>
    </Link>;
}