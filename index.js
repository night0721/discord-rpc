const { Client } = require("discord-rpc");
const rpc = new Client({
  transport: "ipc",
});

rpc.on("ready", () => {
  rpc.setActivity({
    details: "🔥Working on cath.exe",
    state: "Subscribe to me below!",
    startTimestamp: new Date(),
    largeImageKey: "night",
    largeImageText: "Night",
    smallImageKey: "kaly",
    smallImageText: "cath.exe",
    buttons: [
      { label: "💭Website💭", url: "https://cath.gq/" },
      { label: "🌌YouTube🌌", url: "https://youtube.com/c/Kirito01" },
    ],
  });

  console.log("RPC is ready now!");
});

rpc.login({
  clientId: "848132314566885406",
});
