``` typescript

import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appBgImageSlider]'
})
export class BgImageSliderDirective implements OnInit, OnDestroy {
  @Input() interval: number = 5; // 默认5秒切换一次

  private intervalId: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.startSlider();
  }

  ngOnDestroy() {
    this.stopSlider();
  }

  private startSlider() {
    this.intervalId = setInterval(() => {
      this.cycleBackgroundImage();
    }, this.interval * 1000);
  }

  private stopSlider() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private cycleBackgroundImage() {
    const bgImages = [
      'url(assets/image1.jpg)',
      'url(assets/image2.jpg)',
      'url(assets/image3.jpg)'
    ];

    const currentBg = this.el.nativeElement.style.backgroundImage;
    const currentIndex = bgImages.findIndex(bg => bg === currentBg);
    const nextIndex = (currentIndex + 1) % bgImages.length;

    this.el.nativeElement.style.backgroundImage = bgImages[nextIndex];
  }
}
```

### 使用指令
``` html
<div appBgImageSlider [interval]="10"></div>
```