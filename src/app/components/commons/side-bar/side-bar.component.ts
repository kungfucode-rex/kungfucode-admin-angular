import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public menus: Array<MenuItem>;
  constructor() { }

  ngOnInit() {
    this.menus = [
      new MenuItem('菜单一', '#1', [
          new MenuItem('菜单一1', '#11', null),
          new MenuItem('菜单一2', '#12', null),
          new MenuItem('菜单一3', '#13', [
            new MenuItem('菜单一3-1', '#131', null)
          ]),
          new MenuItem('菜单一4', '#14', null),
        ]),
      new MenuItem('菜单二', '#2', null),
      new MenuItem('菜单三', '#3', null),
      new MenuItem('菜单四', '#4', null)
    ];
  }

  clickMenu (menu: MenuItem) {
    console.log('click menu: ' + menu.name);
  }
}

export class MenuItem {
  constructor(
    public name: string,
    public link: string,
    public subMenus: Array<MenuItem>
  ) {}
}
