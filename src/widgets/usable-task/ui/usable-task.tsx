import { Task, taskStructure } from "@entities/task";
import { RemoveTask } from "@features/remove-task";
import { MarkAsCompleted } from "@features/mark-as-completed";
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
            <MarkAsCompleted />
        </Task>
    )
}