import { getDataByBaseUrl } from "@shared/api/todo";
import { taskStructure } from "../model/model";


export const getTodos = async (): Promise<taskStructure[]> => {
    try {
        const data = await getDataByBaseUrl()

        const reformatedData: taskStructure[] = data.map((el) => ({
            id: el.id,
            name: el.title,
            status: el.completed ? "Completed" : "in work"
        })) 

        return reformatedData
    } catch (err) {
        throw err
    }
}