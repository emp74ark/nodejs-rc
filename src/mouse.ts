import { down, left, mouse, right, up } from "@nut-tree/nut-js";

enum Mouse {
  left = "mouse_left",
  up = "mouse_up",
  right = "mouse_right",
  down = "mouse_down",
  position = "mouse_position",
}

export async function mouseAction(command: string, params: string[]) {
  const offset = Number(params[0]);
  switch (command) {
    case Mouse.up:
      await mouse.move(up(offset));
      return Mouse.up;
    case Mouse.down:
      await mouse.move(down(offset));
      return Mouse.down;
    case Mouse.left:
      await mouse.move(left(offset));
      return Mouse.left;
    case Mouse.right:
      await mouse.move(right(offset));
      return Mouse.right;
    case Mouse.position:
      const positions = await mouse.getPosition();
      return `${Mouse.position} ${positions.x},${positions.y}`;
  }
}


