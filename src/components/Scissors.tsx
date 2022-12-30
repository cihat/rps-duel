import { getRandomColor } from '../utils';
import { SCREEN } from '../constants';

export class Scissors {
  xPosition = 25
  yPosition = 25
  velo: number = SCREEN.VELOCITY;
  corner: number = SCREEN.CORNER;
  rad: number = SCREEN.RAD;

  moveX = Math.cos(Math.PI / 180 * this.corner) * this.velo;
  moveY = Math.sin(Math.PI / 180 * this.corner) * this.velo;

  constructor(xPosition: number, yPosition: number) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
  }

  draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, SCREEN.CENTER_X.get(), SCREEN.CENTER_Y.get());

    if (this.xPosition > SCREEN.WIDTH - this.rad || this.xPosition < this.rad) this.moveX = -this.moveX;
    if (this.yPosition > SCREEN.HEIGHT - this.rad || this.yPosition < this.rad) this.moveY = -this.moveY;

    this.xPosition += this.moveX;
    this.yPosition += this.moveY;

    ctx.beginPath();
    ctx.fillStyle = getRandomColor() as string
    ctx.arc(this.xPosition, this.yPosition, this.rad, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
  }
}