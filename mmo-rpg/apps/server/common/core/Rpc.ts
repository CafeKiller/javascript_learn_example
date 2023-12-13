import {NetConnectOpts, Socket} from "net";
import {Logger} from "./Logger";
import {EventEmitter} from "events";
import {Pipe} from "./Pipe";


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
    private socket:Socket
    // @ts-ignore
    private calling: Map<number, (value:Pick<IRpcRes, "data" | "error">) => void >= new Map()
    private pipe = new Pipe()
    private timeout: number = 5000
    private heartbeatTimer: any

    // get id() {
    //     return this.options.id
    // }
    // set id(id:number) {
    //     this.options.id = id
    // }

    static async Create(options: IRpcClientOptions) {
        const client = new RpcClient(options)
        await client.init()
        return client
    }

    private init() {
        return new Promise<void>(async (resolve, reject)=> {
            const options = this.options as any
        })
    }

}
