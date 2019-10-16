import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    test(){
      console.log('ce lien a été cliqué');
    }

}
