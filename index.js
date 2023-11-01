const { Client } = require("discord-rpc");
const rpc = new Client({
  transport: "ipc",
});

rpc.on("ready", () => {
  rpc.setActivity({
    details: "Lilase",
    state: "Subscribe to my YouTube",
    startTimestamp: new Date(),
    largeImageKey: "night",
    largeImageText: "Night",
    smallImageKey: "kaly",
    smallImageText: "cath.exe",
    buttons: [
      { label: "💭Website💭", url: "https://night0721.me/" },
      { label: "🌌YouTube🌌", url: "https://www.youtube.com/@night0721" },
    ],
  });
  console.log("RPC is ready now!");
});

rpc.login({
  clientId: "848132314566885406",
});
