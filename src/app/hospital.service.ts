
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  url= "http://localhost:8080/hospital";
  constructor(private http:HttpClient) { }

  //done
  public getDoctors(){
    return this.http.get("http://localhost:8080/hospital/getDoctors");
    // console.log(doc);
    // return doc;
    //returns List of all Doctor;
  }
  getDoctor(id: string){
    return this.http.get(this.url+"/getDoctor/?id="+id);
    //returd doctor by Id;
  }
  
  //done
  getPatients(){
    return this.http.get("http://localhost:8080/hospital/getPatients");
  }

  //done
  getPatient(id: number){
    //return doctor by Id;
    return this.http.get("http://localhost:8080/hospital/getPatientById/"+id);
  }

  //done
  addDoctor(data: any){
    return this.http.post("http://localhost:8080/hospital/addDoctor",data);
  }

  //done
  addPatient(data: any){
    return this.http.post("http://localhost:8080/hospital/addPatient", data);
  }
  

}
