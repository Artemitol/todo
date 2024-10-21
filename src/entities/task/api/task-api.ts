import { getDataByBaseUrl } from "@shared/api/todo";
import { taskStructure } from "../model/model";


export const getTodos = async (limit: number): Promise<taskStructure[]> => {
    try {
        const data = await getDataByBaseUrl(limit)

        const reformatedData: taskStructure[] = data.map((el) => ({
            taskId: el.id,
            name: el.title,
            status: el.completed ? "Completed" : "in work"
        })) 

        return reformatedData
    } catch (err) {
        throw err
    }
}