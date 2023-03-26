import { BadRequestException, Injectable, NotFoundException, Delete } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid';
import {CreateCarDto, UpdateCarDto } from './dtos';



@Injectable()
export class CarsService {

    private cars: Car[] = [];

    getAll(){
        return {data:[...this.cars], length: this.cars.length};
    }

    getById(id:string): Car {
        const car:Car = this.cars.find(car => car.id === id);

        if(!car) throw new NotFoundException(`Car with id: ${id} not found`);

        return car;
    }

    createCar(car:CreateCarDto):Car {
        const newCar: Car = {
            id:uuid(),
            ...car
        }
        this.cars.push(newCar);

        return newCar;
    }

    update(id:string, updateCar:UpdateCarDto): Car{

        let carDB:Car = this.getById(id);
        
        if(updateCar.id && updateCar.id !==id)
            throw new BadRequestException(`Car id is not valid inside Body`);
        
        this.cars = this.cars.map(car => {
            if(car.id === id){
                carDB = {
                    ...carDB,
                    ...updateCar,
                    id
                }
                return carDB;
            }
            return car;
        })
        
        return carDB;
    }
    
    delete(id:string){

        let carDB:Car = this.getById(id);

        this.cars = this.cars.filter(car => car.id !== id);

        return {carDB, length: this.cars.length}
        

    }

    fillCarsWithSeedData (cars:Car[]){
        this.cars = cars;
    }
}
