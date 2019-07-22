import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {USER_TOKEN} from '../app.constants';
import { UserService } from '../service/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router,private userService:UserService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());

        if (localStorage.getItem(USER_TOKEN) != null && this.userService.tokenExpirationDate<(new Date())) {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem(USER_TOKEN))
            });
            return next.handle(clonedreq)
                .pipe(tap(
                succ => { },
                err => {
                    if (err.status === 401)
                        this.router.navigateByUrl('/login');
                }
                ));
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
}
