import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Tasks } from './../tasks';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TasksService {

  private tasksUrl = 'http://localhost:8000/api/tasks';
  private taskUrl = 'http://localhost:8000/api/task';

  constructor(private http: HttpClient) { }

  getTasks (): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.tasksUrl)
     .pipe(
        catchError(this.handleError('getTasks', []))
      );
  }

  
  deleteTask (task: Tasks | number): Observable<Tasks> {
    const id = typeof task === 'number' ? task : task._id;
    const url = `${this.tasksUrl}/${id}`;

    return this.http.delete<Tasks>(url, httpOptions).pipe(
     
      catchError(this.handleError<Tasks>('deleteTask'))
    );
  }

  addTask (task: Tasks): Observable<Tasks> {
    return this.http.post<Tasks>(this.taskUrl, task, httpOptions).pipe(
      catchError(this.handleError<Tasks>('addTask'))
    );
  }
  updateTask (task: Tasks): Observable<any> {
    return this.http.put(this.taskUrl, task, httpOptions).pipe(
      catchError(this.handleError<any>('updateTask'))
     
    );
  }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}


