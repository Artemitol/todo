import { taskId } from "@entities/task";
import { homePageDataState } from "@pages/home-page";
import { Button } from "@shared/ui/button";
import { UsableTask } from "@widgets/usable-task";
import { Dispatch, SetStateAction } from "react";


type CreateTaskProps = {
    currentId: taskId,
    setCurrentId: Dispatch<SetStateAction<taskId>>,
    inputLink: string | null,
    tasksListLink: Dispatch<SetStateAction<homePageDataState>>
}


export function CreateTask(props: CreateTaskProps) {
    function onClickHandler() {
        const newId: taskId = props.currentId + 1
        props.setCurrentId(newId)
        props.tasksListLink((prev) => ({
            ...prev,
            todo: [
                ...prev.todo,
                <UsableTask
                    tasksListLink={props.tasksListLink}
                    key={newId}
                    task={{
                        taskId: newId,
                        name: props.inputLink || "No tast name",
                        status: "in work",
                    }}
                />,
            ],
        }))
    }

    return <Button onClick={onClickHandler}/>
}