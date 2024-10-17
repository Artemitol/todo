import { tasksListTitle } from "../model/model"
import classes from "./tasks-list.module.scss"



type TodoAppProps = {
    title: tasksListTitle
    children?: React.ReactNode
}


export function TasksList(props: TodoAppProps) {
    return (
        <div className={classes.container}>
            <span className={classes.title}>{props.title}</span>
            <div className={classes.tasksList}>
                {props.children}
            </div>           
        </div>
    )
}