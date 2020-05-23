type Context = {
  orderExists: boolean | null;
}

export const guardOrderExists = (route: any, context: Context) : any | undefined => {
  return context.orderExists ? route : undefined;
};
