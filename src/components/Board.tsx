import React, { useEffect } from 'react';
import { SCREEN } from '../constants';
import styles from './Board.module.css';
// import { Player } from './Rock';
import { Scissors } from './Scissors';
import { getRandomNumber } from '../utils';

const MAX_SCISSOR_COUNT = 10;

export default function Board(props: Props) {
  // const { userName, setScore, setScreen } = props;
  let ctx: CanvasRenderingContext2D | null;
  let canvas: HTMLCanvasElement;

  useEffect(() => {
    canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    ctx = canvas?.getContext('2d') as CanvasRenderingContext2D;
    let scissors = [] as Scissors[];

    if (ctx) {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, SCREEN.WIDTH, SCREEN.HEIGHT);
    }

    while (scissors.length < MAX_SCISSOR_COUNT) {
      const scissorX = getRandomNumber(10, SCREEN.WIDTH);
      const scissorY = getRandomNumber(10, SCREEN.HEIGHT);
      scissors.push(new Scissors(scissorX, scissorY));
    }

    setInterval(() => {
      scissors.forEach((s) => {
        if (!ctx) return

        s.draw(ctx);
      });

    }, 1000 / 30);
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