import { FileType, mouse, Region, screen } from "@nut-tree/nut-js";
import { readFile } from "node:fs/promises";

enum Print {
  screen = "prnt_scrn",
}

export async function printAction() {
  const { x, y } = await mouse.getPosition();
  const region = new Region(x, y, 200, 200);
  console.log(region);
  const type = FileType.PNG;
  const timestamp = Date.now();
  const screenshot = await screen.captureRegion(`capture-${timestamp}.png`, region, type, "./screenshots");
  const data = await readFile(screenshot, "base64");
  return `${Print.screen} ${data}`;
}