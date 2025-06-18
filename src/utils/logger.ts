import { isDevEnv } from "./env";

export const log = (...args: unknown[]) => {
  if (isDevEnv()) console.log(...args);
};

export const error = (...args: unknown[]) => {
  if (isDevEnv()) console.log(...args);
};
