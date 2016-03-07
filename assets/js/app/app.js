$(document).ready(function() {
  console.log("start app");

  var Profile = Backbone.Model.extend({
    defaults: {
      name   : null,
      gender : null,
      picture: null
    }
  });

  var profile = new Profile({
    name   : "Christopher Pit",
    gender : "male",
    picture: "http://placekitten.com/200/200"
  });

  var CardComponent = React.createClass({
    render: function() {
      console.log(this.props.profile);
      return (
        <div className="card">
          <div className="picture">
            <img src={this.props.profile.get("picture")} />
          </div>
          <div className="name">
            {this.props.profile.get("name")}
            <small>
              ({this.props.profile.get("gender")})
            </small>
          </div>
        </div>
      )
    }
  });

  console.log(profile);

  ReactDOM.render(
    <window.ContactsTable />,
    document.getElementById("app")
  );
});
