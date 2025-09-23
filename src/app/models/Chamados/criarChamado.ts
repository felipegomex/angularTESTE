import { Data } from "@angular/router";

export interface CriarChamado{
 cliente_Id:string;
 contrato_Id:String;
 data_Inclusao:Date;
 usuario_Inclusao:string;
 tipo:string;
 titulo:string;
}

// Modelo com os campos alteráveis para criar um chamado.