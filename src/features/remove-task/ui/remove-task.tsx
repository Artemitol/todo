import { taskId } from "@entities/task/model/model"
import { Trashcan } from "@shared/ui/trashcan"
import classes from "./remove-task.module.scss"
import { Dispatch, SetStateAction } from "react"
import { homePageDataState } from "@pages/home-page"


type removeTaskProps = {
    taskId: taskId
    globalTasksState: Dispatch<SetStateAction<homePageDataState>>
}

export function RemoveTask(props: removeTaskProps) {
    const { taskId, globalTasksState } = props

    function removeClickHandle() {
        globalTasksState((prev) => ({
            ...prev,
            todo: prev.todo.filter((task) => task?.props.task.taskId !== taskId)
        }))
    }

    return (
        <button className={classes.removeButton} onClick={removeClickHandle}>
            <Trashcan />
        </button>
    ) 
}