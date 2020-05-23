type Route = {
    path: string;
    component: React.ReactNode;
    routes?: Route[];
    guards?: Function[];
    exact?: boolean;
    string?: boolean;
    sensitive?: boolean;
}

export const applyGuards = (routes: Route[], context: any) => {
    return routes
        .map(route => route.guards ?
            route.guards.reduce((currentRoute, guard) => {
                return guard(currentRoute, context);
            }, route) : route
      )
      .filter(Boolean);
  };
