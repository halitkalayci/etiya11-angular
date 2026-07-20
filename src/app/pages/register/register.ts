import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email, form, minLength, required, submit, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-register',
  imports: [FormsModule, FormField],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  model = signal({
    name: '', // başlangıç değerleri + isim tanımları
    surname: '',
    email: '',
    password: ''
  })

  // formlaştırılması ve validasyonları..
  form = form(this.model, (path) => {
    required(path.name, {message: "Ad alanı zorunludur."});
    minLength(path.name, 2, {message: "Ad alanı en az 2 karakter olmalıdır."})
    required(path.email, {message:"E-mail girmek zorunludur"})
    email(path.email, {message:'Lütfen geçerli bir e-posta girin'})
    // ....
  })

  // formlaştırma sonrası formun gönderilme aksiyonu
  async onSubmit(): Promise<void> {
    await submit(this.form, async (form) => {
      console.log("Kayıt verisi:", form().value());

      return undefined; // API çağrısı.
    })
  }
}
