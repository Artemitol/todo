import { ReactNode, useState } from "react"
import classes from "./task.module.scss"
import { taskStructure } from "../model/model"

type taskProps = taskStructure & { children?: ReactNode }


export function Task(props: taskProps) {
    const [data, setData] = useState<taskStructure>({
        taskId: props.taskId,
        name: props.name || "Task name",
        status: props.status,
        buttons: props.children || "here should be some buttons",
    })
    
    return (
        <div className={classes.task}>
            <div className={classes.taskInner}>
                <span
                    className={`${classes.name} ${
                        data.status === "Completed" ? classes.completed : null
                    }`}
                >
                    {data.name}
                </span>
                <div
                    className={`${classes.buttons} ${
                        data.status === "Completed" ? "hidden" : null
                    }`}
                >
                    {data.status === "Completed" ? data.buttons : null}
                </div>
            </div>
        </div>
    )
}``