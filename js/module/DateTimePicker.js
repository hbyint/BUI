define([
	'jquery', 'underscore', 'backbone',
	'moment', 'moment-locale-ko', 'bootstrap-datetimepicker'
],  function($, _, Backbone) {
	var tmpl = 	'<div class="form-group">' +
				'	<div class="input-group date">' +
				'		<input type="text" class="form-control" />' +
				'		<span class="input-group-addon">' +
				'			<span class="glyphicon glyphicon-calendar"></span>' +
				'		</span>' +
				'	</div>' +
				'</div>';

	return Backbone.View.extend({
		initialize : function(options) {
			this.src = options.src;
			this.config = options.config;
			this.render();
		}
		, render : function () {
			$(this.src).addClass('input-group date')
					   .wrap('<div class="form-group"/>');
			$(this.src).find('> input').addClass('form-control');
			$(this.src).append('<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>');
			/*
			$(this.src).addClass('form-control')
					   .wrap('<div class="form-group"><div class="input-group date"></div></div>');
			$(this.src).after('<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>');
			*/
			$(this.src).datetimepicker(this.config);
		}
	});
});