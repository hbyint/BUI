define([
	'jquery'
	, 'underscore'
	, 'backbone'
	, 'bootstrap'
],  function ($, _, Backbone) {
	return Backbone.View.extend({
		initialize : function (options) {
			this.items = options.items;
			this.render();
		}
		, render : function () {
			this.$el.attr('data-toggle', 'dropdown')
					.addClass('dropdown-toggle')
					.append(' <span class="caret"></span>')
					.after('<ul>');

			var $container = this.$el.next('ul').addClass('dropdown-menu');
			var _this = this;

			var html = '';
			this.items.forEach ( function (item, no) {
				html += '<li><a href="#">'+item+'</a></li>'
			});

			$container.html(html);
		}
	});
});