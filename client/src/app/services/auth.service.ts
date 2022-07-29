import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {
  login_api = 'http://localhost:4300/api/auth/login'
  reg_api = 'http://localhost:4300/api/auth/registration'

  constructor(private http: HttpClient) { }

  login(user: any) {
    return this.http.post(this.login_api, user)
  }

  reg(user: any) {
    return this.http.post(this.reg_api, user)
  }
}
