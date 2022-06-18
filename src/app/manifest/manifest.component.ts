import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.css']
})
export class ManifestComponent implements OnInit {

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
    a18: '',
    a19: '',
    a20: '',
    a21: '',
    a22: '',
    a23: '',
    a24: '',
    a25: '',
    a26: '',
    a27: '',
    a28: '',
    a29: '',
    a30: '',
    a31: '',
    a32: '',
    a33: '',
    a34: '',
    a35: '',
    a36: '',
    a37: '',
    a38: '',
    a39: '',
    a40: '',
    a41: '',
    a42: '',
    a43: '',
    a44: '',
    a45: '',
    a46: '',
    a47: '',
    a48: '',
    a49: '',
    a50: '',
    a51: '',
    a52: '',
    a53: '',
    a54: '',
    a55: '',
    a56: '',
    a57: '',
    a58: '',
    a59: '',
    a60: '',
    a61: '',
    a62: '',
    a63: '',
    a64: '',
    a65: '',
    a66: '',
    a67: '',
    a68: '',
    a69: '',
    a70: '',
    a71: '',
    a72: '',
    a73: '',
    a74: '',
    a75: '',
    a76: '',
    a77: '',
    a78: '',
    a79: '',
    a80: '',
    a81: '',
    a82: '',
    a83: '',
    a84: '',
    a85: '',
    a86: '',
    a87: '',
    a88: '',
    a89: '',
    a90: '',
    a91: '',
    a92: '',
    a93: '',
    a94: '',
    a95: '',
    a96: '',
    a97: '',
    a98: '',
    a99: '',
    a100: '',
    a101: '',
    a102: '',
    a103: '',
    a104: '',
    a105: '',
    a106: '',
    a107: '',
    a108: '',
    a109: '',
    a110: '',
    a111: '',
    a112: '',
    a113: '',
    a114: '',
    a115: '',
    a116: '',
    a117: '',
    a118: '',
    a119: '',
    a120: '',
    a121: '',
    a122: '',
    a123: '',
    a124: '',
    a125: '',
    a126: '',
    a127: '',
    
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
    document.getElementById("a10")?.setAttribute('value', this.aData.a10);
    document.getElementById("a11")?.setAttribute('value', this.aData.a11);
    document.getElementById("a12")?.setAttribute('value', this.aData.a12);
    document.getElementById("a13")?.setAttribute('value', this.aData.a13);
    document.getElementById("a14")?.setAttribute('value', this.aData.a14);
    document.getElementById("a15")?.setAttribute('value', this.aData.a15);
    document.getElementById("a16")?.setAttribute('value', this.aData.a16);
    document.getElementById("a17")?.setAttribute('value', this.aData.a17);
    document.getElementById("a18")?.setAttribute('value', this.aData.a18);
    document.getElementById("a19")?.setAttribute('value', this.aData.a19);
    document.getElementById("a20")?.setAttribute('value', this.aData.a20);
    document.getElementById("a21")?.setAttribute('value', this.aData.a21);
    document.getElementById("a22")?.setAttribute('value', this.aData.a22);
    document.getElementById("a23")?.setAttribute('value', this.aData.a23);
    document.getElementById("a24")?.setAttribute('value', this.aData.a24);
    document.getElementById("a25")?.setAttribute('value', this.aData.a25);
    document.getElementById("a26")?.setAttribute('value', this.aData.a26);
    document.getElementById("a27")?.setAttribute('value', this.aData.a27);
    document.getElementById("a28")?.setAttribute('value', this.aData.a28);
    document.getElementById("a29")?.setAttribute('value', this.aData.a29);
    document.getElementById("a30")?.setAttribute('value', this.aData.a30);
    document.getElementById("a31")?.setAttribute('value', this.aData.a31);
    document.getElementById("a32")?.setAttribute('value', this.aData.a32);
    document.getElementById("a33")?.setAttribute('value', this.aData.a33);
    document.getElementById("a34")?.setAttribute('value', this.aData.a34);
    document.getElementById("a35")?.setAttribute('value', this.aData.a35);
    document.getElementById("a36")?.setAttribute('value', this.aData.a36);
    document.getElementById("a37")?.setAttribute('value', this.aData.a37);
    document.getElementById("a38")?.setAttribute('value', this.aData.a38);
    document.getElementById("a39")?.setAttribute('value', this.aData.a39);
    document.getElementById("a40")?.setAttribute('value', this.aData.a40);
    document.getElementById("a41")?.setAttribute('value', this.aData.a41);
    document.getElementById("a42")?.setAttribute('value', this.aData.a42);
    document.getElementById("a43")?.setAttribute('value', this.aData.a43);
    document.getElementById("a44")?.setAttribute('value', this.aData.a44);
    document.getElementById("a45")?.setAttribute('value', this.aData.a45);
    document.getElementById("a46")?.setAttribute('value', this.aData.a46);
    document.getElementById("a47")?.setAttribute('value', this.aData.a47);
    document.getElementById("a48")?.setAttribute('value', this.aData.a48);
    document.getElementById("a49")?.setAttribute('value', this.aData.a49);
    document.getElementById("a50")?.setAttribute('value', this.aData.a50);
    document.getElementById("a51")?.setAttribute('value', this.aData.a51);
    document.getElementById("a52")?.setAttribute('value', this.aData.a52);
    document.getElementById("a53")?.setAttribute('value', this.aData.a53);
    document.getElementById("a54")?.setAttribute('value', this.aData.a54);
    document.getElementById("a55")?.setAttribute('value', this.aData.a55);
    document.getElementById("a56")?.setAttribute('value', this.aData.a56);
    document.getElementById("a57")?.setAttribute('value', this.aData.a57);
    document.getElementById("a58")?.setAttribute('value', this.aData.a58);
    document.getElementById("a59")?.setAttribute('value', this.aData.a59);
    document.getElementById("a60")?.setAttribute('value', this.aData.a60);
    document.getElementById("a61")?.setAttribute('value', this.aData.a61);
    document.getElementById("a62")?.setAttribute('value', this.aData.a62);
    document.getElementById("a63")?.setAttribute('value', this.aData.a63);
    document.getElementById("a64")?.setAttribute('value', this.aData.a64);
    document.getElementById("a65")?.setAttribute('value', this.aData.a65);
    document.getElementById("a66")?.setAttribute('value', this.aData.a66);
    document.getElementById("a67")?.setAttribute('value', this.aData.a67);
    document.getElementById("a68")?.setAttribute('value', this.aData.a68);
    document.getElementById("a69")?.setAttribute('value', this.aData.a69);
    document.getElementById("a70")?.setAttribute('value', this.aData.a70);
    document.getElementById("a71")?.setAttribute('value', this.aData.a71);
    document.getElementById("a72")?.setAttribute('value', this.aData.a72);
    document.getElementById("a73")?.setAttribute('value', this.aData.a73);
    document.getElementById("a74")?.setAttribute('value', this.aData.a74);
    document.getElementById("a75")?.setAttribute('value', this.aData.a75);
    document.getElementById("a76")?.setAttribute('value', this.aData.a76);
    document.getElementById("a77")?.setAttribute('value', this.aData.a77);
    document.getElementById("a78")?.setAttribute('value', this.aData.a78);
    document.getElementById("a79")?.setAttribute('value', this.aData.a79);
    document.getElementById("a80")?.setAttribute('value', this.aData.a80);
    document.getElementById("a81")?.setAttribute('value', this.aData.a81);
    document.getElementById("a82")?.setAttribute('value', this.aData.a82);
    document.getElementById("a83")?.setAttribute('value', this.aData.a83);
    document.getElementById("a84")?.setAttribute('value', this.aData.a84);
    document.getElementById("a85")?.setAttribute('value', this.aData.a85);
    document.getElementById("a86")?.setAttribute('value', this.aData.a86);
    document.getElementById("a87")?.setAttribute('value', this.aData.a87);
    document.getElementById("a88")?.setAttribute('value', this.aData.a88);
    document.getElementById("a89")?.setAttribute('value', this.aData.a89);
    document.getElementById("a90")?.setAttribute('value', this.aData.a90);
    document.getElementById("a91")?.setAttribute('value', this.aData.a91);
    document.getElementById("a92")?.setAttribute('value', this.aData.a92);
    document.getElementById("a93")?.setAttribute('value', this.aData.a93);
    document.getElementById("a94")?.setAttribute('value', this.aData.a94);
    document.getElementById("a95")?.setAttribute('value', this.aData.a95);
    document.getElementById("a96")?.setAttribute('value', this.aData.a96);
    document.getElementById("a97")?.setAttribute('value', this.aData.a97);
    document.getElementById("a98")?.setAttribute('value', this.aData.a98);
    document.getElementById("a99")?.setAttribute('value', this.aData.a99);
    document.getElementById("a100")?.setAttribute('value', this.aData.a100);
    document.getElementById("a101")?.setAttribute('value', this.aData.a101);
    document.getElementById("a102")?.setAttribute('value', this.aData.a102);
    document.getElementById("a103")?.setAttribute('value', this.aData.a103);
    document.getElementById("a104")?.setAttribute('value', this.aData.a104);
    document.getElementById("a105")?.setAttribute('value', this.aData.a105);
    document.getElementById("a106")?.setAttribute('value', this.aData.a106);
    document.getElementById("a107")?.setAttribute('value', this.aData.a107);
    document.getElementById("a108")?.setAttribute('value', this.aData.a108);
    document.getElementById("a109")?.setAttribute('value', this.aData.a109);
    document.getElementById("a110")?.setAttribute('value', this.aData.a110);
    document.getElementById("a111")?.setAttribute('value', this.aData.a111);
    document.getElementById("a112")?.setAttribute('value', this.aData.a112);
    document.getElementById("a113")?.setAttribute('value', this.aData.a113);
    document.getElementById("a114")?.setAttribute('value', this.aData.a114);
    document.getElementById("a115")?.setAttribute('value', this.aData.a115);
    document.getElementById("a116")?.setAttribute('value', this.aData.a116);
    document.getElementById("a117")?.setAttribute('value', this.aData.a117);
    document.getElementById("a118")?.setAttribute('value', this.aData.a118);
    document.getElementById("a119")?.setAttribute('value', this.aData.a119);
    document.getElementById("a120")?.setAttribute('value', this.aData.a120);
    document.getElementById("a121")?.setAttribute('value', this.aData.a121);
    document.getElementById("a122")?.setAttribute('value', this.aData.a122);
    document.getElementById("a123")?.setAttribute('value', this.aData.a123);
    document.getElementById("a124")?.setAttribute('value', this.aData.a124);
    document.getElementById("a125")?.setAttribute('value', this.aData.a125);
    document.getElementById("a126")?.setAttribute('value', this.aData.a126);
    document.getElementById("a127")?.setAttribute('value', this.aData.a127);

  }

}
