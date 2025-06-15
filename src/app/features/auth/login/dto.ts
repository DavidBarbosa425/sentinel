import { FormGroup } from "@angular/forms"

export class LoginDto {
    email = ""
    password = ""
    rememberMe = false

    constructor(login: FormGroup) {
        this.email = login.value.email
        this.password = login.value.password
        this.rememberMe = login.value.rememberMe
    }
}
