import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatFormFieldModule,
		MatInputModule,
		MatTabsModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
