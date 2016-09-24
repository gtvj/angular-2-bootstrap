import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styles: [ `
        h1 {
            font-weight: normal;
            background-color: #EBAB00;
        }
        p {
            font-weight: bold;
            background-color: pink;
        } ` ]
})

export class AppComponent {
}