import { taskId } from "@entities/task";
import { homePageDataState } from "@pages/home-page";
import { Button } from "@shared/ui/button";
import { UsableTask } from "@widgets/usable-task";
import { Dispatch, HTMLAttributes, SetStateAction, useEffect } from "react";


type CreateTaskProps = {
    currentId: taskId,
    setCurrentId: Dispatch<SetStateAction<taskId>>,
    inputLink: string | null,
    tasksListLink: Dispatch<SetStateAction<homePageDataState>>,
    callFlag: boolean
}


export function CreateTask(props: CreateTaskProps & HTMLAttributes<HTMLButtonElement>) {
    const { currentId, setCurrentId, tasksListLink, inputLink, callFlag } = props
    console.log(props)
    function onClickHandler() {
        const newId: taskId = currentId + 1
        setCurrentId(newId)
        tasksListLink((prev) => ({
            ...prev,
            todo: [
                ...prev.todo,
                <UsableTask
                    tasksListLink={tasksListLink}
                    key={newId}
                    task={{
                        taskId: newId,
                        name: inputLink || "No tast name",
                        status: "in work",
                    }}
                />,
            ],
        }))
    }

    useEffect(() => {
        console.log(callFlag)
        if (callFlag) {
            onClickHandler()
            console.log("Clicked")
        }
    }, [callFlag])

    return <Button onClick={onClickHandler}/>
}