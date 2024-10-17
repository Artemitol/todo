import classes from  "./input-field.module.scss"

interface InputProps {
    placeholder?: string
}


export function Input(props: InputProps) {
    return (
        <input className={classes.input} type="text" placeholder={props.placeholder} />
    )
}