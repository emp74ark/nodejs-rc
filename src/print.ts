enum Print {
  screen = "prnt_scrn",
}

export function printAction(command: string, params: string[]) {
  console.log("command: ", command);
  console.log("params: ", params);
}