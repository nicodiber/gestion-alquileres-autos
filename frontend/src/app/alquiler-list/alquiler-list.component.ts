import { Component, OnInit } from '@angular/core';
import { AlquilerService } from '../alquiler.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-alquiler-list',
  templateUrl: './alquiler-list.component.html',
  styleUrls: ['./alquiler-list.component.css'],
  providers: [DatePipe]
})
export class AlquilerListComponent implements OnInit {
  alquileres: any[] = [];

  constructor(private alquilerService: AlquilerService) { }

  ngOnInit(): void {
    this.loadAlquileres();
  }

  loadAlquileres() {
    this.alquilerService.getAllAlquileres().subscribe(
      (data) => {
        this.alquileres = data;
      },
      (error) => {
        console.error('Error al cargar alquileres:', error);
      }
    );
  }

  deleteAlquiler(id: string) {
    this.alquilerService.deleteAlquiler(id).subscribe(
      () => {
        console.log('Alquiler eliminado correctamente');
        this.loadAlquileres();
      },
      (error) => {
        console.error('Error al eliminar alquiler:', error);
      }
    );
  }
}