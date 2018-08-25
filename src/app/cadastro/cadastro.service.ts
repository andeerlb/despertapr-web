import { Request } from "../services/request.service";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../models/usuario.model";
import { Injectable } from "@angular/core";

@Injectable()
export class CadastroService extends Request {
    
    usuario: Usuario = new Usuario();
    
    constructor(httpClient: HttpClient){
        super(httpClient);
    }
}