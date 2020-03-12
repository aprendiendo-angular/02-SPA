import { Component, OnInit, ɵConsole } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent implements OnInit {

  public heroes: any[];

  constructor(
    private heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.cd) {
        this.heroes = this.heroesService.buscarHeroes(params.cd);
      } else {
        this.heroes = this.heroesService.getHeroes();
      }
    });
  }

  // No se utiliza
  verHeroe(idx: number) {
    this.router.navigate(['/heroe/detalle/', idx]);
  }

}
