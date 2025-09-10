import { Data } from "@angular/router";

export interface ChamadosItem{
 operador_ID?:string;
 nome:String;
 senha:string;
 email:string;
 se_Admin:boolean;
 se_Ativo:string;
 perfil_Skin:string;
 data_Ultimo_Acesso:Date;
 data_Inclusao:Date;
 usuario_Inclusao:string;
 data_Alteracao:Date;
 usuario_Alteracao:string;
 perfil_Id:string;
}