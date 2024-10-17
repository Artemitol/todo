import axios from "axios";
import { reqFn, todosRequestStructure } from "./model";

const baseUrl = "https://jsonplaceholder.typicode.com/todos"

export const getDataByBaseUrl = async (): Promise<todosRequestStructure[]> => {
    try {
        const request = await axios.get(baseUrl)
        const data = request.data

        return data
    }
    catch(err) {
        throw(err)
    }
}
