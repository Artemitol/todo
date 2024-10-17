import { ReactNode, useState } from "react"
import classes from "./task.module.scss"
import { taskId, taskName, taskStructure } from "../model/model"

type taskProps = taskStructure & { children?: ReactNode }


export function Task(props: taskProps) {
    const [data, setData] = useState({
        taskId: props.id,
        name: props.name || "Task name",
        status: "in work",
        buttons: props.children || "here should be some buttons",
    })
    
    return (
        <div className={classes.task}>
            <div className={classes.taskInner}>
                <span
                    className={`${classes.name} ${
                        data.status === "completed" ? classes.completed : null
                    }`}
                >
                    {data.name}
                </span>
                <div
                    className={`${classes.buttons} ${
                        data.status === "completed" ? "hidden" : null
                    }`}
                >
                    {data.buttons}
                </div>
            </div>
        </div>
    )
}``