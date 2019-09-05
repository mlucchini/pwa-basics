import React from 'react';
import Conditional from 'react-simple-conditional';
import './InstallationPrompt.css';

class InstallationPrompt extends React.Component {
    state = {
        installPrompt: null,
        installButton: false,
    };

    installApp = async () => {
        if (!this.state.installPrompt) return false;
        this.state.installPrompt.prompt();
        this.setState({installPrompt: null});
        this.setState({installButton: false});
    }

    componentDidMount() {
        window.addEventListener('beforeinstallprompt', e => {
            console.log('Received event beforeinstallprompt');
            e.preventDefault();
            this.setState({installPrompt: e});
            if ((window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true) {
                return false;
            }
            this.setState({installButton: true});
        });
    }

    render() {
        return (
            <div className="InstallationPrompt">
                <Conditional condition={this.state.installButton}>
                    <button className="InstallButton" onClick={this.installApp}>
                        Install the Visitor App!
                    </button>
                </Conditional>
            </div>
        );
    }
}

export default InstallationPrompt;
