sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("A11.CaresolA11.controller.A11View1", {
		onInit: function () {

		},
		onBeforeRendering :function(){
		var carseolImag = this.getView().byId("caresol");
		setInterval(function(){carseolImag.next();},3000);
		}
	});
});