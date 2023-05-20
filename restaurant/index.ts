import {Restaurant} from "./restaurant";
import {RestaurantEventName, RestaurantTableCountChangeCallback} from "./types/restaurant-events";

const megaRestaurant = new Restaurant();
let tablesCount: number = 25;

megaRestaurant
    .on(RestaurantEventName.Open, () => console.log('Restaurant is open'))
    .on(RestaurantEventName.Close, () => console.log('Restaurant is closed'))
    .on(RestaurantEventName.TableCountUpdate, (change => { //as RestaurantTableCountChangeCallback or change: number
        tablesCount += change;
        console.log(`Available ${tablesCount}.`);
    }) as RestaurantTableCountChangeCallback);

megaRestaurant.open(); // "Otwarto restaurację."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 24."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.cancelTableReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 21."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 20."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 19."

megaRestaurant.cleanupTable(); // "Dostepnych stolików: 20."

megaRestaurant.close(); // "Zamknięto restaurację."
