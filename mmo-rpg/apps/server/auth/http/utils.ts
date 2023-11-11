
/* md5 加密 */
import * as crypto from "crypto";
import {CodeEnum, CodeText} from "./enum";

export const md5 = (value: string) => {
    return crypto.createHash("md5").update(value).digest("hex")
}

export const createRes = (code: CodeEnum, data?: any) => ({
    code,
    data,
    message: CodeText[code]
})