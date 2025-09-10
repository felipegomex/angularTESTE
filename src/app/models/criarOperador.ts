import { Data } from "@angular/router";

export interface CriarOperador{
 operador_ID?:string;
 nome:String;
 senha:string;
 email:string;
 se_Admin:boolean;
 se_Ativo:string;
 data_Inclusao:Date;
 usuario_Inclusao:string;
 perfil_Id:string;
}