import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService} from 'ngx-bootstrap/modal'
import { AlertaComponent } from '../alerta/alerta.component';
@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private showAlert(message: String, tipo: String){
   const bsModalRef: BsModalRef = this.bsModalService.show(AlertaComponent)
   bsModalRef.content.type = tipo
   bsModalRef.content.message = message
  }

  showAlertDanger(message: String){
    this.showAlert(message, 'danger')
  }

  showAlertSuccess(message: String){
    this.showAlert(message, 'success')
  }

  showAlertInfo(message: String){
    this.showAlert(message, 'info')
  }
}
