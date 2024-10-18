import { Header } from "@widgets/header"
import { Main } from "@widgets/main"
import { Input } from "@shared/ui/input-field"
import { TasksList } from "@widgets/tasks-list"
import { Button } from "@shared/ui/button"
import { UsableTask } from "@widgets/usable-task"
import { getTodos, Task } from "@entities/task"
import classes from "./home-page.module.scss"
import { ReactNode, useEffect, useState } from "react"
import { taskStructure } from "@entities/task"

type homePageDataState = { todo: ReactNode[], completed: ReactNode[] }

export function Homepage() {
    const [data, setData] = useState<homePageDataState>({
        todo: [],
        completed: [],
    })

    useEffect(() => {
        getTodos().then((todos) => {
            setData((prev) => ({
                ...prev,
                todo: todos
                    .filter((el) => el.status === "in work")
                    .map((el) => <UsableTask key={el.taskId} task={el} />),
                completed: todos
                    .filter((el) => el.status === "Completed")
                    .map((el) => <UsableTask key={el.taskId} task={el} />),
            }))
        })
    }, [])

    return (
        <div className={classes.homepage}>
            <div className={classes.background}></div>
            <Header />
            <Main>
                <Input placeholder="Add a new task" />
                <Button />
                <TasksList title="Todo">
                    {data.todo}
                </TasksList>
                <TasksList title="Completed">
                    {data.completed}
                </TasksList>
            </Main>
            <footer className="footer"></footer>
        </div>
    )
}