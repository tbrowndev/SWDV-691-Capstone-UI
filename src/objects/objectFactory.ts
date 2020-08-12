/** hold user informaiton
 * 
 */
export class User{
    id:any;
    name:any;
    email:any;
    phone:any;
    username:any;
    constructor(id, name, email, phone, username){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.username = username;
    }
    
}

/**
 * holds group information 
 */
export class Group {
    id:any;
    name:any;
    description:any;
    goal:any;
    admin:any;
    
    constructor(id, name, description, goal, admin) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.goal = goal;
        this.admin = admin;
    }

}

/**holds post information for user
 * 
 */
export class Post {

    id:any;
    groupId:any;
    groupName:any;
    user:any;
    username:any;
    post:any;
    creationDate:any;

    constructor(id, group_id, group_name, user_name, username, post, date){
        this.id = id;
        this.groupId = group_id;
        this.groupName = group_name;
        this.user = user_name;
        this.username = username;
        this.post = post
        this.creationDate = date;
    }
}

/**holds comment information 
 * 
*/
export class Comment{
    id:any;
    postId:any;
    user:any;
    username:any;
    comment:any;
    creationDate:any;

    constructor(id, post_id, user, username, comment, date){
        this.id = id;
        this.postId = post_id;
        this.user = user;
        this.username = username;
        this.comment = comment;
        this.creationDate = date;
    }
}

/**holds milestone information
 * 
 */
export class Milestone{
    id:any;
    groupId:any;
    name:any;
    order:any;
    constructor(id, group_id, name, order){
        this.id = id;
        this.groupId = group_id;
        this.name = name;
        this.order = order;
    }
}