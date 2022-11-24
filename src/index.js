const sdk = require("matrix-bot-sdk");
const MatrixClient = sdk.MatrixClient;
const SimpleFsStorageProvider = sdk.SimpleFsStorageProvider;
const AutojoinRoomsMixin = sdk.AutojoinRoomsMixin;

const homeserverUrl = "https://matrix.org"; // make sure to update this with your url
const accessToken = "YourSecretAccessToken"
