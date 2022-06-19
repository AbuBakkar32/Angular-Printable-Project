import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-anex',
  templateUrl: './anex.component.html',
  styleUrls: ['./anex.component.css']
})
export class AnexComponent implements OnInit {
// this is initial data for the text. dont change this
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
    a10: '',
    a11: '',
    a12: '',
    a13: '',
    a14: '',
    a15: '',
    a16: '',
    a17: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.textData(this.route.snapshot.paramMap.get('id'));
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
    document.getElementById("a10")?.setAttribute('value', this.aData.a10);
    document.getElementById("a11")?.setAttribute('value', this.aData.a11);
    document.getElementById("a12")?.setAttribute('value', this.aData.a12);
    document.getElementById("a13")?.setAttribute('value', this.aData.a13);
    document.getElementById("a14")?.setAttribute('value', this.aData.a14);
    document.getElementById("a15")?.setAttribute('value', this.aData.a15);
    document.getElementById("a16")?.setAttribute('value', this.aData.a16);
    document.getElementById("a17")?.setAttribute('value', this.aData.a17);

  }


}
