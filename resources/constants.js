/**
 * Useful (or not) constants
 *
 * @type {{REST_API_HOST: string, REST_API_PORT: number, REST_API_VERSION: string, TANGO_HOST: string, TANGO_PORT: number, NAME_COLUMN_WIDTH: number, TABS_DELIMITER_HEIGHT: number, DATABASE: string, LOG_DATE_FORMATTER: TangoWebapp.consts.LOG_DATE_FORMATTER}}
 */
TangoWebapp.consts = {
    REST_API_PROTOCOL: /*@*/REST_API_PROTOCOL/*@*/,
    REST_API_HOST: /*@*/REST_API_HOST/*@*/,
    REST_API_PORT: /*@*/REST_API_PORT/*@*/,
    REST_API_VERSION: /*@*/REST_API_VERSION/*@*/,
    TANGO_HOST: /*@*/TANGO_HOST/*@*/,
    TANGO_PORT: /*@*/TANGO_PORT/*@*/,
    NAME_COLUMN_WIDTH: 250,
    TABS_DELIMITER_HEIGHT: 3,
    DATABASE: 'sys/database/2',
    LOG_DATE_FORMATTER: function (date) {
        return date;
    }
};