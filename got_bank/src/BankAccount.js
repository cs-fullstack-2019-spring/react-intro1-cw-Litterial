import React,{Component} from 'react';  //imports react and component

class BankAccount extends Component {    //grabs component for the class to use
    render() {   {/*renders on index page*/}
        return (
            <div>
                {/* props allows to call access the children*/}
                <h2>Welcome {this.props.customer_name}</h2>
                <h3>Your account balance is {this.props.balance}</h3>
            </div>
        );


    };
}
export default BankAccount;