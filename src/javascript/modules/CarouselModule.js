import img1 from '../../assets/images/breakingBad_background.jpg';
import img2 from '../../assets/images/fifthElement_background.jpg';
import img3 from '../../assets/images/gameOfThrones_background.jpg';
import img4 from '../../assets/images/starWars_background.jpg';
import img5 from '../../assets/images/jurassicPark_background.jpg';
import img6 from '../../assets/images/hungerGames_background.jpg';
import img7 from '../../assets/images/marvel_background.jpg';
import { TweenLite } from 'gsap';

class CarouselModule {
    constructor(el) {
        this.el = el;
        this.images = [img1, img2, img3, img4, img5, img6, img7];
        this.currentIndex = Math.ceil(Math.random() * this.images.length);
        this.nextIndex = 1;

        this.setup();
    }

    setup() {
        this.setupImage();
        this.setupZoomTween();
        this.updateImage(0);
        
        // setInterval(() => {
        //     this.updateImage((this.currentIndex + 1) % this.images.length);
        //     this.setupZoomTween();
        // }, 2000)
    }

    setupImage() {
        this.image = new Image();
        this.image.src = this.images[this.currentIndex];
        this.el.appendChild(this.image);
    }

    setupZoomTween() {
        // TweenLite.fromTo(this.image1, 2, { scale: 1 }, { scale: 2 });
        // TweenLite.fromTo(this.image1, 2, { autoAlpha: 1 }, { autoAlpha: 0 });
    }

    updateImage(index) {
        // this.currentIndex = index;
        // this.image.src = this.images[index];
    }
}

export default CarouselModule;