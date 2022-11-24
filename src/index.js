const sdk = require("matrix-bot-sdk");
const MatrixClient = sdk.MatrixClient;
const SimpleFsStorageProvider = sdk.SimpleFsStorageProvider;
const AutojoinRoomsMixin = sdk.AutojoinRoomsMixin;

const homeserverUrl = "https://matrix.lgns.me"; // make sure to update this with your url
const accessToken = "syt_ZXVyZWth_oezwKbLzfcNvvwwzMRJh_3NGlDM"
// storage provider config
const storage = new SimpleFsStorageProvider("bot.json");

//create the client based on predefined variables
const client = new MatrixClient(homeserverUrl, accessToken, storage);
// Auto accept to join any room
AutojoinRoomsMixin.setupOnClient(client);
client.on("room.message", handleCommand);
client.start().then(() => console.log("Client started!"));

async function handleCommand(roomId, any) {
    if (! event["content"]) return;
    const sender = event["sender"];
    const body = event["content"]["body"];
    console.log(`${roomId}: ${sender} says '${body}`);

    if (body.startsWith("!echo")) {
        const replyText = body.substring("!echo".length).trim();
        client.sendMessage(roomId, {
            "msgtype": "m.notice",
            "body": replyText,
        });
    }
};

