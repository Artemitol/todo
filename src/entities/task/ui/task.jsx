import classes from "./task.module.scss"
import { useState } from "react"


export function Task(props) {
    const [data, setData] = useState({
        name: props.name || "Task name",
        // Can be "Completed"
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
}