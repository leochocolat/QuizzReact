import React from 'react';
import { TweenLite } from 'gsap';

class CursorComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mouseX: 0,
            mouseY: 0,
        };

        this.tweenObj = {
            opacity: 0
        }

        this.setup();
    }

    render() {
        const style = {
            transform: `translate(${this.state.mouseX}px, ${this.state.mouseY}px)`,
            opacity: this.state.opacity
        }
            
        return (
            <div className="cursor-container" data-scroll data-scroll-sticky data-scroll-target=".js-scroll-container">
                <div className="cursor" style={style}>
                    Play
                </div>
            </div>
        )
    }

    setup() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        window.addEventListener('mousemove', (e) => this.mousemoveHandler(e))
    }

    mousemoveHandler(e) {
        TweenLite.to(this.tweenObj, .5, { opacity: 1 });
        this.setState({
            mouseX: e.clientX,
            mouseY: e.clientY,
            opacity: this.tweenObj.opacity
        });
    }
}

export default CursorComponent;