import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ChantierService {
  private apiUrl = 'http://localhost:3000/api/chantier';
  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(this.apiUrl);
  }


  /**
   * Get a course with the given id
   * @param id : course id
   * @returns Observable<Course>
   */
  get(id: string) {
    return this.http.get(this.apiUrl + '/' + id)
  }

  /**
   * Create a new course
   * @param course new course to create
   */
  create(chantier: any) {
    return this.http.post(this.apiUrl, chantier);
  }

  /**
   * Update a course with the given id
   * @param id course id to update
   * @param course new course data
   */
  update(id: string, chantier: any) {
    return this.http.put(this.apiUrl + '/' + id, chantier);
  }

  /**
   * Delete a course with the given id
   * @param id course id to delete
   */
  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id)
  }


}
