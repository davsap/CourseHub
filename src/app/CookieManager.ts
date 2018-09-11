import {CookieService} from 'ngx-cookie-service';

export class CookieManager {
    constructor( private cookieService: CookieService ) {

    }
    addCookie(name: string, key: string) {
        this.cookieService.set(name, key);
    }
}
