import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-radiobutton',
  standalone: true,
  imports: [],
  templateUrl: './radiobutton.component.html',
  styleUrl: './radiobutton.component.css'
})
export class RadiobuttonComponent {
  @Input() opt1=""
  @Input() opt2=""
  @Input() opt3=""
  @Input() id=""
}
