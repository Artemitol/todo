import classes from  "./input-field.module.scss"


export function Input(props) {
    return (
        <input className={classes.input} type="text" placeholder={props.placeholder} />
    )
}