import React from 'react';
import { AFrameRenderer, Marker } from 'react-web-ar'
import './AugmentedReality.css';

class AugmentedReality extends React.Component {
    render() {
        return (
            <div className="AugmentedReality">
                <AFrameRenderer inherent={true}>
                    <Marker parameters={{ preset: 'hiro' }}>
                        <a-box color="blue" position="0 0.09 0" scale="0.4 0.8 0.8">
                            <a-animation
                                attribute="rotation"
                                to="360 0 0"
                                dur="2000"
                                easing="linear"
                                repeat="indefinite"
                            />
                        </a-box>
                    </Marker>
                </AFrameRenderer>
            </div>
        );
    }
}

export default AugmentedReality;
