$(document).ready(function(){
  // Model of contacts
  var Contact = Backbone.Model.extend({
    defaults: {
      id: null,
      type: null,
      name: null,
      title: null,
      value: null
    }
  });
});
