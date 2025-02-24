import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { DateDisplayComponent } from './date-display/date-display.component';

@NgModule({
  declarations: [ButtonComponent, DateDisplayComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, DateDisplayComponent]
})
export class SharedModule {}