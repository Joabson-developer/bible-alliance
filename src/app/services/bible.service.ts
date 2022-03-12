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

  public getBooks(abbrev?: string) {
    return this.http.get(`${this.URL}/books/${abbrev}`);
  }

  public getChapter(version: string, abbrev: string, chapter: string) {
    return this.http.get(`${this.URL}/${version}/${abbrev}/${chapter}`);
  }
}
