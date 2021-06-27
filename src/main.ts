import Vidar from 'vidar';

const canvas = <HTMLCanvasElement>document.getElementById("dist");
const source = <HTMLVideoElement>document.getElementById("source");

const vidar = new Vidar.Movie({ canvas: canvas });

// const layer1 = new Vidar.layer.Visual({
//   startTime: 0,
//   duration: 3
// });

const layer2 = new Vidar.layer.Video({
  // startTime: 3,
  startTime: 0,
  source: source
});

vidar.layers.push(// layer1,
                  layer2);

canvas.onclick = () => {
  vidar.play();
}

console.log("HIGEhoge!");
