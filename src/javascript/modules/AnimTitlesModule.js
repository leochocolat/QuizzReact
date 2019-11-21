import { TimelineLite, Power3, TweenLite } from 'gsap';

class AnimTitlesModule {
    constructor(els) {
        this.els = els;
        this.ui = {};
        this.setup();
    }

    setup() {
        this.setupSplitText();
        this.setupStartingPositions();
    }

    setupStartingPositions() {
        TweenLite.set(this.ui.spans, { y: 100 });
    }

    setupSplitText() {
        this.ui.spans = [];
        for (let i = 0; i < this.els.length; i++) {
            this.els[i].style.overflow = 'hidden';
            let content = this.els[i].innerHTML;
            this.els[i].innerHTML = '';
            let span = document.createElement('span');
            this.ui.spans.push(span);
            span.style.display = 'block';
            span.innerHTML = content;
            this.els[i].appendChild(span);
        }
    }

    setupTween() {
        this.timeline = new TimelineLite();
        this.timeline.staggerFromTo(this.ui.spans, 1, { y: 100 }, { y: 0, ease: Power3.easeInOut }, 0.1);
    }

    transitionIn() {
        this.timeline = new TimelineLite();
        this.timeline.staggerFromTo(this.ui.spans, 1, { y: 100 }, { y: 0, ease: Power3.easeInOut }, 0.1);
    }

    transitionOut() {
        this.timeline = new TimelineLite();
        this.timeline.staggerFromTo(this.ui.spans, 1, { y: 0 }, { y: -100, ease: Power3.easeInOut }, 0.1);
    }
}

export default AnimTitlesModule;
