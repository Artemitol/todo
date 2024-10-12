import { Header } from "@widgets/header"
import { Main } from "@widgets/main"
import { Input } from "@shared/ui/input-field"
import { Task } from "@entities/task"
import { Button } from "@shared/ui/button"
import classes from "./home-page.module.scss"


export function Homepage() {
    return (
        <div className={classes.homepage}>
            <div className={classes.background}></div>
            <Header />
            <Main>
                <Input placeholder="Add a new task" />
                <Button />
                <Task />
            </Main>
            <footer className="footer"></footer>
        </div>
    )
}