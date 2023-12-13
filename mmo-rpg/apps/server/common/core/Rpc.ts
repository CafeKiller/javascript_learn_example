import {NetConnectOpts, Socket} from "net";
import {Logger} from "./Logger";
import {EventEmitter} from "events";


let callId = 1

const getCallId = () => {
    if (callId >= 2 ** 30) {
        callId = 1
    }
    return callId++
}

enum RpcTypeEnum {
    Req,
    Res,
    Msg
}

export interface IRpcReq {
    name: string
    params: any[]
    meta: {
        id: number
        type: RpcTypeEnum.Req
    }
}
export interface IRpcRes {
    data: any
    params: any[]
    meta: {
        type: RpcTypeEnum.Res
    }
}
export interface IRpcMsg {
    name: string
    params: any[]
    meta: {
        type: RpcTypeEnum.Msg
    }
}
type IRpcClientOptions =
| {
    netOptions: NetConnectOpts
    implement: any
    logger: Logger
    id: number
}
| {
    socket: Socket
    implement: any
    logger: Logger
    id: number
}

interface IRpcServerOptions {
    port: number
    implement: any
    logger: Logger
}

// Rpc服务器
export class RpcServer extends EventEmitter {
    clients: Map<number, RpcClient> = new Map()
}

export class RpcClient extends EventEmitter {

}
