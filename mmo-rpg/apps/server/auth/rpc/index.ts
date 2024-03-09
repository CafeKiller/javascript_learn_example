import * as grpc from "@grpc/grpc-js";
import {Logger} from "../../common/core/Logger";

const logger = new Logger()
export const rpcStart = () => {
    const server = new grpc.Server()

    // server.addService()
}