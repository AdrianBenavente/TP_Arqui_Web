import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Users } from 'src/app/model/usuarios.model';
import { CatalogoService } from 'src/app/services/usuarios/catalogo.service';

interface Districto {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})



export class UsuarioFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  user: Users = new Users();
  mensaje: string = "";

  distritos: Districto[] = [
    {value: 'Lima', viewValue: 'Lima'},
    {value: 'Ancón', viewValue: 'Ancón'},
    {value: 'Ate', viewValue: 'Ate'},
    {value: 'Barranco', viewValue: 'Barranco'},
    {value: 'Breña', viewValue: 'Breña'},
    {value: 'Carabayllo', viewValue: 'Carabayllo'},
    {value: 'Chaclacayo', viewValue: 'Chaclacayo'},
    {value: 'Chorrillos', viewValue: 'Chorrillos'},
    {value: 'Cieneguilla', viewValue: 'Cieneguilla'},
    {value: 'Comas', viewValue: 'Comas'},
    {value: 'El Agustino', viewValue: 'El Agustino'},
    {value: 'Independencia', viewValue: 'Independencia'},
    {value: 'Jesús María', viewValue: 'Jesús María'},
    {value: 'La Molina', viewValue: 'La Molina'},
    {value: 'La Victoria', viewValue: 'La Victoria'},
    {value: 'Lince', viewValue: 'Lince'},
    {value: 'Los Olivos', viewValue: 'Los Olivos'},
    {value: 'Lurigancho', viewValue: 'Lurigancho'},
    {value: 'Lurín', viewValue: 'Lurín'},
    {value: 'Magdalena del Mar', viewValue: 'Magdalena del Mar'},
    {value: 'Pueblo Libre', viewValue: 'Pueblo Libre'},
    {value: 'Miraflores', viewValue: 'Miraflores'},
    {value: 'Pachacámac', viewValue: 'Pachacámac'},
    {value: 'Pucusana', viewValue: 'Pucusana'},
    {value: 'Puente Piedra', viewValue: 'Puente Piedra'},
    {value: 'Punta Hermosa', viewValue: 'Punta Hermosa'},
    {value: 'Punta Negra', viewValue: 'Punta Negra'},
    {value: 'Rímac', viewValue: 'Rímac'},
    {value: 'San Bartolo', viewValue: 'San Bartolo'},
    {value: 'San Borja', viewValue: 'San Borja'},
    {value: 'San Isidro', viewValue: 'San Isidro'},
    {value: 'San Juan de Lurigancho', viewValue: 'San Juan de Lurigancho'},
    {value: 'San Juan de Miraflores', viewValue: 'San Juan de Miraflores'},
    {value: 'San Luis', viewValue: 'San Luis'},
    {value: 'San Martín de Porres', viewValue: 'San Martín de Porres'},
    {value: 'San Miguel', viewValue: 'San Miguel'},
    {value: 'Santa Anita', viewValue: 'Santa Anita'},
    {value: 'Santa María del Mar', viewValue: 'Santa María del Mar'},
    {value: 'Santa Rosa', viewValue: 'Santa Rosa'},
    {value: 'Santiago de Surco', viewValue: 'Santiago de Surco'},
    {value: 'Surquillo', viewValue: 'Surquillo'},
    {value: 'Villa El Salvador', viewValue: 'Villa El Salvador'},
    {value: 'Villa María del Triunfo', viewValue: 'Villa María del Triunfo'}
  ];

  constructor(private as: CatalogoService, private router: Router){}
  ngOnInit(): void {
  this.form = new FormGroup({
    id:new FormControl(),
    name: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    age: new FormControl(),
    district: new FormControl(),
    profession: new FormControl()
  });
  }

  aceptar(): void{
    this.user.id=this.form.value['id'];
    this.user.name=this.form.value['name'];
    this.user.lastname=this.form.value['lastname'];
    this.user.email=this.form.value['email'];
    this.user.age=this.form.value['age'];
    this.user.district=this.form.value['district'];
    this.user.profession=this.form.value['profession'];

    /*Validaciones*/
    if(this.form.value['name'].length > 0 && this.form.value['email'].length > 0){
      this.as.insert(this.user).subscribe(data => {
        this.as.list().subscribe(data => { this.as.setList(data);
      })
    })
    this.router.navigate(['users']);
    }else{
      this.mensaje="Completa los Campos!!";
    }
  }

}
