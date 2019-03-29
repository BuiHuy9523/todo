import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITodo} from './todo/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private API_URL = 'http://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<ITodo[]> {
    return this.http.get <ITodo[]>(this.API_URL);
  }
  deleteTodo(id: number): Observable<any> {
    return this.http.delete(
      `${this.API_URL}/${id}`
    );
  }
}

