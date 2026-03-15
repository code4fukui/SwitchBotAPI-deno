# SwitchBotAPI-deno

[SwitchBotAPI](https://github.com/OpenWonderLabs/SwitchBotAPI) for Deno

## Features
- Control SwitchBot devices using the SwitchBotAPI
- Implemented in Deno for use in Deno projects

## Requirements
- Deno runtime
- SwitchBot account with API token and secret

## Usage

1. Create a `setting.json` file with your SwitchBot API token and secret:

```json
{
  "token": "xxx...",
  "secret": "xxxxxx..."
}
```

2. Write a script to use the SwitchBotAPI:

```javascript
import { SwitchBotAPI } from "https://code4fukui.github.io/SwitchBotAPI-deno/SwitchBotAPI.js";

const setting = JSON.parse(await Deno.readTextFile("setting.json"));
const api = new SwitchBotAPI(setting);
console.log(await api.getDevices());
```

3. Run the script to get the list of your SwitchBot devices:

```bash
deno run -A devices.js
```

4. To turn a device on or off, use the `turnOn()` or `turnOff()` methods:

```javascript
const api = new SwitchBotAPI(setting);
await api.turnOn(deviceId);
```

## License
MIT License