var InputWithLabel = React.createClass({displayName: "InputWithLabel",
    render: function() {
        return (
          React.createElement("div", {className: "form-group"}, 
            React.createElement("label", {for: "exampleInputEmail1"}, "Email address"), 
            React.createElement("input", {type: "email", className: "form-control", id: "exampleInputEmail1", placeholder: "Enter email"}), 
            React.createElement("button", {type: "button", className: "btn btn-lg btn-danger", "data-toggle": "popover", title: "Popover title", "data-content": "And here's some amazing content. It's very engaging. Right?"}, "Click to toggle popover")
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
