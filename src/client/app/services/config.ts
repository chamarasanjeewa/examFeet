//HTTP Requests
export let HOST_URL: string = 'http://52.77.81.10:9000/api/';

//One month i.e. 30*24*60*60*1000 (days*hours*minutes*seconds*milliseconds) with 5 mins buffer time
export let REFRESH_TOKEN_EXPIRY: number = 25917e5;
//One hour i.e. 60*60*1000 (minutes*seconds*milliseconds) -> 3600000 with 5 mins buffer time 
export let DEFAULT_AUTH_TOKEN_EXPIRY: number = 33e5;
//Five minutes i.e. 5*60*1000 (minutes*seconds*milliseconds) -> 3000000
export let DEFAULT_BUFFER_TIME: number = 3e5;
export let PAGE_SIZE_LIST_PENDING_ORDERS: number = 10;
export let PAGE_SIZE_LIST_ARCHIVED_ORDERS: number = 10;
export let PAGE_SIZE_LIST_PRODUCTS: number = 10;
export let ONE_PENDING_ORDER: number = 1;
export let PAGE_SIZE_LIST_CATALOG: number = 10;
export let REQUEST_TIME_OUT_TIME: number = 30000;
export let ORDER_ADDRESS_TYPE_DP: string = 'DP';
export let ORDER_ADDRESS_TYPE_BY: string = 'BY';
export let PART_DELIVERY_YES: string = '1';
export let RADIAL_CHART_PREFIX: string = 'chart';

//Error Messages
export let BAD_REQUEST: number = 400;
export let REQUEST_SUCCESSFUL: number = 400; //TODO: To be confirmed.
export let ERROR_UNAUTHORIZED: number = 401;
export let ERROR_FORBIDDEN: number = 403;
export let NOT_FOUND: number = 404;
export let REQUEST_TIMEOUT: number = 408;
export let SERVER_ERROR: number = 500;

//Enum values
export enum ORDER_STATUS {
    undistributed = -1,
    untreated = 0,
    received = 1,
    confirmed = 2,
    rejected = 3
};

export enum ORDER_RESPONSE_STATUS {
    received = 12,
    confirmedWithChange = 4,
    confirmed = 29,
    rejected = 27
};

export enum PRODUCT_STATUS {
    active = 0,
    expiring = 1,
    expired = 2
};