import { RawData } from "ws";
import { msgWsMessage } from "./messages.js";
import { mouseAction } from "./mouse.js";
import { drawAction } from "./drawing.js";
import { printAction } from "./print.js";


export function actionsRouter(message: RawData) {
  const [command, ...params] = message.toString().split(" ");
  switch (command.split("_")[0]) {
    case "mouse":
      return mouseAction(command, params);
    // break;
    case "draw":
      drawAction(command, params);
      break;
    case "print":
      printAction(command, params);
      break;
    default:
      msgWsMessage(message);
      break;
  }
}