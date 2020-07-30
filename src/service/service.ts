import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators'
import { Subject } from 'rxjs/Subject';
import { User } from '../objects/objectFactory'

//handles extracting only the body of the server response
function extract_data(res: Response) {
    let body = res;
    return body || {};
}

//handles errors that occur
function handle_error(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
        const err = error || '';
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }
    else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
}


@Injectable()
export class Auth_DataProvider {

    baseURL = 'http://localhost:6254';

    dataChanged$: Observable<boolean>;
    private dataChangeSubject: Subject<boolean>;

    constructor(public http: HttpClient) {

        this.dataChangeSubject = new Subject<boolean>();
        this.dataChanged$ = this.dataChangeSubject.asObservable();

    }

    register_new_user(non_user: User, non_user_key: string) {

        return this.http.post(this.baseURL + "/auth/users", { "non_user": non_user, "non_user_key": non_user_key }).pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    validate_user_cred(input_name:string, input_key:string){
        
        return this.http.get(this.baseURL+ "/auth/users", {"params":{"input_name":input_name, "input_key":input_key}}).pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }
}