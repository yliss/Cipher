import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Caesar's Cipher";

  shift: number = 0;
  plainText: string = '';
  cipherText: string = '';

  onShiftChange(i) {
       this.shift=i;
  }

  onPlainTextChange(text) {
    this.cipherText=this.encrypt(text);
    //
    console.log("PlainTextChange");
    console.log("Input:"+ text);
    console.log("Ouput:"+ this.encrypt(text));
  }

  onCipherTextChange(text) {
    this.plainText=this.decrypt(text);
  }

  encrypt(plainText) {
    let cipherArr = []
    let cipherLetter;

    plainText.split("").map(letter => {
      let code = letter.charCodeAt(0);
      if(letter === " ") {
        return cipherArr.push(letter)
      }
      // Uppercase letters
      if (code >= 65 && code <= 90) {
        cipherLetter = String.fromCharCode(((code - 65 + this.shift) % 26) + 65)
      }
      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        cipherLetter = String.fromCharCode(((code - 97 + this.shift) % 26) + 97)
      }
      return cipherArr.push(cipherLetter)
    })
    return cipherArr.join("");
  }

  decrypt(cipherText) {
    let plainArr = []
    let plainLetter

    this.cipherText.split("").map(cipher => {
      let code = cipher.charCodeAt(0);
      if(cipher === " ") {
        return plainArr.push(cipher)
      }
      // Uppercase letters
      if (code >= 65 && code <= 90) {
        let diff = code - 65 - this.shift
        if (diff >= 0) {
          plainLetter = String.fromCharCode((diff % 26) + 65);
        } else {
          plainLetter = String.fromCharCode(((26 + diff) % 26) + 65);
        }
      }
      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        let diff = code - 97 - this.shift
        if (diff >= 0) {
          plainLetter = String.fromCharCode((diff % 26) + 97);
        } else {
          plainLetter = String.fromCharCode(((26 + diff) % 26) + 97);
        }
      }
      return plainArr.push(plainLetter)
    })
    return plainArr.join("");
  }
}
