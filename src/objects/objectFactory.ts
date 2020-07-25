export class User {

    private id: number;

    public name: string;
    public email: string;
    public phone: number;
    public username: string;

    constructor() {
    };

    setId(id:number){
        this.id = id;
    }

    getId(){
        return this.id;
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

    constructor() {
    };

    setId(id: number) {
        this.id = id;
    }
    setGroupId(id: number) {
        this.groupId = id;
    }
    setMemberId(id: number) {
        this.memberId = id;
    }

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