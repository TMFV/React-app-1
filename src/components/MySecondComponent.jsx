import React from 'react';

class MySecondComponent extends React.Component {
    render() {
        return (
            <div className="second-component">
                <h4>Second Component!!!</h4>
                <p>Text Class component React</p>
                <h3>@2{ this.props.userb.name }</h3>
            </div>
        )
    }
 }

export default MySecondComponent;