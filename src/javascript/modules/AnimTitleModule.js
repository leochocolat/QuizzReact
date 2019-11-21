import { TimelineLite, Power3 } from 'gsap';

class AnimTitleModule {
    constructor(el) {
        this.el = el;
        this.ui = {};
        this.setup();
    }

    setup() {
        this.setupSplitText();
        this.setupTween();
    }

    setupSplitText() {
        let content = this.el.innerHTML;
        this.el.innerHTML = '';
        let span = document.createElement('span');
        this.ui.span = span;
        span.innerHTML = content;
        this.el.appendChild(span);
    }

    setupTween() {
        this.timeline = new TimelineLite();
        this.timeline.fromTo(this.ui.span, 1, { y: 100 }, { y: 0, ease: Power3.easeInOut });
    }
}

export default AnimTitleModule;
