# SwitchBotAPI-deno

[SwitchBotAPI](https://github.com/OpenWonderLabs/SwitchBotAPI) for Deno

## Usage

prepare a setting.json (app → profile → settings → tap app version 10 times! to get token & secret)
```json
{
  "token": "xxx...",
  "secret": "xxxxxx...",
}
```

write and save as devices.js
```JavaScript
import { SwitchBotAPI } from "https://code4fukui.github.io/SwitchBotAPI.js";

const setting = JSON.parse(await Deno.readTextFile("setting.json"));
const api = new SwitchBotAPI(setting);
console.log(await api.getDevices());
```

run to get deviceId
```bash
deno run -A devices.js
```

to turn on
```JavaScript
const api = new SwitchBotAPI(setting);
await api.turnOn(deviceId);
```
