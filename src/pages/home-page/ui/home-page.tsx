import { Header } from "@widgets/header"
import { Main } from "@widgets/main"
import { Input } from "@shared/ui/input-field"
import { ItemsList } from "@widgets/items-list"
import { UsableTask } from "@widgets/usable-task"
import { getTodos, taskId } from "@entities/task"
import { CreateTask } from "@features/create-task"
import { InputField } from "@widgets/input-field"
import classes from "./home-page.module.scss"
import { useEffect, useState } from "react"
import { homePageDataState } from "../model/model"

export function Homepage() {
    const [data, setData] = useState<homePageDataState>({
        todo: [],
        completed: [],
    })

    useEffect(() => {
        getTodos(2).then((todos) => {
            // Setting last id value from last element of requested array from API
            setCurrentId(todos[todos.length - 1].taskId)

            setData((prev) => ({
                ...prev,
                todo: todos
                    .filter((el) => el.status === "in work")
                    .map((el) => (
                        <UsableTask
                            key={el.taskId}
                            task={el}
                            tasksListLink={setData}
                        />
                    )),
                completed: todos
                    .filter((el) => el.status === "Completed")
                    .map((el) => (
                        <UsableTask
                            key={el.taskId}
                            task={el}
                            tasksListLink={setData}
                        />
                    )),
            }))
        })
    }, [])

    const [currentId, setCurrentId] = useState<taskId>(1)

    return (
        <div className={classes.homepage}>
            <div className={classes.background}></div>
            <Header />
            <Main>
                <InputField currId={currentId} setCurrId={setCurrentId} setGlobalState={setData}/>
                <ItemsList title="Todo">{data.todo}</ItemsList>
                <ItemsList title="Todo">{data.completed}</ItemsList>
            </Main>
            <footer className="footer"></footer>
        </div>
    )
}