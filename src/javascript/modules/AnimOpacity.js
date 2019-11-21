import { TweenLite, Power1 } from "gsap";

class AnimOpacity {
    constructor(items) {
        this.items = items;
    }

    transitionIn() {
        TweenLite.fromTo(this.items, .5, { opacity: 0 }, { opacity: 1, ease: Power1.easeInOut });
    }
    
    transitionOut() {
        TweenLite.fromTo(this.items, .5, { opacity: 1 }, { opacity: 0, ease: Power1.easeInOut });
    }

}

export default AnimOpacity;