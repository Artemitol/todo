import axios from "axios";
import { reqFn, todosRequestStructure } from "./model";

const baseUrl = "https://jsonplaceholder.typicode.com/todos"

export const getDataByBaseUrl = async (limit: number = 5): Promise<todosRequestStructure[]> => {
    try {
        const request = await axios.get(baseUrl)
        const data: todosRequestStructure[] = request.data
        
        const slicedData = data.slice(0, limit)

        return slicedData
    }
    catch(err) {
        throw(err)
    }
}
