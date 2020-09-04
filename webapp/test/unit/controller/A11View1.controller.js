/*global QUnit*/

sap.ui.define([
	"A11/CaresolA11/controller/A11View1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("A11View1 Controller");

	QUnit.test("I should test the A11View1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});