import { homePageDataState } from "@pages/home-page"
import { Dispatch, ReactNode, SetStateAction } from "react"

type createTaskFeature = {
    inputLink: String,
    tasksListLink: Dispatch<SetStateAction<homePageDataState>>
}