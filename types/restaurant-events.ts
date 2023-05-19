//Create enum for events in restaurant
export enum RestaurantEventName {
    TableCountUpdate = 'tableCountUpdate',
    Open = 'open',
    Close = 'close',
}

export type RestaurantEvent = (eventName: RestaurantEventName) => { boolean; }
export type RestaurantTableCountChangeEvent = (eventName: RestaurantEventName.TableCountUpdate, incDec: number) => {
     boolean;
}
