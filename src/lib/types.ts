import type { TransitionConfig, FadeParams, BlurParams, FlyParams, SlideParams, ScaleParams } from 'svelte/transition';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Rotation = '0deg' | '90deg' | '180deg' | '270deg' | '45deg' | '-45deg';
export type Color = 'default' | 'success' | 'warning' | 'error' | 'secondary';
export type TextAlignment = 'center' | 'end' | 'justify' | 'left' | 'right' | 'start' | 'inherit' | 'initial' | 'unset';
export type ParamsType = FadeParams | BlurParams | FlyParams | SlideParams | ScaleParams;
export type TransitionFunc = (node: HTMLElement, params: ParamsType) => TransitionConfig;
