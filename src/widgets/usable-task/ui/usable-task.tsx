import { Task, taskStructure } from "@entities/task";
import { RemoveTask } from "@features/remove-task";

type usableTaskProps = {
    task: taskStructure
}

export function UsableTask(props: usableTaskProps) {
    const { task } = props

    return (
        <Task {...task}>
            <RemoveTask taskId={task.taskId} />
        </Task>
    )
}