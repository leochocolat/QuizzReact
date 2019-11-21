import { TimelineLite, Linear } from 'gsap';

class TimeModule {
    constructor(duration) {
        this.duration = duration;
        this.el = document.querySelector('.js-timer');
        this.setup();
    }

    setup() {
        this.startTime = Date.now();
        this.setupTween();
    }

    setupTween() {
        this.timeline = new TimelineLite({ ease: Linear.easeNone });

        this.timeline.fromTo(this.el, this.duration, { scaleX: 0 }, { scaleX: 1 });
    }

    restart() {
        this.timeline.restart();
    }
}

export default TimeModule;