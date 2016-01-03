define([
	'jquery'
	, 'underscore'
	, 'backbone'
	, 'bootstrap'
],  function ($, _, Backbone) {

	var ButtonConfig = {
		tagName : 'button'
		, attributes : {
			class : 'btn btn-primary'
		}
	};

	return Backbone.View.extend({
		initialize : function (options) {
			var config = new ButtonConfig();
			console.log('config.attributes ===========');
			console.log(config.attributes);
			console.log('options.attributes ==========');
			console.log(options);
			config = _.extend(config, options);
			console.log(config);
			this.model = config;
		}
		, render : function () {
			console.log('render');
			this.$el.text(this.model.text);
			return this.el;
		}
		, prependTo : function (selector) {
			$(selector).prepend(this.render());
		}
		, appendTo : function (selector) {
			$(selector).append(this.render());
		}
		, beforeTo : function (selector) {
			$(selector).before(this.render());
		}
		, afterTo : function (selector) {
			$(selector).after(this.render());
		}
	});
});