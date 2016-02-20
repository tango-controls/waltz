/**
* Main controller
*
* @type {TangoWebapp.MainController}
*/
TangoWebapp.MainController = MVC.Controller.extend('main',{
    /**
    * This is the main entry point of the application. This function is invoked after jmvc has been completely initialized.
    *
    * @param {Object} params
    */
    load: function(params){
    	document.body.innerHTML += "<h1 id='hello'>Hello World</h1>";
    }
});