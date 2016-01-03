define([
	'jquery', 'underscore', 'backbone', './Button'
],  function ($, _, Backbone, Button) {
	var tmpl =	'<div class="modal fade" tabindex="-1" role="dialog">' +
				'	<div class="modal-dialog">' +
				'		<div class="modal-content">' +
				'			<div class="modal-header">' +
				'				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
				'				<h4 class="modal-title"><%=title %></h4>' +
				'			</div>' +
				'			<div class="modal-body"/>' +
				'			<div class="modal-footer"/>' +
				'		</div>' +
				'	</div>' +
				'</div>'

	return Backbone.View.extend({
		initialize : function (options) {
			this.template = _.template(tmpl);
			this.buttons = [];

			var _this = this;
			this.model.buttons.forEach ( function (item, no) {
				var button = new Button({
					tagName : 'button'
					, text : item.text
					, attributes : {
						class : 'btn btn-primary'
					}
				});
				_this.buttons.push(button);
			});

			this.render();
		}
		, render : function () {
			$(this.model.trigger).attr({'data-toggle' : 'modal', 'data-target' : '#'+this.model.id});
			$('body').prepend(this.template(this.model));
			$('.modal').attr('id', this.model.id);
			$('.modal-body').html(this.model.content);

			var _this = this;
			this.buttons.forEach( function(item, no) {
				item.appendTo('.modal-footer');
			});
		}
	});
});