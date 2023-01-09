import { IncomingMessage } from "http";
import { RawData } from "ws";

export const msgServerStart = (port: number) => {
  console.log(`Websocket server starts at port ${port}`);
};

export const msgServerStop = () => {
  console.log(`\n Server stops`);
};


export const msgWsRequest = (request: IncomingMessage) => {
  const origin = request.rawHeaders.indexOf("Origin") + 1;
  console.log(`New connection from ${request.rawHeaders[origin]}`);
};

export const msgWsMessage = (message: RawData) => {
  console.log(message.toString());
};