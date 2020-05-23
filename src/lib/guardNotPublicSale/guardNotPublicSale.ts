type Context = {
  publicSale: boolean | null;
}

export const guardNotPublicSale = (route: any, context: Context) : any | undefined => {
  return context.publicSale === false ? route : undefined;
};
