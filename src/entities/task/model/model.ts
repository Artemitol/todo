import { ReactNode } from "react"

export type taskId = number
export type userId = number
export type taskName = string
export type taskStatus = "in work" | "Completed"


export type taskStructure = {
    taskId: taskId
    name: taskName
    status: taskStatus
    buttons?: ReactNode
}