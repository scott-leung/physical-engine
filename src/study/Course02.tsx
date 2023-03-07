import React, { useEffect, useLayoutEffect, useRef } from 'react';
import {
  Engine,
  Render,
  Runner,
  Composite,
  Bodies,
  World,
  Body,
} from 'matter-js';
import { ResetLayout } from './ResetLayout';
import { getUniqueID } from './util';

const elementId = `course-02-sample-${getUniqueID()}`;

export function EngineSample(props: any) {
  const scene = useRef<HTMLDivElement>(null);
  const engine = useRef<Engine>(null);

  const start = () => {
    // create runner
    const runner = Runner.create();

    // const engine = Engine.create();
    engine.current = Engine.create();
    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: 400,
        height: 400,
        wireframes: false,
      },
    });

    // create two boxes and a ground
    const boxA = Bodies.rectangle(200, 100, 80, 80);
    const boxB = Bodies.rectangle(250, 25, 80, 80);
    const ground = Bodies.rectangle(200, 390, 410, 60, { isStatic: true });

    boxA.render.fillStyle = '#FF1122';
    boxA.render.opacity = 1;
    const boxComposite = Composite.create();
    Composite.add(boxComposite, [boxA, boxB]);

    // add all of the bodies to the world
    Composite.add(engine.current.world, [boxComposite, ground]);
    // run the renderer
    Render.run(render);

    // run the engine
    Runner.run(runner, engine.current);

    // stop the engine
    return () => {
      Engine.clear(engine.current);
      Render.stop(render);
      Runner.stop(runner);
      render.canvas.remove();
    };
  };

  return (
    <ResetLayout start={start}>
      <div ref={scene} />
    </ResetLayout>
  );
}

function EngineSample2(props: any) {
  return (
    <ResetLayout>
      <div>sdfsdf</div>
    </ResetLayout>
  );
}

export const Course02 = {
  EngineSample,
  EngineSample2,
};
