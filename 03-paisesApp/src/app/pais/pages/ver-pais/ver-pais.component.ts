import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit{
  
  constructor( 
    private actitivatedRouter:ActivatedRoute,
    private PaisService:PaisService
    ){

  }
  

  ngOnInit(): void {

    this.actitivatedRouter.params
    .pipe(
      switchMap(({id})=>this.PaisService.getPaisPorAlpha(id))
    ).subscribe(resp=>{
      console.log(resp)
    })

    // this.actitivatedRouter.params.subscribe(({id})=> {
    //   console.log(id);
    //   this.PaisService.getPaisPorAlpha(id)
    //     .subscribe( pais => {
    //       console.log(pais)
    //     })
    // })
  
  }

}
