var InputWithLabel = React.createClass({displayName: "InputWithLabel",
    render: function() {
        return (

          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-md-10"}, 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("label", {for: "exampleInputEmail1"}, "Email address"), 
                React.createElement("input", {type: "email", className: "form-control", id: "exampleInputEmail1", placeholder: "Enter email"})
                  )
            ), 
            React.createElement("div", {className: "col-md-2"}, 
              React.createElement("button", {type: "button", className: "btn vcenter", "data-toggle": "popover", title: "Popover title", "data-content": "And here's some amazing content. It's very engaging. Right?"}, 
                React.createElement("span", {className: "glyphicon glyphicon-cog", "aria-hidden": "true"})
              )
            )
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
