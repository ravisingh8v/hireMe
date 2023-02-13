import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { employeeForm } from '../admin-panel/admin.model';
import { ApiService } from '../core/service/api.service';
import { CommunicationService } from '../core/service/communication.service';

@Component({
  selector: 'app-hire-employee',
  templateUrl: './hire-employee.component.html',
  styleUrls: ['./hire-employee.component.scss'],
})
export class HireEmployeeComponent implements OnInit {
  public data!: employeeForm[];
  public filter: any;
  public sorting: any;
  public form: FormGroup;
  constructor(
    private getData: ApiService,
    // private search: CommunicationService,
    private formb: FormBuilder
  ) {
    this.form = this.formb.group({
      search: [''],
      sort: [''],
    });
  }
  // onSearchEmployee(event: any) {
  //   const keys = event.target.value;
  //   console.warn('hello');
  //   this.search.searchedKey.next(keys);
  // }
  ngOnInit(): void {
    this.getData.getData().subscribe((res: employeeForm[]) => {
      this.data = res;
      console.log(this.data);
    });
    // this.search.searchedKey.subscribe((res) => {
    //   console.log(res);
    //   this.filter = res;
    // });
  }
  sort(e: any) {
    console.log(e);
    console.log(this.sorting);
  }
}
