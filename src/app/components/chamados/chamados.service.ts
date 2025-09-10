import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getApiUrl } from 'src/environments/environment.development';
import { Chamados} from 'src/app/models/Chamados/Chamados'; //Importando minha interface Chamados, ela vai orientar meu código quais colunas serão exibidas.
import { ChamadosItem } from 'src/app/models/Chamados/ChamadosItem'; //Importando minha interface ChamadosItem, ela vai orientar meu código quais colunas serão exibidas.
import { Response } from 'src/app/models/Response';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {
  url = getApiUrl('Chamado');
  constructor(private http : HttpClient) { }


  GetChamados(): Observable<Response<Chamados[]>>{
    return this.http.get<Response<Chamados[]>>(this.url);
  }
  
  GetChamadoById(chamado_id: number): Observable<Response<Chamados[]>>{
    return this.http.get<Response<Chamados[]>>(`${this.url}/ChamadoById?Chamado_Id=${chamado_id}`);
  }
  
  GetChamadoItens(chamado_id: number): Observable<Response<Chamados[]>>{
    return this.http.get<Response<Chamados[]>>(`${this.url}/ChamadoItens?Chamado_Id=${chamado_id}`);
  }

  GetFuncionarios():Observable<Response<Chamados[]>>{
    return this.http.get<Response<Chamados[]>>(this.url);
  }

  PostChamado(chamado: Chamados):Observable<Response<Chamados[]>>{
   return this.http.post<Response<Chamados[]>>(this.url,chamado);
  }

   PostChamadoItens(chamado: ChamadosItem):Observable<Response<ChamadosItem[]>>{
    return this.http.post<Response<ChamadosItem[]>>(this.url,chamado);
  }


  
}
