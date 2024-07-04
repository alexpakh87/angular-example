import { Component } from '@angular/core';
import { users } from '../data/users';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  users=users;

name:string='users';

}
