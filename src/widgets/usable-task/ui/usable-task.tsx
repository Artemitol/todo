import { Task, taskStructure } from "@entities/task";
import { RemoveTask } from "@features/remove-task";
import { MarkAsCompleted } from "@features/mark-as-completed";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { homePageDataState } from "@pages/home-page";

type usableTaskProps = {
    task: taskStructure
    tasksListLink: Dispatch<SetStateAction<homePageDataState>>
}

export function UsableTask(props: usableTaskProps) {
    const { task, tasksListLink } = props

    return (
        <Task {...task}>
            <RemoveTask taskId={task.taskId} globalTasksState={tasksListLink} />
            <MarkAsCompleted
                taskId={task.taskId}
                globalCompletedTasksState={tasksListLink}
            />
        </Task>
    )
}