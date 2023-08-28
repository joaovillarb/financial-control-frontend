import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  get baseUrl(): string {
    return environment.apiUrl;
  }
}
