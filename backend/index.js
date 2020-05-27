const request = require('request-promise')

// Verifying Access Token and Channel ID
const json = await request.get({
  url: `https://api.line.me/oauth2/v2.1/verify?access_token=${alyuvPpmSnb+N1oZkmXSmyDbQMgGUYkKVCC8F7mJTxCk+fN/A53T/2O5Jd5r3ocbXn7/bvTx+0IGoCTYMzecGXGMLuTGoy1Qf2ZFr0RclVJuOZU2O7ik2lBdM79EqnhOE/8GeSV9qjyrfnYuIMNT1gdB04t89/1O/w1cDnyilFU=}`,
  json: true
})
if (json.client_id !== 1654167585) {
  return 401
}


// Getting User Profile by Access Token
const profile = await request.get({
  url: "https://api.line.me/v2/profile",
  headers: { Authorization: `Bearer ${alyuvPpmSnb+N1oZkmXSmyDbQMgGUYkKVCC8F7mJTxCk+fN/A53T/2O5Jd5r3ocbXn7/bvTx+0IGoCTYMzecGXGMLuTGoy1Qf2ZFr0RclVJuOZU2O7ik2lBdM79EqnhOE/8GeSV9qjyrfnYuIMNT1gdB04t89/1O/w1cDnyilFU=}` },
  json: true
})


// Revoke Access Token
await request.post({
 url: "https://api.line.me/oauth2/v2.1/revoke",
 headers: { "Content-Type": "application/x-www-form-urlencoded" },
 form: {
   access_token: `${alyuvPpmSnb+N1oZkmXSmyDbQMgGUYkKVCC8F7mJTxCk+fN/A53T/2O5Jd5r3ocbXn7/bvTx+0IGoCTYMzecGXGMLuTGoy1Qf2ZFr0RclVJuOZU2O7ik2lBdM79EqnhOE/8GeSV9qjyrfnYuIMNT1gdB04t89/1O/w1cDnyilFU=}`,
   client_id: 1654167585,
   client_secret: 8ae9af3f9dcb55da03c262e4dbd6c155
 }
})
