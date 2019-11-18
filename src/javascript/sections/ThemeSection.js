import React from 'react';

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
            <section className='section-theme' style={this.sectionStyle}>
                <h1 className="section-theme__title">
                    {this.props.title}
                </h1>
            </section>
        )
    }

    
}

export default ThemeSection;