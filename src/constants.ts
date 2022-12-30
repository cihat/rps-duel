export type Screen = {
  LOBBY: number;
  PLAYING: number;
  GAME_OVER: number;
  WIDTH: number;
  HEIGHT: number;
  VELOCITY: number;
  CORNER: number;
  RAD: number;
  CENTER_X: {
    get(): number;
  }
  CENTER_Y: {
    get(): number;
  }
}

export const SCREEN: Screen = {
  LOBBY: 0,
  PLAYING: 1,
  GAME_OVER: 2,
  WIDTH: 400,
  HEIGHT: 300,
  VELOCITY: 5,
  CORNER: 50,
  RAD: 20,
  CENTER_X: {
    get() {
      return SCREEN.WIDTH / SCREEN.CORNER;
    }
  },
  CENTER_Y: {
    get() {
      return SCREEN.HEIGHT / SCREEN.CORNER;
    }
  }
};
