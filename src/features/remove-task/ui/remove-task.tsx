import { taskId } from "@entities/task/model/model"
import { Trashcan } from "@shared/ui/trashcan"
import classes from "./remove-task.module.scss"
import { useState } from "react"

interface removeTaskProps {
    taskId: taskId
}

export function RemoveTask(props: removeTaskProps) {
    const [task, setTask] = useState(props.taskId)

    function removeClickHandle() {
        
    }

    return (
        <button className={classes.removeButton} onClick={removeClickHandle}>
            <Trashcan />
        </button>
    ) 
}