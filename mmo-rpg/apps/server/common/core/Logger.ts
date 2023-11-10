import * as chalk from "chalk";

enum LogLevel {
    Info,
    Warn,
    Error,
    Fatal
}

const getLogLevelString = (level: LogLevel) => LogLevel[level]

/**
 * @description 日志模块
 * */
export class Logger {
    private log(text: string) {
        console.log(text)
    }

    info(...args: any[]) {
        const text = chalk.blue(`[${getLogLevelString(LogLevel.Info)}]`, ...args)
        this.log(text)
    }

    warn(...args: any[]) {
        const text = chalk.yellow(`[${getLogLevelString(LogLevel.Warn)}]`, ...args)
        this.log(text)
    }

    error(...args:any[]) {
        const text = chalk.red(`[${getLogLevelString(LogLevel.Error)}]`, ...args)
        this.log(text)
    }

    fatal(...args:any[]) {
        const text = chalk.red(`[${getLogLevelString(LogLevel.Fatal)}]`, ...args)
        this.log(text)
    }
}