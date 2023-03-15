import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-header-library',
  templateUrl: './header-library.component.html',
  styleUrls: ['./header-library.component.css']
})
export class HeaderLibraryComponent implements OnInit{
  
  @Input() logo!: string;
  @Input() links!: Links[];
  @Input() background_color!: string;
  @Input() color_1!: string;
  @Input() color_2!: string;
  @Input() shadow!: boolean;

  ngOnInit(): void {
    document.documentElement.style.setProperty('--color_1', this.color_1);
    document.documentElement.style.setProperty('--color_2', this.color_2);
  }

  styleObject() {
    let styles = {
      'background-color': '',
      'box-shadow': '',
    }
    styles['background-color'] = this.background_color ? this.background_color : 'transparent';
    styles['box-shadow'] = this.shadow ? '0px 0px 20px rgba(0, 0, 0, 0.2)' : '';
    return styles;
  }

}

export interface Links {
      title: string;
      url: string;
      highlight?: boolean;
};
