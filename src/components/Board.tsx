import React, { useEffect } from 'react';
import { SCREEN } from '../constants';
import styles from './Board.module.css';
// import { Player } from './Rock';
import { Scissors } from './Scissors';
import { getRandomNumber } from '../utils';

const MAX_ENEMY_COUNT = 10;

export default function Board(props: Props) {
  const { userName, setScore, setScreen } = props;
  let ctx: CanvasRenderingContext2D | null;
  let canvas: HTMLCanvasElement;
  let lastEnemySpawnAt = Date.now();

  // const canvasRef = React.useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    ctx = canvas?.getContext('2d');
    let enemies = [] as Scissors[];

    if (ctx) {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
    }

    const random = getRandomNumber(0, 200);
    const random2 = getRandomNumber(0, 200);
    while (enemies.length < MAX_ENEMY_COUNT ) {
      enemies.push(new Scissors(
        Math.random() < 0.5 ? getRandomNumber(-random, SCREEN.WIDTH / 2 - random)
          : getRandomNumber(SCREEN.WIDTH + random, SCREEN.WIDTH / 2 + random),
        Math.random() < 0.5 ? getRandomNumber(-random2, SCREEN.HEIGHT / 2 - random2)
          : getRandomNumber(SCREEN.WIDTH + random2, SCREEN.HEIGHT / 2 + random2),
      ));
      lastEnemySpawnAt = Date.now();
    }

    console.log('enemies', enemies)

    setInterval(() => {
      ctx?.clearRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);

      // enemies = enemies.filter((enemy) => !enemy.dead);
      enemies.forEach((enemy) => {
        // enemy.update(player, bullets);
        enemy.draw(ctx);
      });


    }, 10);
  })

  return (
    <div className="board">
      <canvas id='myCanvas' height={SCREEN.HEIGHT} width={SCREEN.WIDTH} className={styles.board}>
        Your browser does not support the HTML5 canvas tag.
      </canvas>
    </div>
  )
}

type Props = {
  userName: string;
  setScore: (score: number) => void;
  setScreen: (screen: number) => void;
}