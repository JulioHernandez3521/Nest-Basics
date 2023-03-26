import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from './dto';

import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [{
    id: uuid(), 
    name:"Toyota", 
    createdAt: new Date().getTime(),
  }];

  create(createBrandDto: CreateBrandDto): Brand {
    const {name} = createBrandDto;
    const newBrand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime(), 
    } 
    this.brands.push(newBrand);
    return newBrand; 
  }

  findAll(): Brand[] {
    return [...this.brands];
  }

  findOne(id: string): Brand {
    const brand = this.brands.find(b => b.id === id);
    if(!brand) 
      throw new NotFoundException(`Brand with id "${id} not found"`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto): Brand {

    let brandDB:Brand = this.findOne(id);

    this.brands = this.brands.map(b=>{
      if(b.id === id){
         brandDB.updateAt = new Date().getTime();
         brandDB = {
          ...brandDB,
          ...updateBrandDto
         }
         brandDB.name = brandDB.name.toLocaleLowerCase();
         return brandDB
      }
      return b;
    });
  
    return brandDB;
  }

  remove(id: string) {
    const brandDB = this.findOne(id);

    this.brands = this.brands.filter(b => b.id !== id);

    return brandDB;
  }
}
