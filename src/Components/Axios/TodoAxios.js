import axios from "axios";

const TodoAxios = axios.create({
    baseURL: `https://todoapp-7cc66-default-rtdb.firebaseio.com/`,
});

export default TodoAxios;