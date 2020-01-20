import { Injectable } from '@angular/core';
import { Product } from './product';
import { pipeBind1 } from '@angular/core/src/render3';
import { LookupAllOptions } from 'dns';

@Injectable()
export class ProductService {

   getAllProducts():Product{
      const P1 = new Product("iphone","apple","phone", 900)
      const P2 = new Product("s10", "samsung","phone", 900)
      return(P2);
      return(P1);
   }

   constructor()  {
       
   }

}
