import React , {Component}from 'react';
import ReactDOM from 'react-dom';
import SeasonDetail from './seasons';
import Loader from './loader';



class App extends Component{
    state = {
        lat : null,
        errMsg : ''
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {this.setState({lat : position.coords.latitude})},
            err => {this.setState({errMsg : err.message})}
        );
    }

    renderContent() {
        if (this.state.errMsg && !this.state.lat){
            return (
                <div>Error {this.state.errMsg}</div>
            );
        }

        if (!this.state.errMsg && this.state.lat) {
            return (<div> <SeasonDetail  lat = {this.state.lat}/></div>);
        }

        return (<div><Loader  /></div>);
    }
   

    render(){
        return(
        <div style={{border : '10px solid OrangeRed'}}>
            {this.renderContent()}
        </div>

        );
    }
}


ReactDOM.render(<App />, document.querySelector('#root'));