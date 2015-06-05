var InputWithLabel = React.createClass({displayName: "InputWithLabel",
    render: function() {
        return (

          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-md-7"}, 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("label", {for: "exampleInputEmail1"}, "Email  address"), 
                React.createElement("input", {type: "email", className: "form-control", id: "exampleInputEmail1", placeholder: "Enter email"})
                  )
            ), 
            React.createElement("div", {className: "col-md-5"}, 
              React.createElement("button", {type: "button", className: "btn btn-default invisibutton", "data-toggle": "popover", title: "Edit Component", "data-content": "<h1>Hello world</h1>"}, 
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
