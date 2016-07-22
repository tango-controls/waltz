/**
 * Main controller
 *
 * @type {TangoWebapp.MainController}
 */
TangoWebapp.MainController = MVC.Controller.extend('main', {
    /**
     * This is the main entry point of the application. This function is invoked after jmvc has been completely initialized.
     *
     * @param {Object} params
     */
    load: function (params) {
        //TODO ask user for rest_host
        TangoWebapp.rest = new TangoREST(TangoWebapp.consts.REST_API_URL + '/' + TangoWebapp.consts.REST_API_VERSION);

        TangoWebapp.db = new DataBase('sys/database/2');

        TangoWebapp.devices = new webix.DataCollection();


        //draw ui
        webix.ui({
            view: "Main",
            id  : "main"
        });
    }
});