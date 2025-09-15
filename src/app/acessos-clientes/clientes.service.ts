import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApiService } from '../services/base-api.service';

@Injectable({ providedIn: 'root' })
export class ClientesService extends BaseApiService {
  constructor(http: HttpClient) { super(http); }

  getClientes(): Observable<any[]> {
    return this.get<any[]>('/clientes');
  }
}
