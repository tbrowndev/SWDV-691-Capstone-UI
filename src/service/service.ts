import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators'
import { Subject } from 'rxjs/Subject';
import { User, Group, Milestone, Post } from '../objects/objectFactory'

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
    //console.error(errMsg);
    return Observable.throw(errMsg);
}


@Injectable()
export class Auth_DataProvider {

    baseURL = 'http://ec2-3-19-75-69.us-east-2.compute.amazonaws.com:6200';

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

    validate_user_cred(input_name: string, input_key: string) {

        return this.http.get(this.baseURL + "/auth/users", { "params": { "input_name": input_name, "input_key": input_key } }).pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }
}

@Injectable()
export class User_DataProvider {

    baseURL = 'http://ec2-3-19-75-69.us-east-2.compute.amazonaws.com:6220';

    dataChanged$: Observable<boolean>;
    private dataChangeSubject: Subject<boolean>;

    constructor(public http: HttpClient) {

        this.dataChangeSubject = new Subject<boolean>();
        this.dataChanged$ = this.dataChangeSubject.asObservable();

    }

    get_user_information(id: number): Observable<object[]> {
        return this.http.get(this.baseURL + "/users/" + id).pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    get_user_groups(id: number) {
        return this.http.get(this.baseURL + "/users/" + id + "/groups").pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    is_user_a_member(id: number, group: number) {
        return this.http.get(this.baseURL + "/users/" + id + "/groups/verify/" + group).pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    get_user_homefeed(userId:number){
        return this.http.get(this.baseURL+"/users/"+userId+"/feed").pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }
}

@Injectable()
export class Group_DataProvider {

    baseURL = 'http://ec2-3-19-75-69.us-east-2.compute.amazonaws.com:6210';

    dataChanged$: Observable<boolean>;
    private dataChangeSubject: Subject<boolean>;

    constructor(public http: HttpClient) {

        this.dataChangeSubject = new Subject<boolean>();
        this.dataChanged$ = this.dataChangeSubject.asObservable();
    }

    //GROUP SECTION

    add_new_group(group: Group, milestones: Milestone[]) {
        return this.http.post(this.baseURL + "/groups", { group, milestones }).pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    delete_group(group:Group){
        return this.http.delete(this.baseURL+"/groups/"+group.id).pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    get_group_information(group: number) {
        return this.http.get(this.baseURL + "/groups/" + group).pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    get_group_members(group:number){
        return this.http.get(this.baseURL+"/groups/"+group+"/members").pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    get_group_milestones(group:number){
        return this.http.get(this.baseURL+"/groups/"+group+"/milestones").pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    get_group_search(search: string) {
        return this.http.get(this.baseURL + "/groups/search/" + search).pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    add_user_to_group(user: number, group: number) {
        return this.http.post(this.baseURL + "/groups/members", { user: user, group: group }).pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    add_new_post(group: number, user: number, post: string) {
        return this.http.post(this.baseURL + "/groups/" + group + "/posts", { user: user, post: post }).pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    get_group_top_posts(group: Number) {
        return this.http.get(this.baseURL + "/groups/"+group+"/posts").pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    get_group_next_posts(group: number, lastPost: number) {
        return this.http.get(this.baseURL + "/groups/"+group+"/posts/"+lastPost).pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    //POST SECTION
    count_post_likes(post:number, user:number){
        return this.http.get(this.baseURL+"/posts/"+post+"/likes/"+user).pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    count_post_comments(post:number){
        return this.http.get(this.baseURL+"/posts/"+post+"/comments/count").pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    add_comment_to_post(post:number, user:number, comment:string){
        return this.http.post(this.baseURL+"/posts/"+post+"/comments", {user:user, comment:comment}).pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    get_post_comments(post:number){
        return this.http.get(this.baseURL+"/posts/"+post+"/comments").pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    add_like_to_post(post:number, group:number, user:number){
        return this.http.post(this.baseURL+"/posts/"+post+"/likes", {group:group, user:user}).pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    delete_like_from_post(like:number){
        return this.http.delete(this.baseURL+"/likes/"+like).pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    delete_post(post:Post){
        return this.http.delete(this.baseURL+"/posts/"+post.id).pipe(
            map(extract_data),
            catchError(handle_error)
        )
    }

    //COMMENT SECTION
}