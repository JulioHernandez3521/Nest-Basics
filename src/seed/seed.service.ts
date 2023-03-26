import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRAND_SEED } from './data/brand.seed';
import { CAR_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {



  constructor (
    private readonly carService:CarsService,
    private readonly brandService:BrandsService,
  ){}


  populateDB(){
    this.brandService.fillBrandsWithSeedData(BRAND_SEED);
    this.carService.fillCarsWithSeedData(CAR_SEED);
    return "Seed executed succesfully :)";
  }
}
