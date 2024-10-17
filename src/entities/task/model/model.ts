export type taskId = number
export type userId = number
export type taskName = string
export type taskStatus = "in work" | "Completed"


export type taskStructure = {
    id: taskId,
    name: taskName,
    status: taskStatus,
}

// { JSON placeholder api: TODO`s
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   },