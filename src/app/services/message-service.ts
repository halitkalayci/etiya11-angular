import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  // toastr ile mesaj bas
  constructor(private toastrService:ToastrService) {}

  toastSuccessMessage(message:string, title?: string) {
    this.toastrService.success(message, title)
  }
}
