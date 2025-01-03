import { ChangeEvent, Dispatch, SetStateAction, HTMLAttributes } from "react"
import classes from  "./input-field.module.scss"

type data = Dispatch<SetStateAction<string | null>>

type InputProps = {
    placeholder?: string
    // This prop helps to link input value with some parrent state
    parrentLink?: data
}


export function Input(props: InputProps & HTMLAttributes<HTMLInputElement>) {
    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        if (props.parrentLink){
            const newValue = e.target.value

            props.parrentLink(newValue === "" ? null : newValue)
        }
    }

    return (
        <input
            className={classes.input}
            type="text"
            onChange={onChangeHandler}
            placeholder={props.placeholder}
        />
    )
}