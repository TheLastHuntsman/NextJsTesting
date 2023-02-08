"use client";

import React, { useState, useRef, useEffect, FC } from "react";

const Page: React.FC<{}> = () => {
  const canvasHeight = 500;
  const canvasWidth = 500;
  const canvasGridSize = 20;

  const [snake, setSnake] = useState<{
    head: { x: number; y: number };
    tail: Array<any>;
  }>({ head: { x: 15, y: 15 }, tail: [] });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  const fillRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number
  ) => {
    ctx.fillRect(x, y, w, h);
  };

  const strokeRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number
  ) => {
    ctx.strokeRect(x, y, w, h);
  };

  const drawSnake = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number
  ) => {
    ctx.strokeRect(x, y, w, h);
    ctx.fillRect(x, y, w, h);
  };

  const clearSnake = () => {};

  const clearCanvas = (ctx: CanvasRenderingContext2D) => {
    ctx?.clearRect(0, 0, canvasHeight, canvasWidth);
  };

  useEffect(() => {
    canvasCtxRef.current = canvasRef.current!.getContext("2d");
    let ctx = canvasCtxRef.current!; // Assigning to a temp variable

    drawSnake(ctx!, snake.head.x, snake.head.y, canvasGridSize, canvasGridSize);

    const interval = setInterval(() => {
      setSnake({ head: { x: snake.head.x + 15, y: snake.head.y }, tail: [] });

      //fillRect(ctx!,tempSnake.x, tempSnake.y, canvasGridSize, canvasGridSize)

      //useeffect make snake head add interval for blink
      //make snake
      //add button direction effect
    }, 250);
  }, [snake]);

  return (
    <>
      <div className="flex flex-col w-screen h-screen justify-center items-center border border-black">
        <div className="border border-black">
          <canvas ref={canvasRef} width={500} height={500} className="" />
          <div className="bg-slate-700" style={{ width: 500, height: 100 }}>
            <div>content</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
