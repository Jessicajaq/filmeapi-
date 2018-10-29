import { Component, OnInit } from '@angular/core';
import { Filmeapi } from './filmeapi';
import { FilmeapiService } from '../filmeapi.service';

@Component({
  selector: 'app-filmeapi',
  templateUrl: './filmeapi.component.html',
  styleUrls: ['./filmeapi.component.css']
})
export class FilmeapiComponent implements OnInit {

  filme: Filmeapi;
  filmes: Array<Filmeapi>;

  constructor(private filmeapiService: FilmeapiService) { }

  ngOnInit() {

    this.filme = new Filmeapi();
    this.filmes = new Array<Filmeapi>();
    this.filmeapiService.getFilmeapi()
    .subscribe(resp => this.filmes = resp);
    console.log(this.filmes);
  }


  salvar(filme: string){
    this.filmeapiService.salvarFilme(filme).subscribe(resp => this.filme = resp);
  }

}
