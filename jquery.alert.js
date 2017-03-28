
/***************************************************************************************************************************
Title: jQuery Alert Plugin
Author(s): Joshua Simacek
Create Date: 3/27/2017
Description: JQuery plugin creating an alert box with different alert types
Dependencies: jQuery.js, jQuery-UI.js, jquery.alert.css
Usage: 
    $.alert("Hello World");
    $.alert({message: "Hello World", type: "info"});
    $.alert({title: "Alert", message: "Hello World"});
    $.alert({title: "Alert", message: "Hello World", type: "warning"});
Version: 1.0.0
ChangeLog:
v1.0.0 - 3/27/2017 - (JS):
    • Initial Implementation Complete
***************************************************************************************************************************/


(function ($){

    $.alert = function(params){
        if (typeof params == "undefined" || params == null){
            return;
        }

        var title = "Message from Webpage";
        var message;
        var type = "info"; //possible types: 'info', 'warning', 'error'

        if (typeof params == "string"){
            message = params;
        } else {
            message = params.message;
            if (typeof params.title != "undefined" && params.title != null){
                title = params.title;
            }
            if (typeof params.type != "undefined" && params.type != null){
                type = params.type
            }
        }

        var typeClass;
        switch(type){
            case "info":
                typeClass = "ui-dialog-info";
            break;
            case "warning":
                typeClass = "ui-dialog-warning";
            break;
            case "error":
                typeClass = "ui-dialog-error";
            break;
        }

        $("<div title='" + title + "'><p><span>" + message + "</p></span></div>").dialog({
            modal: true,
            title: title,
            open: function(){
                $(this).closest(".ui-dialog").find(".ui-dialog-titlebar-close").hide();
                $(this).closest(".ui-dialog").addClass(typeClass);
            },
            buttons:{
                OK: function(){
                    $(this).dialog("close");
                    $(this).remove();
                }
            }
        });
    }

}(jQuery));