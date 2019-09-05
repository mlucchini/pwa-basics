import React from 'react';
import './LocalNotifications.css';

class LocalNotifications extends React.Component {
    state = {
        permission: this.isPermissionGranted(Notification.permission),
    };

    isPermissionGranted(permission) {
        return permission === 'granted' ? true : false;
    }

    componentDidMount() {
        if (!this.isPermissionGranted(Notification.permission)) {
            console.log('Requesting notifications permission');
            Notification.requestPermission(result => this.setState({permission: this.isPermissionGranted(result)}));
        }
    }

    sendNonPersistentNotification = () => {
        try {
            new Notification('Welcome, non-persistent!');
        } catch (err) {
            console.error('Notification API error: ' + err);
        }
    }

    sendPersistentNotification = async () => {
        try {
            const registration = await navigator.serviceWorker.getRegistration('./');
            registration.showNotification('Welcome, persistent!');
        } catch (err) {
            console.error('Send persistent notification error: ' + err);
        }
    }

    render() {
        return (
            <div className="LocalNotifications">
                <div>
                    <button onClick={this.sendNonPersistentNotification}>Send a non-persistent notification</button>
                </div>
                <div>
                    <button onClick={this.sendPersistentNotification}>Send a persistent notification</button>
                </div>
                <p>Notifications are permitted: {this.state.permission ? 'true' : 'false'}</p>
            </div>
        );
    }
}

export default LocalNotifications;
