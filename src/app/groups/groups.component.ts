import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApigroupService } from '../shared/apigroup.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groupForm !: FormGroup;
  groups !: any;

  constructor(
    private auth: AuthService,
    private apigroup: ApigroupService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.getGroups();
    this.groupForm = this.formBuilder.group({
      name : ['']
    });
  }

  logout() {
    this.auth.logout();
  }
  getGroups() {
    this.apigroup.getGroups()
    .subscribe(res => {
      console.log(res);
      this.groups = res;
    })
  }

}
