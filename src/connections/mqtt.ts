import { IClientOptions } from "mqtt";
const mqtt = require("mqtt");
const dotenv = require("dotenv");
dotenv.config();

export function connectionBroker() {
  const options: IClientOptions = {
    host: process.env.MQTT_BROKER_URL,
    port: 8883,
    protocol: "mqtts",
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD,
  };
  const client = mqtt.connect(options);

  client.on("connect", () => {
    console.log("Connectado ao broker");
  });

  return client;
}
