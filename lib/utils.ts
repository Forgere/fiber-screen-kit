import React from 'react';
//@ts-expect-error - gsap is not typed
import gsap from 'gsap';
import { Vector3 } from 'three';

export type PropsWithOptionalChildren<P = unknown> = P & { children?: React.ReactNode };

export type TAction = {
  [key: string]: () => void
}

export type TAnimate = {
  property: 'position' | 'rotation' | 'scale'
  from: Vector3
  to: Vector3
  start?: number
  duration?: number,
  ease?: gsap.EaseFunction,
  delay?: number,
  onComplete?: (action: TAction) => void,
  onReverseComplete?: () => void,
}
