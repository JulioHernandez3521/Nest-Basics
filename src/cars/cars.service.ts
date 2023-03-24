import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id:1,
            brand:'Toyota',
            model:'Tacoma'
        },
        {
            id:2,
            brand:'Nissan',
            model:'Np300'
        },
        {
            id:3,
            brand:'Ford',
            model:'Ranger'
        }
    ];

    getAll(){
        return [...this.cars];
    }

    getById(id:number) {
        const car = this.cars.find(car => car.id === id);

        if(!car) throw new NotFoundException(`Car with id: ${id} not found`);

        return car;
    }


}
