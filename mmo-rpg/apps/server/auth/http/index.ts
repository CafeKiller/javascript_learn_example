import * as express from "express";
import * as cors from "cors";
import {createDBConnection} from "../../common/db";
import {Logger} from "../../common/core/Logger";
import * as bodyParser from "body-parser";

export const httpStart = async () => {

    const connection = createDBConnection()

    const logger = new Logger()

    const app  = express()

    app.use(cors())
    app.use(bodyParser.json())

    // app.post("/register",)

}