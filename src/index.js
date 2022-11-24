import { 
    MatrixClient,
    SimpleFsStorageProvider,
    AutojoinRoomsMixin,
} from "matrix-bot-sdk";

const homeserverUrl = "https://matrix.lgns.me"; // make sure to update this with your url
const accessToken = "syt_ZXVyZWth_eXvPctRtyzvLMWjWMkMV_4UowFk"
// storage provider config
const storage = new SimpleFsStorageProvider("bot.json");

//create the client based on predefined variables
const client = new MatrixClient(homeserverUrl, accessToken, storage);
// Auto accept to join any room
AutojoinRoomsMixin.setupOnClient(client);
client.start().then(() => console.log("Client started!"));

client.on("room.message", (roomId, event) => {
    console.log("eureka message detected")
    if (! event["content"]) 
    {
        console.log("eureka returned")
        return;
    }
    const sender = event["sender"];
    const body = event["content"]["body"];
    console.log(`${roomId}: ${sender} says '${body}`);

    if (body.startsWith("!eureka")) {
        const replyText = body.substring("!eureka".length).trim();
        client.sendMessage(roomId, {
            "msgtype": "m.notice",
            "body": replyText,
        });
    }
});


client.on("room.join", (roomId, event) => {
    // The client has joined `roomId`
    client.sendText(roomId, "Hello World")
});
