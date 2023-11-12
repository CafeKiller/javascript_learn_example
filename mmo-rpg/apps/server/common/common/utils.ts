import {ProtoPathEnum, RpcFunc} from "./enum";

/**
 * 根据消息类型获取生成coder需要的path
 * */
export const getProtoPathByRpcFunc = (
    name: RpcFunc,
    type: "req" | "res"
) => {
    if (name < RpcFunc.gap) {
        return ProtoPathEnum[name][type]
    } else {
        return ProtoPathEnum[name]
    }
}

export const deepClone = (obj: any) => {
    if (typeof obj !== "object" || obj === null) {
        return obj
    }

    const res: Record<string, any> = Array.isArray(obj) ? [] : {}
    for ( const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {

        }
    }

    return res
}