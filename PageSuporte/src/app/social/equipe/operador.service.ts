import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { BuscarOperadores } from 'src/app/models/Operador';
import { CriarOperador } from 'src/app/models/criarOperador';
import { Response } from 'src/app/models/Response';

@Injectable({
  providedIn: 'root'
})
export class OperadorService {
  filter(arg0: (operadores: any) => boolean): BuscarOperadores[] {
    throw new Error('Method not implemented.');
  }

  ApiUrl = environment.UrlApi;
  constructor(private http : HttpClient) { }


  GetOperadores(): Observable<Response<BuscarOperadores[]>>{
    return this.http.get<Response<BuscarOperadores[]>>(this.ApiUrl);
  }
  
  GetOperadorNome(operador_id: string): Observable<Response<BuscarOperadores[]>>{
    return this.http.get<Response<BuscarOperadores[]>>(`${this.ApiUrl}/OperadorNome?operadorNome=${operador_id}`);
  }
  
  DeletarOperadores(operador_id:string): Observable<Response<BuscarOperadores[]>>{
    return this.http.delete<Response<BuscarOperadores[]>>(`${this.ApiUrl}?operador_id=${operador_id}`);
  }

  CadastrarOperadores(operador: CriarOperador):Observable<Response<CriarOperador[]>>{
    return this.http.post<Response<CriarOperador[]>>(this.ApiUrl,operador);
  }

  EditarOperador(operador: BuscarOperadores):Observable<Response<BuscarOperadores[]>>{
    return this.http.put<Response<BuscarOperadores[]>>(this.ApiUrl,operador);
  }

  
}
