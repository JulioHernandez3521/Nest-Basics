import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { UpdateCarDto,CreateCarDto } from './dtos';
import { Car } from './interfaces/car.interface';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars(): (Car[] | {}) {
        return this.carsService.getAll()
    }

    @Get(':id')
    getById(
        // @Param('id', ParseIntPipe) id: number
        @Param('id', ParseUUIDPipe) id: string
    ):Car{
        return this.carsService.getById(id);
    }

    @Post()
    // @UsePipes( ValidationPipe )//Esto se debe hacer mmejor a nivel global ya que en toda la app se va a usar
    createCar(@Body() createCarDto:CreateCarDto){
        return this.carsService.createCar(createCarDto);
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id:string,
        @Body() updateCarDto:UpdateCarDto
    ){
        return this.carsService.update(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id:string){
        return this.carsService.delete(id);
    }
}
