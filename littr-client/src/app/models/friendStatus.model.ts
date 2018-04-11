export class FriendStatus {

    id: number;
    status: string;

    /*
    *   1 pending
    *   2 approved
    */

    constructor(id: number, status: string) {
        this.id=id;
        this.status=status;
    }
}