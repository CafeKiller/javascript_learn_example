
export enum RpcFunc {
    enterGame ,
    listActor,
    createActor,
    enterScene,
    changeScene,
    createReplication,
    leaveReplication,
    gap = 100,
    inputFromClient,
    stateFromServer,
}

export const ProtoPathEnum: Record<RpcFunc, any> = {
    [RpcFunc.enterGame]: {
        req: "game.EnterGameReq",
        res: "game.EnterGameRes",
    },
    [RpcFunc.listActor]: {
        req: "game.ListActorReq",
        res: "game.ListActorRes",
    },
    [RpcFunc.createActor]: {
        req: "game.CreateActorReq",
        res: "game.CreateActorRes",
    },
    [RpcFunc.enterScene]: {
        req: "game.EnterSceneReq",
        res: "game.EnterSceneRes",
    },
    [RpcFunc.changeScene]: {
        req: "game.ChangeSceneReq",
        res: "game.ChangeSceneRes",
    },
    [RpcFunc.createReplication]: {
        req: "game.CreateReplicationReq",
        res: "game.CreateReplicationRes",
    },
    [RpcFunc.leaveReplication]: {
        req: "game.LeaveReplicationReq",
        res: "game.LeaveReplicationRes",
    },
    [RpcFunc.gap]: "",
    [RpcFunc.inputFromClient]: "game.InputFromClient",
    [RpcFunc.stateFromServer]: "game.StateFromServer",
}

export enum ServerIDEnum {
    // 核心服务
    Game,
    Gateway,
    // 副本管理服务
    ReplicationManager,
    // 场景服务
    Scene1 = 101,
    Scene2,
    // 副本实例服务
    ReplicationInstance
}

export enum ReplicationEnum {
    Replication1 = 1
}

export enum ServerPort {
    AuthHttp = 3003,
    AuthRpc = 3004,
    Gateway = 4000,
    Game = 5000
}