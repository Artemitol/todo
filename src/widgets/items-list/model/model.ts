export type tasksListTitle = "Completed" | "Todo"


export type tasksList<T> = {
    title: tasksListTitle,
    items: T[],
    
}