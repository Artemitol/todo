import { Task, taskStructure } from "@entities/task";
import { RemoveTask } from "@features/remove-task";
import { Dispatch, SetStateAction } from "react";

type usableTaskProps = {
    task: taskStructure
    tasksListLink: Dispatch<SetStateAction<any>>
}

export function UsableTask(props: usableTaskProps) {
    const { task } = props

    return (
        <Task {...task}>
            <RemoveTask
                taskId={task.taskId}
                globalTasksState={props.tasksListLink}
            />
        </Task>
    )
}