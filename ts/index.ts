export class MicCheck {

    constructor(){
    }

    check(msg: string, loud: boolean) : string{
        return loud ? msg.toUpperCase() : msg;
    }
}