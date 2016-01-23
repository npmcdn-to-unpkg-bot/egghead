import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        let txt = this.props.txt;
        let cat = this.props.cat;
        return (
            <div>
                <h1>{txt}, {cat}</h1>
            </div>
        );

    }
}

//const App = () => <h1>Hello Wonmin</h1>

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: 'this is the default txt'
}

ReactDOM.render(
    <App cat={36} />,
    document.getElementById('app')
);