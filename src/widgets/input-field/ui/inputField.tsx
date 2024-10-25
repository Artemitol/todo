import { Input } from "@shared/ui/input-field"
import { CreateTask } from "@features/create-task"
import { Dispatch, KeyboardEventHandler, SetStateAction, useEffect } from "react"
import { taskId } from "@entities/task"
import classes from "./inputField.module.scss"
import { useState } from "react"


type inputFieldProps = {
    currId: taskId,
    setCurrId: Dispatch<SetStateAction<taskId>>,
    setGlobalState: Dispatch<SetStateAction<any>>,
}


export function InputField(props: inputFieldProps) {
    const [callFlag, setCallFlag] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string | null>(null)

    const keyDownHandler: KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (e.key=="Enter") {
            setCallFlag(true)
        }
    }

    useEffect(() => {
        if (callFlag) {
            setCallFlag(false)
        }
    }, [callFlag])

    return (
        <div className={classes.inputField} onKeyDown={keyDownHandler}>
            <Input parrentLink={setInputValue} placeholder="Add a new task"/>
            <CreateTask
                currentId={props.currId}
                setCurrentId={props.setCurrId}
                inputLink={inputValue}
                tasksListLink={props.setGlobalState}
                callFlag={callFlag}
            />
        </div>
    )
}