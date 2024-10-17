import { Task, taskStructure } from "@entities/task";
import { RemoveTask } from "@features/remove-task";
import { readConfigFile } from "typescript";

interface usableTaskProps {
    task: taskStructure
}

export function UsableTask(props: usableTaskProps) {
    return (
        <Task id={props.task.id} status="in work" name={props.task.name}>
            <RemoveTask taskId={props.task.id} />
        </Task>
    )
}