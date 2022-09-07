import { CanvasRenderingContext2D } from 'canvas';
const canvasSketch = require('canvas-sketch');

const settings = {
	dimensions: [2048, 2048],
};

interface Props {
	context: CanvasRenderingContext2D;
	width: number;
	height: number;
	time: number;
	playhead: number;
  }


const sketch = () => {
	return ({ context, width, height }: Props) => {
		context.fillStyle = 'purple';
		context.fillRect(0, 0, width, height);
	};
};

canvasSketch(sketch, settings);
