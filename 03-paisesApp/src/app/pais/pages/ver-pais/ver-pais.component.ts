import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit{
  pais! : Country

  constructor( 
    private actitivatedRouter:ActivatedRoute,
    private paisService:PaisService
    ){

  }
  

  ngOnInit(): void {

    this.actitivatedRouter.params
    .pipe(
      switchMap(({id})=>this.paisService.getPaisPorAlpha(id)),
      tap(console.log)
    ).subscribe(pais=>{
      this.pais = pais[0];
      console.log(pais);
    }
    )

    // this.actitivatedRouter.params.subscribe(({id})=> {
    //   console.log(id);
    //   this.PaisService.getPaisPorAlpha(id)
    //     .subscribe( pais => {
    //       console.log(pais)
    //     })
    // })
  
  }

}
