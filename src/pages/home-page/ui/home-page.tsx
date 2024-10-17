import { Header } from "@widgets/header"
import { Main } from "@widgets/main"
import { Input } from "@shared/ui/input-field"
import { TasksList } from "@widgets/tasks-list"
import { Button } from "@shared/ui/button"
import { UsableTask } from "@widgets/usable-task"
import { getTodos } from "@entities/task"
import classes from "./home-page.module.scss"
import { useEffect, useState } from "react"
import { taskStructure } from "@entities/task"

type homePageDataState = { todo: taskStructure[], completed: taskStructure[] }

export function Homepage() {
    const [data, setData] = useState<homePageDataState>({
        todo: [],
        completed: [],
    })

    useEffect(() => {
        getTodos().then((todos) => {
            setData((prev) => ({
                ...prev,
                todo: [...todos]
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
                    {data.todo.map((t: taskStructure) => (
                        <UsableTask
                            key={t.id}
                            task={{ id: t.id, name: t.name, status: t.status }}
                        />
                    ))}
                </TasksList>
                <TasksList title="Completed">
                    <UsableTask
                        task={{
                            id: 2,
                            status: "Completed",
                            name: "completed task",
                        }}
                    />
                </TasksList>
            </Main>
            <footer className="footer"></footer>
        </div>
    )
}