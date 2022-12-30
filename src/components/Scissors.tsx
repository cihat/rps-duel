import { getRandomColor } from '../utils';
import { SCREEN } from '../constants';

export class Scissors {
  static velo: number = SCREEN.VELOCITY;
  static corner: number = SCREEN.CORNER;
  static rad: number = SCREEN.RAD;
  xPosition = 25
  yPosition = 25

  moveX = Math.cos(Math.PI / 180 * Scissors.corner) * Scissors.velo;
  moveY = Math.sin(Math.PI / 180 * Scissors.corner) * Scissors.velo;

  constructor(xPosition: number, yPosition: number) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
  }

  draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, SCREEN.CENTER_X.get(), SCREEN.CENTER_Y.get());

    if (this.xPosition > SCREEN.WIDTH - Scissors.rad || this.xPosition < Scissors.rad) this.moveX = -this.moveX;
    if (this.yPosition > SCREEN.HEIGHT - Scissors.rad || this.yPosition < Scissors.rad) this.moveY = -this.moveY;

    this.xPosition += this.moveX;
    this.yPosition += this.moveY;

    ctx.beginPath();
    ctx.fillStyle = getRandomColor() as string
    ctx.arc(this.xPosition, this.yPosition, Scissors.rad, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
  }

  static setVelo = (velo: number) => {
    this.velo = velo;
  }

  static setCorner = (corner: number) => {
    this.corner = corner;
  }

  static setRad = (rad: number) => {
    this.rad = rad;
  }

}