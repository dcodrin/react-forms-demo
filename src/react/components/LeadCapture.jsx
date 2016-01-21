var React = require("react");
var EmailField = require("./EmailField.jsx");
var NameField = require("./NameField.jsx");

var LeadCapture = React.createClass({
    //We are using refs to access data on child components
    onSubmit(e){
        if(!this.refs.fieldEmail.state.valid){
            alert("No Works!");
        } else {
            //This would be the place to send request to server
            alert("Works!");
            var userRegistration = {
                email: this.refs.fieldEmail.state.value,
                name: this.refs.fieldName.state.value
            };
            //The functions to clear the input boxes live on the components themselves
            this.refs.fieldName.clear();
            this.refs.fieldEmail.clear();
        }
    },
    render: function () {
        return (
            <div className="col-sm-6 col-sm-offset-3">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <NameField type="First" ref="fieldName"/>
                        <EmailField ref="fieldEmail"/>
                        <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = LeadCapture;