import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-moving-tiles',
    templateUrl: './moving-tiles.component.html',
    styleUrls: ['./moving-tiles.component.scss']
})
export class MovingTilesComponent implements OnInit {
    @Input('tilesContext') imgData;
    public tileItems: any = new Array(9).fill({});
    public selectedTile: number = Math.floor(Math.random() * 9);
    constructor() { }

    ngOnInit() {
        this.createItemOrder();
        this.selectTile({}, this.tileItems[this.selectedTile]);
    }

    selectTile(event, item) {
        this.selectedTile = item.id;
        this.tileItems.map((v, i) => v.order = i);
        if (item.id % 2 !== 0) {
            if (item.id <= this.tileItems.length/2) {
                this.tileItems[item.id].order -= 1;
                this.tileItems[item.id - 1].order += 1;
            } else {
                this.tileItems[item.id].order += 1;
                this.tileItems[item.id + 1].order -= 1;
            }
        } 
    }

    createItemOrder() {
        this.tileItems = this.tileItems.map(function(val, i) {
            let rObj = {};
            rObj['order'] = i;
            rObj['id'] = i;
            return rObj;
        });
        //console.log('after', this.tileItems);
    }
}
