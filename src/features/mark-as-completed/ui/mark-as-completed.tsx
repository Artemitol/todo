import { Dispatch, SetStateAction } from "react"
import classes from "./mark-as-completed.module.scss"
import { CompletedIcon } from "@shared/ui/completed-icon"
import { homePageDataState } from "@pages/home-page"


type markAsCompletedProps = {
    globalCompletedTasksState: Dispatch<SetStateAction<homePageDataState>>
}


export function MarkAsCompleted(props: markAsCompletedProps) {
    return (
        <button type="button" className={classes.markAsCompleted}>
            <CompletedIcon />
        </button>
    )
}