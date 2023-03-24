import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars(){
        return this.carsService.getAll()
    }

    @Get(':id')
    getById(
        @Param('id', ParseIntPipe) id: number
    ){
        return this.carsService.getById(id);
    }

    @Post()
    createCar(@Body() body:any){
        return body;
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseIntPipe) id:number,
        @Body() body:any
    ){
        return {body, id}
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id:number){
        return id;
    }
}
