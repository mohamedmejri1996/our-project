import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:3000/employee';
  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(this.apiUrl);
  }


  /**
   * Get a employee with the given id
   * @param id : employee id
   * @returns Observable<employee>
   */
  get(id: string) {
    return this.http.get(this.apiUrl + '/' + id)
  }

  /**
   * Create a new course
   * @param course new course to create
   */
  create(employee: any) {
    return this.http.post(this.apiUrl, employee);
  }

  /**
   * Update a employee with the given id
   * @param id employee id to update
   * @param course new employee data
   */
  update(id: string, employee: any) {
    return this.http.put(this.apiUrl + '/' + id, employee);
  }

  /**
   * Delete a employee with the given id
   * @param id employee id to delete
   */
  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id)
  }
}
