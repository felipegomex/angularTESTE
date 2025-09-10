import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { BuscarOperadores } from 'src/app/models/Operador';
import { CriarOperador } from 'src/app/models/criarOperador';
import { Response } from 'src/app/models/Response';
import { getApiUrl } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OperadorService {
  filter(arg0: (operadores: any) => boolean): BuscarOperadores[] {
    throw new Error('Method not implemented.');
  }

  Url = getApiUrl('Operador');
  constructor(private http : HttpClient) { }


  GetOperadores(): Observable<Response<BuscarOperadores[]>>{
    return this.http.get<Response<BuscarOperadores[]>>(this.Url);
  }
  
  GetOperadorNome(operador_id: string): Observable<Response<BuscarOperadores[]>>{
    return this.http.get<Response<BuscarOperadores[]>>(`${this.Url}/OperadorNome?operadorNome=${operador_id}`);
  }
  
  DeletarOperadores(operador_id:string): Observable<Response<BuscarOperadores[]>>{
    return this.http.delete<Response<BuscarOperadores[]>>(`${this.Url}?operador_id=${operador_id}`);
  }

  CadastrarOperadores(operador: CriarOperador):Observable<Response<CriarOperador[]>>{
    return this.http.post<Response<CriarOperador[]>>(this.Url,operador);
  }

  EditarOperador(operador: BuscarOperadores):Observable<Response<BuscarOperadores[]>>{
    return this.http.put<Response<BuscarOperadores[]>>(this.Url,operador);
  }

  
}
