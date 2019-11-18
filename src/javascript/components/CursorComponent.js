import React from 'react';
import { TweenLite } from 'gsap';

class CursorComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mouseX: 0,
            mouseY: 0,
        };

        this.setup();
    }

    render() {
        const style = {
            transform: `translate(${this.state.mouseX}px, ${this.state.mouseY}px)` 
        }
            
        return (
            <div className="cursor" style={style}>
                Play
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
        this.setState({
            mouseX: e.clientX,
            mouseY: e.clientY,
        });
    }
}

export default CursorComponent;