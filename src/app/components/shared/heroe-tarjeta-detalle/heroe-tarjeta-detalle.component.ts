import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta-detalle',
  templateUrl: './heroe-tarjeta-detalle.component.html'
})
export class HeroeTarjetaDetalleComponent implements OnInit {

  public heroe: any = {};

  constructor(private activateRoute: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.heroe = this.heroesService.getHeroe(params.id);
      console.log(this.heroe);
    });
  }

}
