import { homePageDataState } from "@pages/home-page";
import { Button } from "@shared/ui/button";
import { UsableTask } from "@widgets/usable-task";
import { Dispatch, ReactNode, SetStateAction } from "react";


type CreateTaskProps = {
    lastId: number,
    inputLink: string | null,
    tasksListLink: Dispatch<SetStateAction<homePageDataState>>
}


export function CreateTask(props: CreateTaskProps) {
    function onClickHandler() {
        props.tasksListLink((prev) => ({
            ...prev,
            todo: [...prev.todo, <UsableTask task={{taskId: props.lastId, name: props.inputLink || "No tast name", status: "in work"}}/>]
        }))
    }

    return <Button onClick={onClickHandler}/>
}