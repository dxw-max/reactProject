const express = require("express");
const db = require("./module/db2");
const bodyParser = require("body-parser");
const tools = require("./module/tools");
const app = express();
app.use(bodyParser.json());

app.post("/sendCode", async (req, res) => {
    try {
        const phoneCode = req.body.phoneCode;
        const codeInfo = await db.findOne("userCodeList", {
            phoneCode
        })
        //判断是否有值
        if (codeInfo) {
            //判断验证码是否过期
            const time = Date.now() - codeInfo.sendTime;
            if (time > 60 * 1000) {
                //过期（重新发送）
                const code = tools.getRandom(100000, 999999);
                //更新，发送的验证码和发送时间
                await db.updateOne("userCodeList", { phoneCode }, {
                    $set: {
                        code,
                        sendTime: Date.now()
                    }
                })
                //await tools.sendCode(phoneCode, code);
                //tools.json(res, 1, "发送验证码成功")
                res.json({
                    ok: 1,
                    code,
                    msg: "发送验证码成功"
                })
            } else {
                //未过期(提示)
                tools.json(res, -1, "请不要发送太频繁" + (60 - Number.parseInt(time / 1000)) + "秒以后发送")
            }
        } else {
            //发送验证码
            const code = tools.getRandom(100000, 999999);
            await db.insertOne("userCodeList", {
                code,
                phoneCode,
                sendTime: Date.now()
            })
            //await tools.sendCode(phoneCode, code);
            //tools.json(res, 1, "发送验证码成功")
            res.json({
                ok: 1,
                code,
                msg: "发送验证码成功"
            })
        }
    } catch (msg) {
        res.json({
            ok: -1,
            msg
        })
    }
});
//请求登录
app.post("/login", async (req, res) => {
    const { phoneCode, code } = req.body;
    const codeInfo = await db.findOne("userCodeList", {
        phoneCode,
        code: code / 1 //数据库存储的是Number类型的，所以要除以1转换一下类型
    })
    //有匹配
    if (codeInfo) {
        //过期,提示验证码失效
        if ((Date.now() - codeInfo.sendTime) > 30 * 1000) {
            tools.json(res, -1, "验证码失效了")
        } else {
            //不过期
            const userInfo = await db.findOne("userCodeList", {
                phoneCode
            });
            if (userInfo) {
                //如果用户存在，更新用户最后登录的时间
                await db.updateOne("userCodeList", { phoneCode }, {
                    $set: {
                        lastTime: Date.now()
                    }
                })
            } else {
                await db.insertOne("userCodeList", {
                    phoneCode,
                    regTime: Date.now(),
                    lastTime: Date.now()
                })
            }
            res.json({
                ok: 1,
                token: tools.encode({
                    phoneCode
                }),
                phoneCode,
                msg: "登录成功"
            })
        }
    } else {
        //无匹配，直接返回验证码错误
        tools.json(res, -1, "验证码错误")
    }
});
//获取poneCode
app.get("/getPhoneCode", async (req, res) => {
    const info = db.findOne("userCodeList", {
        phoneCode
    })
    if (info) {
        res.json({
            ok: 1,
            phoneCode,
            msg: "获取成功"
        })
    } else {
        tools.json(res, -1, "请登录")
    }

})
app.listen(8090, function () {
    console.log("success")
})