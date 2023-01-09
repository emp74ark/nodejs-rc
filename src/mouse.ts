enum Mouse {
  left = "mouse_left",
  up = "mouse_up",
  right = "mouse_right",
  down = "mouse_down",
  position = "mouse_position",
}

export function mouseAction(command: string, params: string[]) {
  console.log("command: ", command);
  console.log("params: ", params);
}