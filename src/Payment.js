import React from 'react';
import './Payment.css';

class Payment extends React.Component {
    state = {
        transactionResult: 'No transaction performed.',
    };

    initPaymentRequest = () => {
        const networks = ['mastercard', 'unionpay', 'visa'];
        const types = ['debit', 'credit', 'prepaid'];
        const supportedInstruments = [{
            supportedMethods: 'basic-card',
            data: {supportedNetworks: networks, supportedTypes: types},
        }];
        const details = {
            total: {label: 'Donation', amount: {currency: 'USD', value: '55.00'}},
            displayItems: [
                {
                label: 'Original donation amount',
                amount: {currency: 'USD', value: '65.00'},
                },
                {
                label: 'Friends and family discount',
                amount: {currency: 'USD', value: '-10.00'},
                },
            ],
        };
        return new PaymentRequest(supportedInstruments, details);
    }

    instrumentToString = instrument => {
        return `Transaction successful (${instrument.methodName}: ${instrument.details.cardNumber})`;
    }

    sendPaymentToServer = instrumentResponse => {
        window.setTimeout(() => {
            instrumentResponse.complete('success')
                .then(() => this.setState({transactionResult: this.instrumentToString(instrumentResponse)}))
                .catch(err => console.error(err));
        }, 2000);
    }

    handleBuy = () => {
        const request = this.initPaymentRequest();
        request.show()
            .then((instrumentResponse) => this.sendPaymentToServer(instrumentResponse))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="Payment">
                <button onClick={this.handleBuy}>
                    Pay
                </button>
                <p>{this.state.transactionResult}</p>
            </div>
        );
    }
}

export default Payment;
