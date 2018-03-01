import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const MARVEL_HEROS_URL = './assets/marvel-heros.json';
const DISNEY_CARTOONS_URL = './assets/disney-cartoons.json';

@Injectable()
export class SharedService {

	constructor(
		private http: Http
	) { }

	getMarvelPictures(): Observable<Object[]> {
		return this.http.get(MARVEL_HEROS_URL)
			.map((res: Response) => res.json());
	}

	getDisneyPictures(): Observable<Object[]> {
		return this.http.get(DISNEY_CARTOONS_URL)
			.map((res: Response) => res.json());
	}
}
