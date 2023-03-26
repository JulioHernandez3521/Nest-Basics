import {v4 as uuid} from 'uuid';
import { Car } from "src/cars/interfaces/car.interface";

export const CAR_SEED:Car[] = [
    {
        id:uuid(),
        brand:'Toyota',
        model:'Tacoma'
    },
    {
        id:uuid(),
        brand:'Nissan',
        model:'Np300'
    },
    {
        id:uuid(),
        brand:'Ford',
        model:'Ranger'
    }
]