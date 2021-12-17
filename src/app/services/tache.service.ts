import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class TacheService {

  // private apiUrl = 'http://localhost:4200/task';
  private apiUrl = 'https://my-json-server.typicode.com/http://localhost:4200/task';

  constructor(private http: HttpClient) { }

  /**
   * Get all taches
   * @returns Observable<Tache[]>
   */
  all() {
    return this.http.get(this.apiUrl);
  }


  /**
   * Get a tache with the given id
   * @param id : tache id
   * @returns Observable<Tache>
   */
  get(id: string) {
    return this.http.get(this.apiUrl + '/' + id)
  }

  /**
   * Create a new tache
   * @param tache new tache to create
   */
  create(tache: any) {
    return this.http.post(this.apiUrl, tache);
  }

  /**
   * Update a tache with the given id
   * @param id tache id to update
   * @param tache new tache data
   */
  update(id: string, tache: any) {
    return this.http.put(this.apiUrl + '/' + id, tache);
  }

  /**
   * Delete a tache with the given id
   * @param id tache id to delete
   */
  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id)
  }
}