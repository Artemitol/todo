import { Input } from "@shared/ui/input-field"
import { CreateTask } from "@features/create-task"
import { Dispatch, SetStateAction } from "react"
import { taskId } from "@entities/task"
import classes from "./inputField.module.scss"
import { useState } from "react"


type inputFieldProps = {
    currId: taskId,
    setCurrId: Dispatch<SetStateAction<taskId>>,
    setGlobalState: Dispatch<SetStateAction<any>>,
}


export function InputField(props: inputFieldProps) {
    const [] = useState(null)
    const [inputValue, setInputValue] = useState<string | null>(null)

    function focusHandler() {
        setInputValue("")   
    }

    function keyDownHandler(e: KeyboardEvent) {
        if (e.key === "Enter") {
            setInputValue("")
        }
    }

    return (
        <form className={classes.inputField}>
            <Input parrentLink={setInputValue} placeholder="Add a new task"/>
            <CreateTask
                currentId={props.currId}
                setCurrentId={props.setCurrId}
                inputLink={inputValue}
                tasksListLink={props.setGlobalState}
                style={{backgroundColor: "transparent"}}
            />
        </form>
    )
}