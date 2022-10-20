import { SwitchBotAPI } from "./SwitchBotAPI.js";

if (Deno.args.length == 0) {
  console.log("deno run plug.js [deviceId] [on/off]");
  console.log("to get a deviceId via device.js");
  console.log("1: on, 0: off");
  console.log("prepare a file: setting.json (token, secret)");
  Deno.exit(0);
}
const deviceId = Deno.args[0];
const on = Deno.args[1] == "1";

const setting = JSON.parse(await Deno.readTextFile("setting.json"));
const api = new SwitchBotAPI(setting);
if (on) {
  await api.turnOn(deviceId);
} else {
  await api.turnOff(deviceId);
}
