import LocomotiveScroll from 'locomotive-scroll';
import AnimTitleModule from './AnimTitleModule';
import AnimBackgroundModule from './AnimBackgroundModule';

class SmoothScrollModule {
    constructor() {
        this.ui = {
            animTitle: document.querySelectorAll('[data-scroll-call="anim-title"]'),
            animBackground: document.querySelectorAll('[data-scroll-call="anim-background"]'),
        }

        this.components = {
            animTitle: [],
            animBackground: [],
        }

        this.setup();
    }

    setup() {
        this.setupComponents();
        // this.setupSmoothScroll();
        // this.setupEventListeners();
    }

    setupComponents() {
        for (let i = 0; i < this.ui.animBackground.length; i++) {
            this.components.animBackground.push(new AnimBackgroundModule(this.ui.animBackground[i]));
        }
    }

    setupSmoothScroll(el) {
        this.scroll = new LocomotiveScroll({
            el: el,
            smooth: true,
            getDirection: true,
            getSpeed: true
        });
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.scroll.on('scroll', (e) => this.onScrollHandler(e));
        this.scroll.on('call', (e, state, object) => this.onCallHandler(e, state, object));
    }

    onScrollHandler(e) {
    }

    onCallHandler(e, state, object) {
        if (e === 'anim-title') {
            let animTitle = new AnimTitleModule(object.el);
            this.components.animTitle.push(animTitle);
        }
    }

    scrollTo(target) {
        let el = document.querySelector(target);
        this.scroll.scrollTo(target);
    }

    reset() {
        this.scroll.init();
        this.scroll.start();
    } 

}

export default SmoothScrollModule;
