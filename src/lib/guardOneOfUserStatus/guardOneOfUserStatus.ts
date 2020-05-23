import {
  USER_STATUS_NOT_AUTH,
  USER_STATUS_NO_PASSWORD,
  USER_STATUS_NO_ETHADDRESS,
  USER_STATUS_WAIT_MINT,
  USER_STATUS_WAIT_REFILL,
  USER_STATUS_TOKENS_DELIVERED,
} from 'core';;

type USER_STATUS_NOT_AUTH = string;
type USER_STATUS_NO_PASSWORD = string;
type USER_STATUS_NO_ETHADDRESS = string;
type USER_STATUS_WAIT_MINT = string;
type USER_STATUS_WAIT_REFILL = string;
type USER_STATUS_TOKENS_DELIVERED = string;

type Status = 
  USER_STATUS_NOT_AUTH |
  USER_STATUS_NO_PASSWORD |
  USER_STATUS_NO_ETHADDRESS |
  USER_STATUS_WAIT_MINT |
  USER_STATUS_WAIT_REFILL |
  USER_STATUS_TOKENS_DELIVERED

type Context = {
  userStatus: Status
}

export const guardOneOfUserStatus = (allowedStatuses: Status[]) => (route: any, context: Context): any | undefined => {
  return allowedStatuses.includes(context.userStatus) ? route : undefined;
};
