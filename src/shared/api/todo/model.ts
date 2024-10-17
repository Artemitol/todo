export type todosRequestStructure = {
    userId: number
    id: number
    title: string
    completed: boolean
}


export type reqFn = <T>() => Promise<T>