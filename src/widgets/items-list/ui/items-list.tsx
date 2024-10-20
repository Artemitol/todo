import { itemsListTitle } from "../model/model"
import classes from "./items-list.module.scss"



type ItemsListProps = {
    title: itemsListTitle
    children?: React.ReactNode
}


export function ItemsList(props: ItemsListProps) {
    return (
        <div className={classes.container}>
            <span className={classes.title}>{props.title}</span>
            <div className={classes.tasksList}>
                {props.children}
            </div>           
        </div>
    )
}