import { Trashcan } from "@shared/ui/trashcan";
import classes from "./add-task.module.scss";


export function AddTask() {
    return (
        <div className={classes.container}>
            <span>
                <Trashcan color="var(--color-accent)" />
            </span>
        </div>
    )
}