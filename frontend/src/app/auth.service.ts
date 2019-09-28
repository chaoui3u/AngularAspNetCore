import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders,HttpRequest} from '@angular/common/http'
import {Router} from '@angular/router';
@Injectable()
export class AuthService{

    BASE_URL='http://localhost:1357/auth';
    NAME_KEY='name';
    TOKEN_KEY='token'

    constructor(private http : HttpClient,private router :Router){}

    get name(){
        return localStorage.getItem(this.NAME_KEY);
    }

    get isAuthenticated(){
        return !!localStorage.getItem(this.TOKEN_KEY);
    }
    login(loginData){
        this.http.post(this.BASE_URL+'/login',loginData).subscribe(res=>{
            this.authenticate(res);
            console.log(res); 
        });
    }
    register(user){
        delete user.confirmPassword;
        console.log(user);
        this.http.post(this.BASE_URL+'/register',user).subscribe(response=>{
            this.authenticate(response);
        });
    }
    logout(){
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.NAME_KEY);
    }
    authenticate(response){
        response = JSON.stringify(response);
        var authResponse =JSON.parse(response.toString());
        if(!authResponse) return;
        localStorage.setItem(this.TOKEN_KEY,JSON.parse(response.toString()).token)
        localStorage.setItem(this.NAME_KEY,JSON.parse(response.toString()).firstName)
        this.router.navigate(['/']);
    }
    getUser(){
        return this.http.get(this.BASE_URL+'/users/me').subscribe();
    }
    tokenHeaders(){
        var header = new Headers({'Authorization':'Bearer'+localStorage.getItem(this.TOKEN_KEY)});

    }
}