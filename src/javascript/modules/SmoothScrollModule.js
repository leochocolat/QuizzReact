import LocomotiveScroll from 'locomotive-scroll';

class SmoothScrollModule {
    constructor(el) {
        this.el = el;

        this.ui = {

        }

        this.setup();
    }

    setup() {
        this.setupSmoothScroll();
        this.setupEventListeners();
    }

    setupSmoothScroll() {
        this.scroll = new LocomotiveScroll({
            el: this.el,
            smooth: true,
            getDirection: true,
            getSpeed: true
        });
    }

    update() {
        this.scroll.init();
        this.scroll.start();
    } 

    setupEventListeners() {
        this.scroll.on('scroll', (e) => this.onScrollHandler(e));
        this.scroll.on('call', (e) => this.onCallHandler(e));
    }

    onScrollHandler(e) {
        console.log(e);
    }

    onCallHandler(e) {
        console.log(e);
    }

}

export default SmoothScrollModule;