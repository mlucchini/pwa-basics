import React from 'react';
import './Geolocation.css';

const positionOptions = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
};

class Geolocation extends React.Component {
    state = {
        positionWatchId: null,
        position: {
            coords: {
                longitude: '...',
                latitude: '...',
            },
        }
    };

    positionUpdated = pos => {
        this.setState({position: pos})
    }

    positionError = err => {
        console.warn('Position error (' + err.code + '): ' + err.message);
    }

    componentDidMount() {
        const watchId = navigator.geolocation.watchPosition(this.positionUpdated, this.positionError, positionOptions);
        this.setState({positionWatchId: watchId});
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.state.positionWatchId);
    }

    render() {
        return (
            <div className="Geolocation">
                Longitude: {`${this.state.position.coords.longitude}`}, 
                latitude: {`${this.state.position.coords.latitude}`}
            </div>
        );
    }
}

export default Geolocation;
