export enum CodeEnum {
    LoginSuccess = 0,
    RegisterSuccess = 1,
    ParamsError = 1000,
    SQLError = 1001,
    AccountExist = 1002,
    UsernameOrPasswordError = 1003
}

export const CodeText: Record<CodeEnum, string> = {
    [CodeEnum.RegisterSuccess] : "注册成功",
    [CodeEnum.LoginSuccess] : "登录成功",
    [CodeEnum.ParamsError] : "参数异常",
    [CodeEnum.SQLError] : "数据库异常",
    [CodeEnum.AccountExist] : "账号已存在",
    [CodeEnum.UsernameOrPasswordError] : "账号或密码错误"
}