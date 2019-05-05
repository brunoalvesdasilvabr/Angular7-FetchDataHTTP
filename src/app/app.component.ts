import { DataService } from './data.service';
import { State } from './state.module';
import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  states: State[];
  filteredStates:State[];
  private _searchItem:string;
  get searchItem():string{
    return this._searchItem
  }
  set searchItem(value: string){
    this._searchItem = value;
    this.filteredStates = this.filterName(value)
  }

  filterName(searchItem: string){
    return this.states.filter(State => State.nome.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1)
  }

  

constructor(private dataService: DataService){}

ngOnInit(){
this.filteredStates = this.states;
this.dataService.getStates().subscribe(data => this.states = data);

}


// triggerViewmore(){

//  console.log(this.vm.style.display = "block");
// }

//  fecharViewMore(){
//   this.vm.style.display = "none";
//  }
}


