import React from 'react';
import QrReader from 'react-qr-reader'
import './Scanner.css';

class Scanner extends React.Component {
    state = {
        scannedText: '',
    };

    scanUpdated = data => {
        this.setState({scannedText: data})
    }

    scanError = err => {
        this.setState({scannedText: `Error (${err})`})
    }

    render() {
        return (
            <div className="Scanner">
                <QrReader
                    delay={300}
                    facingMode={'environment'}
                    onError={this.scanError}
                    onScan={this.scanUpdated}
                    style={{ width: '100%' }}
                />
                <p>{this.state.scannedText}</p>
            </div>
        );
    }
}

export default Scanner;
