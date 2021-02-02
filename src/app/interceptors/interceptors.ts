import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

    constructor(@Inject("apiKey") private apiKey: any) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = this.apiKey(req);
        return next.handle(req);
    }

}