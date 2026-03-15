# SwitchBotAPI-deno

[SwitchBotAPI](https://github.com/OpenWonderLabs/SwitchBotAPI)をDenoで実装したライブラリです。SwitchBotデバイスの操作、デバイスの一覧取得、電源のオン/オフができます。

## 必要環境
- Deno

## 使い方

1. `setting.json`ファイルを作成し、SwitchBotのAPI `token`と`secret`を設定します。

```json
{
  "token": "xxx...",
  "secret": "xxxxxx..."
}
```

2. デバイスの一覧を取得するには`devices.js`を実行します。

```javascript
import { SwitchBotAPI } from "https://code4fukui.github.io/SwitchBotAPI-deno/SwitchBotAPI.js";

const setting = JSON.parse(await Deno.readTextFile("setting.json"));
const api = new SwitchBotAPI(setting);
console.log(await api.getDevices());
```

3. デバイスの電源をオン/オフするには`plug.js`を実行します。

```
deno run -A plug.js [deviceId] [on/off]
```

## ライセンス
MIT License