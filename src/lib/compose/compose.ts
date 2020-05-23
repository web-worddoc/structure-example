export const compose = (...decorators: Function[]) => (Component: any) => {
  return decorators.reduce((comp, dec) => dec(comp), Component)
};
