define([
	'jquery', 'underscore', 'backbone', 
//	'module/Button', 'module/DropDown', 'module/Modal',
	'module/bui',
	'bootstrap'
], function($, _, Backbone, bui) {
	/*
	var btn1 = new bui.Button({
		tagName: 'button'
		, text : 'Button'
		, attributes : { 
			id: 'btnDrop'
			, name: 'testBtn'
			, class:'btn btn-primary'
		} 
	});
	var btn2 = new bui.Button({
		tagName: 'a', 
		text: 'Link', 
		attributes : { 
			  type: 'submit'
			, class : 'btn btn-primary'
			, href : '#'
		} 
	});
	var btn3 = new bui.Button({
		tagName: 'button'
		, text : 'Modal'
		, attributes :  {
			id : 'modal'
			, class : 'btn btn-primary'
		}
	});

	btn1.appendTo('#box');
	btn2.appendTo('#box');
	btn3.appendTo('#box');

	var drop1 = new bui.DropDown({
		el : '#btnDrop'
		, items : [ 'Action', 'Another Action', 'Something else here']
	});

	var modal = new bui.Modal({
		model : {
			id : 'mymodal'
			, trigger : '#modal'
			, title : 'Sample'
			, content : '<p>One fine body&hellip;</p>'
			, buttons : [
				{
					text : 'Close'
					, action : 'dismiss'
				}
				, {
					text : 'Save'
					, action : test
				}
			]
		}
	});
	

	var btn1 = new bui.Button({
		text : 'Test'
	});

	btn1.appendTo('#box');
*/

	var date1 = new bui.DateTimePicker({
		src : '#mydate'
		, config : {
			locale : 'ko'
			, dayViewHeaderFormat : 'YYYY[년] MMMM'
			, format : 'YYYY/MM/DD'
		}
	});

	var test = function () {
		alert('OK');
	}
});
