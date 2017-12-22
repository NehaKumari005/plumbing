import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab';

@Component({
    selector: 'tabs',
    template: `

       <div class="row">
       <div class="col-lg-4 col-md-4">
           <ul class="list-group">
               <li class="list-group-item cursor-pointer" *ngFor="let tab of tabs" [class.active]="selectedTab===tab" (click)="onSelect(tab)">{{tab.tabTitle}}</li>
             </ul>
       </div>
       <div class="col-lg-8 col-md-8">
           <div class="panel panel-default">
           <ng-content></ng-content>
             </div>
       </div>
     </div>
    `
})
export class TabsComponent implements AfterContentInit {
    @ContentChildren(TabComponent)
    tabs: QueryList<TabComponent>;

    selectedTab: TabComponent;

    ngAfterContentInit() {
        this.select(this.tabs.first);
    }

    onSelect(tab) {
        this.select(tab);
    }

    select(tab) {
        this.tabs.forEach((item) => {
            item.show = false;
        });

        this.selectedTab = tab;
        this.selectedTab.show = true;
    }
}