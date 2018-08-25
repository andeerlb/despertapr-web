import { HttpClient, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class Request {
    
    constructor(public httpClient: HttpClient){}

    public post(endpoint: string, entity: any) {
        return this.httpClient.post("http://localhost:8080/api/"+endpoint, entity);
    }

    public getOne(endpoint: string, id: number) {
        return this.httpClient.get("http://localhost:8080/api/"+endpoint+"/"+id);
    }
}