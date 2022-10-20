import { SwitchBotAPI } from "./SwitchBotAPI.js";

const setting = JSON.parse(await Deno.readTextFile("setting.json"));
const api = new SwitchBotAPI(setting);
console.log(await api.getDevices());
