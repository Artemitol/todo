import classes from "./header.module.scss"


export default function Header() {
    return (
        <header className={classes.header}>
            <span>Hello World! This is TODO application</span>
        </header>
    )
}