import classes from "./main.module.scss"


export default function Main(props) {
    return (
        <div className={classes.main}>
            {props.children}
        </div>
    )
}