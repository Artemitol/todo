import { taskId } from "@entities/task/model/model"
import { Trashcan } from "@shared/ui/trashcan"
import classes from "./remove-task.module.scss"
import { Dispatch, ReactNode, SetStateAction, useState } from "react"



type removeTaskProps = {
    taskId: taskId,
    tasksListLink: Dispatch<SetStateAction<Array<any>>>
}

export function RemoveTask(props: removeTaskProps) {
    function removeClickHandle() {
        
    }

    return (
        <button className={classes.removeButton} onClick={removeClickHandle}>
            <Trashcan />
        </button>
    ) 
}