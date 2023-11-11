import * as express from "express";
import {Request, Response} from "express";
import {v4 as uuid} from "uuid";
import * as bodyParser from "body-parser";
import * as dayjs from "dayjs";
import * as cors from "cors";

import {createDBConnection} from "../../common/db";
import {Logger} from "../../common/core/Logger";
import {verifyAndParse} from "./middleware";
import {createRes, md5} from "./utils";
import {CodeEnum} from "./enum";

export const cache: Map<string, string> = new Map<string, string>()

export const httpStart = async () => {

    const connection = createDBConnection()
    const logger = new Logger()
    const app  = express()
    app.use(cors())
    app.use(bodyParser.json())

    // 注册路由
    app.post("/register", verifyAndParse, function (req: Request, res: Response){
        const {account, password} = req.body
        connection.query(
            `insert into user(account, password, created_time) value(?, ?, ?)`,
            [account, md5(account), dayjs().format("YYYY-MM-DD HH:mm:ss")],
            (err) =>{
                if (err) {
                    if (err.errno === 1062) {
                        res.json(createRes(CodeEnum.AccountExist))
                        return
                    }
                    res.json(createRes(CodeEnum.SQLError))
                    return
                }
                res.json(createRes(CodeEnum.RegisterSuccess))
            }
        )
    })

    // 登录路由
    app.post("/login", verifyAndParse, function (req: Request, res: Response){
        const {account, password} = req.body

        connection.query(
            `select password from user where account = ?`
            [account],
            (err,result) => {
                if (err) {
                    res.json(createRes(CodeEnum.SQLError))
                    return
                }
                const  user = result[0]
                if (!user || md5(password) != user.password) {
                    res.json(createRes(CodeEnum.UsernameOrPasswordError))
                    return
                }

                const token: string = uuid()
                cache.set(token, account)

                res.json(
                    createRes(CodeEnum.LoginSuccess, {token})
                )
            }
        )
    })

    // app.listen(Server)

}