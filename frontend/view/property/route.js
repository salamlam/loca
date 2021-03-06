import i18next from 'i18next';
import {LOCA} from '../../lib/main';
import propertyCtrl from './propertyctrl';

export default () => {
    LOCA.routes.property = {
        url: function () {
            return '/view/property';
        },
        title: i18next.t('Properties'),
        pageInitialized: function(callback) {
            propertyCtrl.pageInitialized(callback);
        },
        dataChanged: function (callback) {
            propertyCtrl.dataChanged(callback);
        },
        pageExited: function (callback) {
            propertyCtrl.pageExited(callback);
        }
    };
};
