const argon2 = require('argon2');

export class anchr_encrypt{

    constructor(){}

    encrypt(p){

        const h = argon2.hash(p, {
            type: argon2.argon2i,
            timeCost: 5,
            memoryCost: 5,
        });

        return h;
    }

    verifyKey(userInput, encryptedKey){
        try{
            if( argon2.verify(encryptedKey, userInput)){
                return true; //password match
            }else {
                return false; //password did not match
            }
        }catch (err) {
            return 500 //internal error in system
        }
        
    }
}