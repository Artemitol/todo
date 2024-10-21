export type itemsListTitle = "Completed" | "Todo"


export type itemsList<T> = {
    title: itemsListTitle
    items: T[]
}