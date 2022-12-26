import { getRandomNumber } from '../utils';
import { SCREEN } from '../constants';

const centerX = SCREEN.WIDTH / 2;
const centerY = SCREEN.HEIGHT / 2;

export class Scissors {
  speed = 2;
  dead = false
  xPosition
  yPosition
  radius

  constructor(xPosition: number, yPosition: number) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.radius = getRandomNumber(10, 20);
  }

  isDead = () => {
    const relativeX = Math.abs(this.xPosition - centerX);
    const relativeY = Math.abs(this.yPosition - centerY);

    if (relativeX < 20 && relativeY < 20) {
      return true;
    }
  }

  update = (player, bullets) => {
    if (this.dead) return;
    const relativeX = this.xPosition - centerX;
    const relativeY = this.yPosition - centerY;
    const angle = Math.atan2(relativeY, relativeX) * 180 / Math.PI;
    const x = Math.sin((angle * Math.PI) / 180) * this.speed;
    const y = Math.cos((angle * Math.PI) / 180) * this.speed;
    this.xPosition -= y;
    this.yPosition -= x;

    if (!this.dead && this.isDead()) {
      this.dead = true;
      player.deductHealth();
    }

    // if (!this.dead) {
    //   bullets.forEach((bullet) => {
    //     if (Math.abs(bullet.xPosition - this.xPosition) < this.radius && Math.abs(bullet.yPosition - this.yPosition) < this.radius) {
    //       player.increaseScore();
    //       this.dead = true;
    //       bullet.dead = true;
    //     }
    //   });
    // }
  }


  p = {
    x: 25,
    y: 25
  };
  velo: number = 3;
  corner: number = 50;
  rad: number = 20;

  ball = {
    x: this.p.x,
    y: this.p.y
  };

  moveX = Math.cos(Math.PI / 180 * this.corner) * this.velo;
  moveY = Math.sin(Math.PI / 180 * this.corner) * this.velo;

  draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, 400, 300);

    if (this.ball.x > SCREEN.WIDTH - this.rad || this.ball.x < this.rad) this.moveX = -this.moveX;
    if (this.ball.y > SCREEN.HEIGHT - this.rad || this.ball.y < this.rad) this.moveY = -this.moveY;

    this.ball.x += this.moveX;
    this.ball.y += this.moveY;

    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.arc(this.ball.x, this.ball.y, this.rad, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
  }
}