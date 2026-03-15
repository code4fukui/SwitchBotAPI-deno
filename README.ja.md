# SwitchBotAPI-deno

[SwitchBotAPI](https://github.com/OpenWonderLabs/SwitchBotAPI)をDenoで実装したライブラリです。

## 機能

- SwitchBotデバイスの操作
- デバイスの一覧取得
- デバイスの電源オン/オフ

## 必要環境

- Deno

## 使い方

`setting.json`を準備します。
```json
{
  "token": "xxx...",
  "secret": "xxxxxx..."
}
```

`devices.js`を作成します。
```javascript
import { SwitchBotAPI } from "https://code4fukui.github.io/SwitchBotAPI-deno/SwitchBotAPI.js";

const setting = JSON.parse(await Deno.readTextFile("setting.json"));
const api = new SwitchBotAPI(setting);
console.log(await api.getDevices());
```

deviceIdを取得したら、`plug.js`で操作できます。
```
deno run -A plug.js [deviceId] [on/off]
```

## ライセンス

MIT License