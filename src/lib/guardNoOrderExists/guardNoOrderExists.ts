type Context = {
  orderExists: boolean | null;
}

export const guardNoOrderExists = (route: any, context: Context) : any | undefined => {
  return context.orderExists === false ? route : undefined;
};
