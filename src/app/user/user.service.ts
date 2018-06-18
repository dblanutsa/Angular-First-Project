import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

    size;

    constructor(private http: Http) {}

    getUsers() {
        const count = this.size === undefined ? 8 : this.size;
        return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + count)
        .pipe(map(response => response.json().results.map(u => {
            return {
                name: u.name.first + ' ' + u.name.last,
                photo: u.picture.large,
                geo: u.location.city + ' ' + u.location.state + ' ' + u.location.street
            };
        })));
    }

    setSize(s) {
        this.size = s;
        console.log(this.size);
    }

}
