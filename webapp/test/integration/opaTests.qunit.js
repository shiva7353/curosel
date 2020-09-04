/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"A11/CaresolA11/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});