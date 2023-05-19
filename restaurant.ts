import {EventEmitter} from "events";

export class Restaurant extends EventEmitter {

    open() {
        this.emit('open');
    }

    close() {
        this.emit('close');
    }

    reserveTable() {
        this.emit('tableCountUpdate', -1);
    }

    cancelTableReservation() {
        this.emit('tableCountUpdate', 1);
    }

    takeTableWithoutReservation() {
        this.emit('tableCountUpdate', -1);
    }

    markTableAsBroken() {
        this.emit('tableCountUpdate', -1);
    }

    cleanupTable() {
        this.emit('tableCountUpdate', 1);
    }
}
