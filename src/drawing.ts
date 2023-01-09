import { Button, down, left, mouse, right, up } from "@nut-tree/nut-js";

enum Drawing {
  circle = "draw_circle",
  rectangle = "draw_rectangle",
  square = "draw_square",
}

export async function drawAction(command: string, params: string[]) {
  const [a, b] = params;
  switch (command) {
    case Drawing.square:
      await mouse.leftClick();
      await mouse.pressButton(Button.LEFT);
      await mouse.move(right(+a));
      await mouse.move(down(+a));
      await mouse.move(left(+a));
      await mouse.move(up(+a));
      await mouse.releaseButton(Button.LEFT);
      return Drawing.square;
    case Drawing.rectangle:
      await mouse.leftClick();
      await mouse.pressButton(Button.LEFT);
      await mouse.move(right(+a));
      await mouse.move(down(+b));
      await mouse.move(left(+a));
      await mouse.move(up(+b));
      await mouse.releaseButton(Button.LEFT);
      return Drawing.rectangle;
    case Drawing.circle:
      const currentPosition = await mouse.getPosition(); // center
      await mouse.setPosition({ x: currentPosition.x + +a, y: currentPosition.y }); // start point
      await mouse.leftClick();
      await mouse.pressButton(Button.LEFT);
      for (let point = 0; point <= 360; point += 2) {
        const rx = Math.cos(point * Math.PI / 180) * +a;
        const ry = Math.sin(point * Math.PI / 180) * +a;
        const nextPoint = {
          x: currentPosition.x + rx,
          y: currentPosition.y + ry
        };
        await mouse.setPosition(nextPoint);
      }
      await mouse.releaseButton(Button.LEFT);
      return Drawing.circle;
  }
}