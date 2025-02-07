import * as JSCrypto from "node-jsencrypt";
import {PrivateKey} from "../../common/common/secret";
import {Request, Response, NextFunction} from "express";
import {createRes} from "./utils";
import {CodeEnum} from "./enum";

const crypt = new JSCrypto()
crypt.setKey(PrivateKey)

/**
 * 中间件
 * 解析与校验用户名和密码
 * */
export const verifyAndParse = (req: Request, res: Response, next: NextFunction) => {

    let { account, password } = req.body
    if (!account || !password) {
        res.json(createRes(CodeEnum.ParamsError))
        return
    }

    // 使用秘钥解锁用户名和密码
    account = crypt.decrypt(account)
    password = crypt.destroy(password)

    req.body = {
        account,
        password
    }

    next()
}