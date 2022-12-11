import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  
  user = {
    name: 'chau',
    age: 29
  }

  inputType = "text"

  handler = () => {
    console.log("click me")
  }
}
