var InputWithLabel = React.createClass({
    getInitialState: function() {
      return {'labelText':'Label Text'};
    },
    handleLabelTextChange : function() {
      this.setState({'labelText': React.findDOMNode(this.refs.labelTextInput).value});
    },
    render: function() {

        return (

          <div className="row">
            <div className="col-md-7">
              <div className="form-group">
                <label for="exampleInputEmail1">{this.state.labelText}</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
              </div>
            </div>
            <div className="col-md-5">
              <button className="btn btn-default invisibutton" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </button>
              <div className="collapse" id="collapseExample">
                <div className="well">
                  <div className="form-group">
                    <label for="EditlabelTextInput">Enter value for label text:</label>
                    <input className="form-control" id="EditlabelTextInput" ref="labelTextInput" onChange={this.handleLabelTextChange} value={this.state.labelText}/>
                  </div>
                </div>
              </div>
            </div>
          </div>

        );
    }
});


var FormToolbox = React.createClass({displayName: "FormToolbox",
  render: function() {
    return (
      <div>
        <InputWithLabel/>
      </div>
    );
  }
});

React.render(
  React.createElement(FormToolbox, null),
  document.getElementById('toolbox')
);
