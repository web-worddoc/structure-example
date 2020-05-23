import { USER_STATUS_NOT_AUTH, USER_STATUS_NO_PASSWORD } from 'core';


type Context = {
  isSessionActive: boolean | null;
  userStatus: string | null;
}

export const guardAuth = (route: any, { isSessionActive, userStatus }: Context): any | undefined => {
  if (isSessionActive === null || userStatus === null) {
    return undefined;
  }
  return isSessionActive === true && userStatus !== USER_STATUS_NOT_AUTH && userStatus !== USER_STATUS_NO_PASSWORD ? route : undefined;
};
