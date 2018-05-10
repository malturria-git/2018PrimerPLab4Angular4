import { Component, OnInit } from '@angular/core';
import { ServicioDbService } from '../servicios/servicio-db.service'; 

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  public listadoDePersonas: Array<any>;
  nombre:string;
  mail:string;
  sexo:string;
  clave:string;
  editar:boolean=false;
  constructor(public miHttp: ServicioDbService) { 
    this.listar();
  }

  ngOnInit() {
  }

  public listar():Promise<Array<any>> {
    return   this.miHttp.obtener("traerpersonas")
       .then( data => {
         console.log( "volvio de traerpersonas: "+ data );
         this.listadoDePersonas=data;
       })
       .catch( err => {
         console.log( err );
         return null;
       });
 }

 private genericInsert() {
  console.log("dando de alta: "+ this.nombre+ this.mail+ this.sexo+this.clave);

   if(this.nombre==null || this.mail==null || this.sexo==null ||this.clave==null ||
    this.nombre=='' || this.mail=='' || this.sexo=='' ||this.clave==''){

   }else{

   
let objeto = {nombre:this.nombre,mail:this.mail,  sexo:this.sexo,   clave:this.clave};
  this.miHttp.genericInsert("genericInsert",objeto).subscribe((response) => {
    //alert("se guardo correctamente "+response);
    console.log("response: "+ response);
    this.listar();
  }, (error) => {
    console.log("error al guardar la persona", error);
  });
}
}

 
private genericDelete(mail) {
  let objeto = {mail:mail};
  console.log("ingresa a borrar, se borrara "+objeto);
    this.miHttp.genericDelete("genericDelete",objeto).subscribe((response) => {
      console.log(response);
      this.listar();
    }, (error) => {
      console.log("error al borrar la persona", error);
    });
  }


}
