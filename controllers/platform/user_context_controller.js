TangoWebapp.platform.UserContextController = MVC.Controller.extend("user_context_controller", {}, {
    _user_context: null,
    /**
     * Defines global var UserContextController
     *
     * @constructor
     * @param user_context
     */
    init: function (user_context) {
        this._user_context = user_context;
    },
    /**
     * Does nothing if tango_host is already exist
     *
     * @param {string} tango_host
     *
     * @event {OpenAjax} user_context_controller.add_tango_host
     */
    add_tango_host: function (tango_host) {
        if (this._user_context.tango_hosts.hasOwnProperty(tango_host)) return;
        this._user_context.tango_hosts[tango_host] = "";
        this._user_context.save();
        this.publish("user_context_controller.add_tango_host", {
            context: this._user_context,
            data: tango_host
        })
    },
    /**
     * Does nothing if tango_host is already deleted
     *
     * @param tango_host
     *
     * @event {OpenAjax} user_context_controller.delete_tango_host
     */
    delete_tango_host: function (tango_host) {
        if (!this._user_context.tango_hosts.hasOwnProperty(tango_host)) return;
        delete this._user_context.tango_hosts[tango_host];
        this._user_context.save();
        this.publish("user_context_controller.delete_tango_host", {
            context: this,
            data: tango_host
        })
    },
    /**
     *
     * @param attrs
     *
     * @event {OpenAjax} user_context_controller.update_attributes
     */
    update_attributes: function (attrs) {
        this._user_context.update_attributes(attrs);
        this.publish("user_context_controller.update", {data: this});
    }


});

//define global var, set in platform/main_controller
var UserContextController = null;