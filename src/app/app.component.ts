import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [DatePipe],
  template: `
    <h1 i18n="homepage main title|description@@123">Hello world</h1>
    <input type="text" placeholder="search" i18n-placeholder />
    <h2>{{ getTitle() }}</h2>
    <h3>{{ today | date : 'long' }}</h3>
    <!-- <p>{ var, plural - select, cas de figure1 { } cas de figure { }   }</p> -->
    <p>
      { apple(), plural, =0 {no apple} =1 { one apple } other {
      {{ apple() }} apples }}
    </p>
    <p>{ gender(), select, male {man} female {woman} }</p>
  `,
})
export class AppComponent {
  gender = signal('female');
  title = 'i18n';
  today = new Date();
  apple = signal(150);

  getTitle() {
    return $localize`I am a subtitle`;
  }
}
