import React from 'react';
import { SCREEN } from '../constants';
import styles from './Lobby.module.css';

type Props = {
  userName: string;
  setScreen: (screen: number) => void;
  setUsername: (username: string) => void;
}

function Lobby(props: Props) {
  const { userName, setScreen, setUsername } = props;
  return (
    <div style={{ width: '200px', height: '100px' }}>
      {/* <input style={{ width: '100%' }} value={userName} onChange={(e) => setUsername(e.target.value)} /> */}
      <button
        className={styles.button}
        type="submit"
        onClick={() => setScreen(SCREEN.PLAYING)}
      >
        START!
      </button>
    </div>
  );
}

export default Lobby;