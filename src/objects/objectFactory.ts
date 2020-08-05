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

export class Group{
    private id: number;
    private adminId: number;
    public name: string;
    public description: string;
    public goal: string;

    constructor(id:number, adminId:number,name:string,description:string,goal:string){
        this.id = id;
        this.adminId = adminId;
        this.name = name;
        this.description = description;
        this.goal = goal;
    };

    getId(){
        return this.id;
    }

    getadminId(){
        return this.adminId;
    }

    setName(newName:string){
        this.name = newName;
    }

    setDescription(newDesc:string){
        this.description = newDesc;
    }

    setGoal(newGoal:string){
        this.goal = newGoal;
    }
    
}

export class Post {
    private id: number;
    private groupId: number;
    private memberId: number;

    public memberName: string;
    public groupName: string;
    public postData: string;
    public timestamp: Date;

    constructor(id:number, groupId:number, memberId:number, memberName: string, groupName:string, postData:string, timestamp:Date) {
        this.id = id;
        this.groupId = groupId;
        this.memberId = memberId;
        this.memberName = memberName;
        this.groupName = groupName;
        this.postData = postData;
        this.timestamp = timestamp;
    };

    getId() {
        return this.id;
    }
    getGroupId() {
        return this.groupId;
    }
    getMemberId() {
        return this.memberId;
    }
}

export class Comment{
    private id:number;
    private postId:number;
    private memberId:number;
    public memberName: string;
    public commentData: string;
    public timestamp: Date;

    constructor(id:number, postId:number, memberId:number, memberName:string, commentData:string, timestamp:Date){
        this.id = id;
        this.postId = postId;
        this.memberId = memberId;
        this.memberName = memberName;
        this.commentData = commentData;
        this.timestamp = timestamp;
    }

    getId(){
        return this.id;
    }

    getPostId(){
        return this.postId;
    }

    getmemberId(){
        return this.memberId;
    }
}

export class Subcomment{
    private id:number;
    private commentId:number;
    private memberId:number;
    public memberName:string;
    public commentData:string;
    public timestamp: Date;

    constructor(id:number, commentId:number, memberId:number,membername:string, commentData:string, timestamp:Date){

        this.id = id;
        this.commentId = commentId;
        this.memberId = memberId;
        this.memberName = membername;
        this.commentData = commentData;
        this.timestamp = timestamp;
    }

    getId(){
        return this.id;
    }

    getCommentId(){
        return this.commentId;
    }

    getMemberId(){
        return this.memberId;
    }
}

export class Milestone{
    private id:number;
    private groupId:number;
    public name:string;
    public order:number;

    constructor(id?:number, groupId?:number, name?:string, order?:number){
        this.id = id;
        this.groupId = groupId;
        this.name = name;
        this.order = order;
    }

    getId(){
        return this.id;
    }

    getGroupId(){
        return this.groupId;
    }

}