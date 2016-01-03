requirejs.config({
	baseUrl: 'js'
	, shim : {
		'backbone' : {
			deps: ['underscore']
		}
		, 'bootstrap-datetimepicker' : {
			deps: ['moment']
		}
	}
	, paths: {
		'jquery' : '../lib/jquery-1.11.3.min'
		, 'underscore' : '../lib/underscore-min'
		, 'backbone' : '../lib/backbone-min'
		, 'bootstrap' : '../lib/bootstrap/js/bootstrap.min'
		, 'moment' : '../lib/moment/moment.min'
		, 'bootstrap-datetimepicker' : '../lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min'
		, 'moment-locale-ko' : '../lib/moment/locale/ko'
	}
});

require(['main']);