// https://github.com/OpenWonderLabs/SwitchBotAPI
// port node to deno by @taisukef
// can't be called from a browser because CORS is disabled (2022-10-21)

import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

export class SwitchBotAPI {
  constructor(setting) {
    this.setting = setting;
  }
  async api(path, body = null) {
    const t = Date.now();
    const nonce = Math.random();
    const data = new TextEncoder().encode(this.setting.token + t + nonce).buffer;
    
    const privateKey = await window.crypto.subtle.importKey(
      "raw",
      (new TextEncoder().encode(this.setting.secret)).buffer,
      {
        name: "HMAC",
        hash: { name: "SHA-256" },
      },
      false,
      ["sign", "verify"]
    );
    const signTerm = new Uint8Array(await window.crypto.subtle.sign(
      { name: "HMAC" },
      privateKey,
      data
    ));
    
    const sign = Base64.encode(signTerm);
    
    const sbody = JSON.stringify(body);
    
    const hostname = "api.switch-bot.com";
    const url = "https://" + hostname + path;
    const headers = {
      "Authorization": this.setting.token,
      "sign": sign,
      "nonce": nonce,
      "t": t,
    };
    const options = body ? {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json",
        "Content-Length": sbody.length,
      },
      body: sbody,
    } : {
      method: "GET",
      headers,
    };
    const res = await (await fetch(url, options)).json();
    return res;
  }
  async getDevices() {
    return await this.api("/v1.1/devices");
  }
  async turnOn(deviceId) {
    return await this.api(`/v1.1/devices/${deviceId}/commands`,
      {
        "command": "turnOn",
        "parameter": "default",
        "commandType": "command"
      }
    );
  }
  async turnOff(deviceId) {
    return await this.api(`/v1.1/devices/${deviceId}/commands`,
      {
        "command": "turnOff",
        "parameter": "default",
        "commandType": "command"
      }
    );
  }
}
