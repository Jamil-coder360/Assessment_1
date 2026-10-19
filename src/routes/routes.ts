import { Router } from "express";
import userRouter from "../modules/user.route";


const router:Router = Router()

const moduleroute=[{
    path:"/user",
    route: userRouter
}]

export default router