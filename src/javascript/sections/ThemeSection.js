import React from 'react';

class ThemeSection extends React.Component {
    constructor(props) {
        super(props);

        const pathToAssets = require.context(`../../assets/images/`, true);

        this.sectionStyle = {
            backgroundImage: `url(${pathToAssets(`./${this.props.image}`)})`
        }
    }

    clickHandler() {
        // got to route
        console.log(this.props.title);
    }

    render() {
        return (
            <section className='section-theme' onClick={() => this.clickHandler()}>
                <div className='section-theme__background-wrapper' style={this.sectionStyle}></div>
                <h1 className="section-theme__title">
                    {this.props.title}
                </h1>
            </section>
        )
    }

    
}

export default ThemeSection;