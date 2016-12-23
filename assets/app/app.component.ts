import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles:[`
    	.button {
    		width:500px;
    		height:200px;
    	}
	`]
})

export class AppComponent implements OnInit{

	private serverIP: String = "http://localhost:3000";

	constructor(private http: Http){};

	ngOnInit(){
	}

	postRequest(string: String){
		const body = JSON.stringify({value:string});
		const headers = new Headers({'Content-Type': 'application/json'});
		return this.http.post(this.serverIP + '/value', body, {headers: headers})
			.map((response: Response) => response.json())
			.catch((error: Response) => Observable.throw(error.json()));
	}

	onRightButton(){
		var value = 'right';
		console.log('a');
		this.postRequest(JSON.stringify({direction:value}))
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
	}

	onLeftButton(){
		var value = 'left';
		console.log('a');
		this.postRequest(JSON.stringify({direction:value}))
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
	}
	onApplyButton(){
		var speed = 1;
		this.postRequest(JSON.stringify({speed:speed}))
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
	}
    
}