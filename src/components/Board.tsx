import React, { useEffect, useState } from 'react';
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
  const [velo, setVelo] = useState(SCREEN.VELOCITY);
  const [corner, setCorner] = useState(SCREEN.CORNER);
  const [rad, setRad] = useState(SCREEN.RAD);

  Scissors.setVelo(velo)
  Scissors.setCorner(corner)
  Scissors.setRad(rad)


  useEffect(() => {
    canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    ctx = canvas?.getContext('2d') as CanvasRenderingContext2D;
    let scissors = [] as Scissors[];

    if (ctx) {
      ctx.fillStyle = 'blue';
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
    <div className={styles.board}>
      <div className={styles.controller_wrapper}>
        <div className={styles.controller}>
          <input className='input' type="number" placeholder='velocity' onChange={({ target }) => setVelo(Number(target.value))} />
          <input className='input' type="number" placeholder='corner' onChange={({ target }) => setCorner(Number(target.value))} />
          <input className='input' type="number" placeholder='rad' onChange={({ target }) => setRad(Number(target.value))} />
        </div>
      </div>
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