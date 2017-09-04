import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-reset',
    template: `
    <ion-row>
        <ion-col>
            <button ion-button color="danger" small block (click)="onReset('all')">Reset All</button>
        </ion-col>
        <ion-col>
            <button ion-button color="danger" small block (click)="onReset('tap')">Reset Taps</button>
        </ion-col>
        <ion-col>
            <button ion-button color="danger" small block (click)="onReset('press')">Reset Press</button>
        </ion-col>
    </ion-row>`
})
export class ResetComponent{
    @Output() didReset = new EventEmitter<string>(); //access from a parent component
    onReset(type: string) {
        this.didReset.emit(type);
    }
}