export class ClientMessage {
    message: string;
    success: boolean;

    constructor(message: string, success: boolean) {
        this.message=message;
        this.success=success;
    }
}