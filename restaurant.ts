import {EventEmitter} from "events";
import {RestaurantEvent, RestaurantEventName, RestaurantTableCountChangeEvent} from "./types/restaurant-events";

export class Restaurant extends EventEmitter {
//emit events from enum : RestaurantEventName
    open() {
        (this.emit as RestaurantEvent)(RestaurantEventName.Open);
    }

    close() {
        this.emit(RestaurantEventName.Close);
    }
    //Created private method to change table count
    private changeTableCount(incDec: number) {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantEventName.TableCountUpdate, incDec);
    }

    reserveTable() {
        this.changeTableCount(-1);
    }

    cancelTableReservation() {
        this.changeTableCount(1);
    }

    takeTableWithoutReservation() {
        this.changeTableCount(1);
    }

    markTableAsBroken() {
        this.changeTableCount(-1);
    }

    cleanupTable() {
        this.changeTableCount(1);
    }
}
