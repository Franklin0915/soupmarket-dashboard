import { Injectable } from '@angular/core';





@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor() { }
  data:any[]=[
    {
      fullname:"Goil Plc",
      image:"https://th.bing.com/th/id/R.3d20a18bbd3a08593fbb512b1ba3dd10?rik=U0y7fqAD%2bSqjTQ&pid=ImgRaw&r=0",
      name:"Goil",
      price:"88.90",
      figure:"0.00"
    },
    {
      image:"https://th.bing.com/th/id/R.4563b135efa0927a992a50cf8f2947d9?rik=3Ci%2bfkeHDn8lSA&pid=ImgRaw&r=0",
      term:"Short term",
      priceYield:"120.73/22.0",
      figure:"-1.00",
      period:"Short term(14-28days)",
    },
    {
      fullname:"Access Bank Ghana Plc",
      image:"https://vacancies.website/wp-content/uploads/2020/12/images-19-12.png",
      name:"ACCESS",
      price:"384.12",
      figure:"0.00"
    }
   
  ]
}
