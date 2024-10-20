export type itemsListTitle = "Completed" | "Todo"


export type tasksList<T> = {
    title: itemsListTitle
    items: T[]
}