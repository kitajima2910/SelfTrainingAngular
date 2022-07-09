import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength = (event: Event) => {

    const parsedValue = parseInt((event.target as HTMLInputElement).value);

    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    } else {
      this.length = 0;
    }

  }

  onChangeUseLetters = () => {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers = () => {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols = () => {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick = () => {

    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const numbders = '0123456789';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.includeLetters) {
      validChars += letters;
    }
    if(this.includeNumbers) {
      validChars += numbders;
    }
    if(this.includeSymbols) {
      validChars += symbols;
    }

    let generatorPassword = '';
    for(let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatorPassword += validChars[index];
    }

    this.password = generatorPassword;
  }
}
