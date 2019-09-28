import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class AuthService{

    BASE_URL='http://localhost:1357/auth';

    constructor(private http : HttpClient){}
    register(user){
        delete user.confirmPassword;
        console.log(user);
        this.http.post(this.BASE_URL+'/register',user).subscribe();
    }
}