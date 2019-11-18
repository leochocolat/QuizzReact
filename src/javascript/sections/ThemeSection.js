import React from 'react';

class ThemeSection extends React.Component {
    constructor(props) {
        super(props);

        this.sectionStyle = {
            backgroundImage: `url(${this.props.image})`
        }
    }

    clickHandler() {
        // got to route
        console.log(this.props.title);
    }

    render() {
        return (
            <section className='section-theme' style={this.sectionStyle} onClick={() => this.clickHandler()}>
                <div className="section-theme__layer"></div>
                <h1 className="section-theme__title">
                    {this.props.title}
                </h1>
            </section>
        )
    }


}

export default ThemeSection;