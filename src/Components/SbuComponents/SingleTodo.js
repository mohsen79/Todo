import Header from "./Header";
import { useLocation } from "react-router-dom";

export default function SingleTodo() {
    const location = useLocation();

    return (
        <div>
            <Header />
            <div className="p-3">
                <h2>Single Todo</h2>
                <h4>{location.state.text}</h4>
                <h5 className={location.state.done ? 'text-success' : 'text-danger'}>{location.state.done ? 'completed' : 'uncompleted'}</h5>
            </div>
        </div >
    );
}