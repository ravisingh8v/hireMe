import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { employeeForm } from '../admin.model';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.scss'],
})
export class AddEmployeeFormComponent {
  public skills: any[] = [];
  public designation: any[] = [];
  public empForm: FormGroup;
  public image_file!: File;
  public base64!: string;
  public preview_image: any;
  public isSubmitted: boolean;
  constructor(
    public formb: FormBuilder,
    private domSanitizer: DomSanitizer,
    private apiService: ApiService,
    private router: Router
  ) {
    this.isSubmitted = false;
    this.empForm = this.formb.group({
      profile: [[Validators.required]],
      fullName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      designation: ['', [Validators.required]],
      skills: ['', [Validators.required]],
    });

    this.designation = [{ id: 1, designation: 'Front-End' }];
    this.skills = [
      { id: 1, skill: 'Html' },
      { id: 2, skill: 'CSS' },
      { id: 3, skill: 'Javascript' },
      { id: 4, skill: 'Angular' },
    ];
  }
  fileSelect(event: any) {
    // targetting image
    this.image_file = event.target.files[0];
    console.log(this.image_file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.image_file);

    fileReader.onload = () => {
      this.base64 = String(fileReader.result);
      // this.preview_image = this.domSanitizer.bypassSecurityTrustResourceUrl(
      //   this.base64
      console.log(this.base64);
      // );
    };
  }

  onSubmitForm() {
    this.isSubmitted = true;
    console.log(this.empForm);
    if (this.empForm.valid) {
      this.empForm.controls['profile'].setValue(this.base64);
      this.apiService.postData(this.empForm.value).subscribe((res) => {
        console.log(res);
        this.empForm.reset();
      });
      this.isSubmitted = false;
    }
  }
}
