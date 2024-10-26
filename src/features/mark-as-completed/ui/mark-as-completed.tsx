import { CompletedIcon } from "@shared/ui/completed-icon"
import { homePageDataState } from "@pages/home-page"
import { taskId } from "@entities/task"
import classes from "./mark-as-completed.module.scss"
import { Dispatch, ReactNode, SetStateAction } from "react"


type markAsCompletedProps = {
    taskId: taskId,
    globalCompletedTasksState: Dispatch<SetStateAction<homePageDataState>>
}


export function MarkAsCompleted(props: markAsCompletedProps) {
    const { taskId, globalCompletedTasksState } = props

    function markAsCompleted() {
        globalCompletedTasksState((prev) => {
            const task = prev.todo.find(
                (task) => task?.props.task.taskId === taskId
            )
            
            task.props.task.status = "Completed"

            return {
                ...prev,
                todo: prev.todo.filter(
                    (task) => task?.props.task.taskId !== taskId
                ),
                completed: [...prev.completed, task],
            }
        })
    }

    return (
        <button
            type="button"
            className={classes.markAsCompleted}
            onClick={markAsCompleted}
        >
            <CompletedIcon />
        </button>
    )
}