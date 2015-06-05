var InputWithLabel = React.createClass({displayName: "InputWithLabel",
    render: function() {
        return (
          React.createElement("div", {className: "form-group"}, 
            React.createElement("label", {for: "exampleInputEmail1"}, "Email address"), 
            React.createElement("input", {type: "email", className: "form-control", id: "exampleInputEmail1", placeholder: "Enter email"}), 
            React.createElement("a", {tabindex: "0", className: "btn btn-lg btn-danger", role: "button", "data-toggle": "popover", "data-trigger": "focus", title: "Dismissible popover", "data-content": "And here's some amazing content. It's very engaging. Right?"}, "Dismissible popover")
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
