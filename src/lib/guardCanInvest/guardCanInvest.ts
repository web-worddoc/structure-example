type Context = {
  canInvest: boolean | null;
}

export const guardCanInvest = (route: any, context: Context): any | undefined => {
  return context.canInvest === false || context.canInvest === null ? undefined : route;
};
