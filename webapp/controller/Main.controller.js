sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";
    let oView;
    let oRouter;
    let that;
	return Controller.extend("capa.csti.controller.Main", {
        onInit: function(){
            oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("main").attachPatternMatched(this.configurationInit, this);
        },
        configurationInit: async function(){
            that = this;
            oView = this.getView();
        }
	});
});