import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentService } from '../services/environment.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private environmentService: EnvironmentService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiUrl = this.environmentService.baseUrl;
    const apiReq = req.clone({ url: `${apiUrl}${req.url}` });
    return next.handle(apiReq);
  }
}
