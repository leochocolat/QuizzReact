import React from 'react';

class ThemeSection extends React.Component {
    constructor(props) {
        super(props);

        this.sectionStyle = {
            backgroundImage: `url(${this.props.image})`
        }
    }

    render() {
        return (
            <section className='section-theme'  style={this.sectionStyle}>
                <h1 className="section-theme__title">
                    {this.props.title}
                </h1>
            </section>
        )
    }


}

export default ThemeSection;