$(document).ready(function(){
  // Model of contacts
  window.Contact = Backbone.Model.extend({
    defaults: {
      id: null,
      type: null,
      name: null,
      title: null,
      value: null
    }
  });
});
