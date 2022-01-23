import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private http: HospitalService) { }

  ngOnInit() {
    
  }

  onSubmit(addDoctor: NgForm)
  {
    console.log(addDoctor.value);
     this.http.addDoctor(addDoctor.value).subscribe(
       (response: any) =>
       {
         alert(response.doctorName+" added Successfully")
       }
     );
  }
}
