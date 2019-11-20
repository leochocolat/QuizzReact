import React from 'react';
import { NavLink } from 'react-router-dom';

class ThemeSection extends React.Component {
    constructor(props) {
        super(props);

        const pathToAssets = require.context(`../../assets/images/`, true);

        this.sectionStyle = {
            backgroundImage: `url(${pathToAssets(`./${this.props.image}`)})`
        }
    }
    
    render() {
        return (
            <NavLink to={`/quizz/${this.props.id}`}>
                <section className='section-theme' data-scroll data-scroll-call="anim-background">
                    <div className='section-theme__background-wrapper js-background-wrapper' style={this.sectionStyle}></div>
                    <h1 className="section-theme__title" data-scroll data-scroll-speed="1" data-scroll-call="anim-title">
                        {this.props.title}
                    </h1>
                </section>
            </NavLink>
        )
    }


}

export default ThemeSection;