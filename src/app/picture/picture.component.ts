import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
	selector: 'app-picture',
	templateUrl: './picture.component.html',
	styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {
	marvelData: any = [];
	disneyData: any = [];
	constructor(private ss: SharedService) { }

	ngOnInit() {
		this.ss.getMarvelPictures().subscribe((data) => {
			this.marvelData = (data.hasOwnProperty('imgUrls')) ? data['imgUrls'] : [];
		});
		this.ss.getDisneyPictures().subscribe((data) => {
			this.disneyData = (data.hasOwnProperty('imgUrls')) ? data['imgUrls'] : [];
		});
	}

}
