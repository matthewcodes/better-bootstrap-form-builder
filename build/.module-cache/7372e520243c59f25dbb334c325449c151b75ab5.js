var InputWithLabel = React.createClass({
    render: function() {
        return (
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email">
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
