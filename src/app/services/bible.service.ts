import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BibleService {
  constructor(private http: HttpClient) {}

  private URL = 'http://localhost:3000';

  public getVersions() {
    return this.http.get(`${this.URL}/versions`);
  }
}
