import { Component,HostListener,OnInit, Output,EventEmitter } from '@angular/core';
import { ImagesarviceService } from '../services/imagesarvice.service';

import { Router } from '@angular/router';
import { DiscountcodeService } from '../services/discountcode.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  textBoxData: string = '';
  labelData: string = '';
 
  selectedImage:any| string | ArrayBuffer | null = null;
  discount!:boolean;
  discount1!:boolean;
  discountcode!:string;
  scratchnumber!:string;
  data = JSON.parse(JSON.stringify(localStorage.getItem('AddItems')));
  details = JSON.parse(this.data);
  imagedata1 :string | null = null;
  imagedata2 :string | null = null;
  imagedata3 :string | null = null;
  HostListener:any;
  language: string = ''; // Variable to store the selected language
  dropdownVisible: boolean = false; // Variable to control the visibility of the dropdown menu

  // clicktoggle()
  // {
  //   this.details =(this.details === 'empty') ? "JSON.parse(localStorage.getItem('AddItems') || '{}')" : 'empty';
  // }
  clicktoggle(){
  if (this.details === "none") {
    this.details  = "block";
  } else {
    this.details  = "none";
  }
}
togglePopup(): void {
  this.discount =true;
}
togglePopup1(): void {
  this.discount1 =true;
}
Scratchcard(){
  this.discount =false;
  this.dataService.sendData(this.textBoxData);
  this._router.navigate(['/MyCatalouge']);
}
Scratchcard1(){
  this.discount1 =false;
}

  // Function to change the language
  changeLanguage(language: string) {
    this.language = language;
  }
  edit()
  {
    this._router.navigate(['/BusinessRegistrationDetails']);
  }

  GetDetails()
{
  this._router.navigate(['/MyCatalouge']);
}

  // Function to toggle the visibility of the dropdown menu
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
  update()
  {
    this._router.navigate(['/AddItem']);

  }

  // Function to close the dropdown menu when clicking outside
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!(event.target as HTMLElement).classList.contains('dropbtn')) {
      this.dropdownVisible = false;
    }
  }
constructor(private imageService: ImagesarviceService, private _router: Router,private dataService: DiscountcodeService){
}
Terms!:boolean
popup(){
  this.Terms = true
}

Conditions(data:any){
this.Terms = false;
}


ngOnInit(){
  console.log(this.details)

 this.imagedata1 = this.imageService.getImageData1();
 this.imagedata2 = this.imageService.getImageData2();
 this.imagedata3 = this.imageService.getImageData3();
}
  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       this.selectedImage = e.target?.result;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

}
