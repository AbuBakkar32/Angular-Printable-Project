import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  aData = {
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
    a7: '',
    a8: '',
    a9: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  print(Name: string) {
    // @ts-ignore
    var printContents = document.getElementById(Name).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    setTimeout(() => {
      window.location.reload();
    },500);
  }

  textData(event : any){
    document.getElementById("a1")?.setAttribute('value', this.aData.a1);
    document.getElementById("a2")?.setAttribute('value', this.aData.a2);
    document.getElementById("a3")?.setAttribute('value', this.aData.a3);
    document.getElementById("a4")?.setAttribute('value', this.aData.a4);
    document.getElementById("a5")?.setAttribute('value', this.aData.a5);
    document.getElementById("a6")?.setAttribute('value', this.aData.a6);
    document.getElementById("a7")?.setAttribute('value', this.aData.a7);
    document.getElementById("a8")?.setAttribute('value', this.aData.a8);
    document.getElementById("a9")?.setAttribute('value', this.aData.a9);
  }
}
