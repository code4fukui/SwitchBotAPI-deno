# SwitchBotAPI-deno

SwitchBot APIを使用してSwitchBotデバイスと連携するためのライブラリです。Denoプロジェクトで利用できるようにDenoで実装されています。

## 機能
- SwitchBot APIを使用したSwitchBotデバイスの制御
- Denoプロジェクトで利用可能なDenoによる実装

## 要件
- Denoランタイム
- APIトークンとシークレットを取得済みのSwitchBotアカウント

## 使い方

1. SwitchBot APIのトークンとシークレットを記述した `setting.json` ファイルを作成します。

```json
{
  "token": "xxx...",
  "secret": "xxxxxx..."
}
```

2. SwitchBotAPIを使用するスクリプトを作成します。

```javascript
import { SwitchBotAPI } from "https://code4fukui.github.io/SwitchBotAPI-deno/SwitchBotAPI.js";

const setting = JSON.parse(await Deno.readTextFile("setting.json"));
const api = new SwitchBotAPI(setting);
console.log(await api.getDevices());
```

3. スクリプトを実行し、SwitchBotデバイスのリストを取得します。

```bash
deno run -A devices.js
```

4. デバイスをオンまたはオフにするには、`turnOn()` または `turnOff()` メソッドを使用します。

```javascript
const api = new SwitchBotAPI(setting);
await api.turnOn(deviceId);
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
