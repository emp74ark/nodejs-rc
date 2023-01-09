enum Drawing {
  circle = "draw_circle",
  rectangle = "draw_rectangle",
  square = "draw_square",
}

export function drawAction(command: string, params: string[]) {
  console.log("command: ", command);
  console.log("params: ", params);
}