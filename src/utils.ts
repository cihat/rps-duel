export const getRandomNumber = (min: number, max: number) => Math.random() * max + min;

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
  Pink = 'pink',
  Yellow = 'yellow',
  Orange = 'orange',
  Purple = 'purple',
  Black = 'black',
  White = 'white',
  Brown = 'brown',
  Gray = 'gray',
  Cyan = 'cyan',
  Magenta = 'magenta',
  Lime = 'lime',
  Teal = 'teal',
  Navy = 'navy',
  Maroon = 'maroon',
  Olive = 'olive',
  Aqua = 'aqua',
  Fuchsia = 'fuchsia',
  Silver = 'silver',
  Gold = 'gold',
  DarkRed = 'darkred',
}

export const getRandomColor = (): string =>
  Object.keys(Color)[Math.floor(Math.random() * Object.keys(Color).length)];