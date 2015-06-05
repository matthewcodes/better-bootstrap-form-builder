var InputWithLabel = React.createClass({displayName: "InputWithLabel",
    render: function() {
        return (
          React.createElement("div", {className: "form-group"}, 
            React.createElement("label", {for: "exampleInputEmail1"}, "Email address"), 
            React.createElement("input", {type: "email", className: "form-control", id: "exampleInputEmail1", placeholder: "Enter email"})
          )
        );
    }
});


var FormToolbox = React.createClass({displayName: "FormToolbox",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(InputWithLabel, null)
      )
    );
  }
});

React.render(
  React.createElement(FormToolbox, null),
  document.getElementById('toolbox')
);
