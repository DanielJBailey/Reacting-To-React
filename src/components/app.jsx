import React, { Component } from 'react';
import './styles.css';


// const App = (props) => {
//     let element = <h1>{props.string}</h1>;
//     return element;
// }

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'This is my first lab for Covalence',
            place: 'Type your name:',
            load: 'Page Loading...',
            name: '',
            hasLoaded: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            hasLoaded: !prevState.hasLoaded
        }));
    }

    handleInputChange = (value) => {
        this.setState({ name: value })
    }

    render() {

        if (this.state.hasLoaded === true) {

            return (

                <React.Fragment>
                    <h1 className='header-text'> {this.props.string} </h1>
                    <h1 className='header-text'> {this.state.text} </h1>
                    <input
                        placeholder={this.state.place}
                        className='input-box'
                        value={this.state.name}
                        onChange={(event) => this.handleInputChange(event.target.value)}
                    />
                    <br />
                    <button
                        className='btn btn-lg button ml-4 mt-4'
                        onClick={this.handleClick}
                    >   Hide Page</button>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <h1 className='header-text'> {this.state.load} </h1>
                    <button
                        className='btn btn-lg button ml-4 mt-4'
                        onClick={this.handleClick}
                    >   Load Page</button>
                </React.Fragment>
            )
        }
    }
}

export default App