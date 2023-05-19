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

    reserveTable() {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantEventName.TableCountUpdate, -1);
    }

    cancelTableReservation() {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantEventName.TableCountUpdate, 1);
    }

    takeTableWithoutReservation() {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantEventName.TableCountUpdate, -1);
    }

    markTableAsBroken() {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantEventName.TableCountUpdate, -1);
    }

    cleanupTable() {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantEventName.TableCountUpdate, 1);
    }
}
