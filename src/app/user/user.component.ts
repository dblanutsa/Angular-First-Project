import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {

    @Input() user; 

    isMarked = false;

    selectUser(){
        this.isMarked = !this.isMarked;
        console.log(this.isMarked);
    }

}
