//Sat Oct 17 2026 07:37:57 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
!(typeof $task !== "undefined" && typeof $task.fetch === "function" || typeof $httpClient !== "undefined" || typeof $rocket !== "undefined") && $done({});
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"],
  obj = JSON.parse($response.body);
obj.Attention = "恭喜你抓到元数据！由墨鱼分享，请勿售卖或分享他人！";
var ddgksf2013 = {
    "is_sandbox": false,
    "ownership_type": "PURCHASED",
    "billing_issues_detected_at": null,
    "period_type": "normal",
    "expires_date": "2099-12-18T01:04:17Z",
    "grace_period_expires_date": null,
    "unsubscribe_detected_at": null,
    "original_purchase_date": "2022-09-08T01:04:18Z",
    "purchase_date": "2022-09-08T01:04:17Z",
    "store": "app_store"
  },
  ddgksf2021 = {
    "grace_period_expires_date": null,
    "purchase_date": "2022-09-08T01:04:17Z",
    "product_identifier": "com.ddgksf2013.premium.yearly",
    "expires_date": "2099-12-18T01:04:17Z"
  };
const match = Object.keys(mapping).find(_0x1082b4 => ua.includes(_0x1082b4));
if (match) {
  const [key, product_id] = mapping[match];
  product_id ? (ddgksf2021.product_identifier = product_id, obj.subscriber.subscriptions[product_id] = ddgksf2013) : obj.subscriber.subscriptions["com.ddgksf2013.premium.yearly"] = ddgksf2013;
  obj.subscriber.entitlements = {};
  if (key.includes("&")) {
    let parts = key.split("&");
    parts.forEach(_0x5acbc0 => {
      obj.subscriber.entitlements[_0x5acbc0] = ddgksf2021;
    });
  } else obj.subscriber.entitlements[key] = ddgksf2021;
} else obj.subscriber.subscriptions["com.ddgksf2013.premium.yearly"] = ddgksf2013, obj.subscriber.entitlements.pro = ddgksf2021;
console.log("操作成功🎉🎉🎉\nCuttlefishの自留地: https://t.me/ddgksf2021");
$done({
  "body": JSON.stringify(obj)
});