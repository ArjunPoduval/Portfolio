import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  standalone: true
})
export class FadeInDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.el.nativeElement;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          this.observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
