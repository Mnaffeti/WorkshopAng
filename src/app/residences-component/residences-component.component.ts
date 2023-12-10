import { Component, OnInit } from '@angular/core'
import { Residence } from 'src/core/Models/Residence'
import { Apartment } from 'src/core/Models/Appartement'
import { NgFor } from '@angular/common';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css']
})
export class ResidencesComponentComponent implements OnInit{

  public tmpo="";
  public affiche=true;
  public w=true ;

  ngOnInit() {
    console.log(this.listResidences)
    console.log(this.listApartments)
  }

  listResidences:Residence[]=[
       {id:1,name: "El fel",address:"Borj Cedria",
    image:"../../assets/images/R1.jpg"},
        {id:2,name: "El yasmine",
    address:"Ezzahra",image:"../assets/images/R2.jpg"},
        {id:3,name: "El Arij",
    address:"Rades",image:"../../assets/images/R3.jpg"},
        {id:4,name: "El Anber",address:"Manzah 5",
    image:"../../assets/images/R4.jpg"}
      ]
    listApartments:Apartment[]=[

      {id:1,appartNum:1,floorNum:0,surface:100,terrace:"oui",surfaceTerrace:20,category:"S+1",
      description:"Appartement S+1",residence:this.listResidences[0] },
      {id:2,appartNum:2,floorNum:0,surface:130,terrace:"non",surfaceTerrace:0,category:"S+2",
      description:"Appartement S+2",residence:this.listResidences[1]}
    ]


    public AfficheAppartement(id:Number):string{
    this.affiche=false;
    let tmp ="" ;
      this.listApartments.forEach(function (app){
        if(app.id==id){
             tmp=app.description;
            console.log(tmp)
        }
      })
      if(tmp==null){
          console.log('aucun app');
      }
      this.tmpo=tmp ;
      return this.tmpo ; 
    }

    AfficheAppartementRes(){
      if(this.affiche){
        this.affiche=false;
      }else{
        this.affiche=true;
      }
      
    }
}
