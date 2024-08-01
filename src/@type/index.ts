import { ReactNode } from "react";

export type ReactNodeT = {
  children?: ReactNode
};

export type HeroCarouselSlideT = {
  id: number;
  title: string;
  buttonText: string;
  subtitle: string;
  description: string;
  flower_1: string;
  flower_2: string;
}