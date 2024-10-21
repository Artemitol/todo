import { Header } from "@widgets/header"
import { Main } from "@widgets/main"
import { Input } from "@shared/ui/input-field"
import { Button } from "@shared/ui/button"
import { ItemsList } from "@widgets/items-list"
import { UsableTask } from "@widgets/usable-task"
import { getTodos, taskId } from "@entities/task"
import { CreateTask } from "@features/create-task"
import classes from "./home-page.module.scss"
import { useEffect, useState } from "react"
import { homePageDataState } from "../model/model"

export function Homepage() {
    const [data, setData] = useState<homePageDataState>({
        todo: [],
        completed: [],
    })

    useEffect(() => {
        getTodos(5).then((todos) => {
            // Setting last id value from last element of requested array from API
            setCurrentId(todos[todos.length - 1].taskId)
            
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

    // TODO: refactor this states to the widget
    const [inputValue, setInputValue] = useState<string | null>(null)
    const [currentId, setCurrentId] = useState<taskId>(1)

    return (
        <div className={classes.homepage}>
            <div className={classes.background}></div>
            <Header />
            <Main>
                <Input
                    parrentLink={setInputValue}
                    placeholder="Add a new task"
                />
                <CreateTask
                    currentId={currentId}
                    setCurrentId={setCurrentId}
                    inputLink={inputValue}
                    tasksListLink={setData}
                />
                <ItemsList title="Todo">{data.todo}</ItemsList>
                <ItemsList title="Todo">{data.completed}</ItemsList>
            </Main>
            <footer className="footer"></footer>
        </div>
    )
}