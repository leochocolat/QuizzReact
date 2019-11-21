import { TimelineLite, Power0 } from 'gsap';

class AnimBackgroundModule {
    constructor(el) {
        this.el = el;

        this.ui = {
            backgroundWrapper: this.el.querySelector('.js-background-wrapper'),
        }

        this.setup();
    }

    setup() {
        this.setupTween();
    }

    setupTween() {
        this.timeline = new TimelineLite({ paused: true });
        this.timeline.fromTo(this.ui.backgroundWrapper, 1, { scale: 1 }, { scale: 1.2, ease: Power0.easeNone });
    }

    progress(progress) {
        this.timeline.progress(progress);
    }
}

export default AnimBackgroundModule;
