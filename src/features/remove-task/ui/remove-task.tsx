import { taskId } from "@entities/task/model/model"
import { Trashcan } from "@shared/ui/trashcan"
import classes from "./remove-task.module.scss"
import { Dispatch, SetStateAction, useState } from "react"
import { homePageDataState } from "@pages/home-page"



interface removeTaskProps {
    taskId: taskId,
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