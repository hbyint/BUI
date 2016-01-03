define([
	'jquery', 'underscore', 'backbone', 
	'./Button', './DropDown', './Modal', './DateTimePicker'
],  function(jquery, _, Backbone, Button, DropDown, Modal, DateTimePicker) {
	var bui = {};
	bui.Button = Button;
	bui.DropDown = DropDown;
	bui.Modal = Modal;
	bui.DateTimePicker = DateTimePicker;

	return bui;
});