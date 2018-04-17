import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  pathComplete = false;
  currentServices = [];
  names = {};
  flow = {};

  constructor(private ops: OperationsService) { }

  ngOnInit() {
    this.getInitialService();
  }

  private getInitialService() {
    this.ops.getInitialService().subscribe(
      (res: any) => {
        this.currentServices.push(res.initialService);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  callService(service) {
    console.log(this.names[service])
    if(this.names[service]) {
      if(this.names[service].toUpperCase()[0] >= 'A' && this.names[service].toUpperCase()[0] <= 'M') {
        this.ops.callService(service, this.names[service]).subscribe(
          (res:any) => {
            if(res.nextServices[0] === 'exit')
              this.pathComplete = !this.pathComplete;
            this.currentServices = res.nextServices;
            this.saveToken(res.token);
          },
          (err) => {
              console.log("Error be like", err);
          }
        )
      }
      else if(this.names[service].toUpperCase()[0] >= 'N' && this.names[service].toUpperCase()[0] <= 'Z') {
        this.ops.callXMLService(service, this.names[service])
        .subscribe(
          (res:any) => {
            xml2js.parseString(res, function(err, result) {
              res = result.response;
            })
            if(res.nextServices[0] === 'exit')
              this.pathComplete = !this.pathComplete;
            this.currentServices = res.nextServices;
            this.saveToken(res.token[0]);
          },
          (err) => {
            console.log(err)
          }
        )
      }
    }
    else {
      alert('Please enter a name into the field and invoke the service');
    }
  }

  saveToken(token) {
    localStorage.setItem('token', token);
    this.getFlow();
  }

  getFlow() {
    this.ops.getFlow().subscribe(
      (res: any) => {
        this.flow = res.flow;
      },
      err => {
        console.log(err);
      }
    )
  }

  clearToken() {
    localStorage.removeItem('token');
  }

}
