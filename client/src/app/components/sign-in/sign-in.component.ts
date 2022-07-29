import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  @Input() modal = false
  @Output() onChangeModal = new EventEmitter()
  form: FormGroup
  success = false

  constructor(
    public formBuilder: FormBuilder,
    private auth: AuthService
  ) {
    this.form = formBuilder.group({
      'email': ['', Validators.email],
      'password': ['', Validators.required]
    })
  }

   signIn(form: any) {
    Promise.resolve()
      .then(() => {
        this.auth.login(form.value).subscribe(
          (val: any) => console.log(val),
          (err) => console.log(err)
        )
      })
      .then(() => this.success = true)
      .then(() => this.form.reset())
      .then(() => setTimeout(() => {
        this.success = false
        this.closeModal()
      }, 1500))
  }

  changeModal(event: any) {
    const t = event.target

    if (t.classList.contains('form') || t.classList.contains('secondary-title') || t.classList.contains('input') || t.classList.contains('button')) {
      return
    }

    this.closeModal()
  }

  closeModal() {
    this.modal = false
    this.onChangeModal.emit(this.modal)
  }
}
