import * as constants from '../lib/constants';

export function getBeerClass(color) {
    switch (color) {
        case constants.LIGHT_BEER:
            return constants.LIGHT_BEER_CLASS;
        case constants.DARK_BEER:
            return constants.DARK_BEER_CLASS;
        default:
            return;
    }
};

export function compareByProperty(property, sortDirection) {
    return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return sortDirection * result;
    }
}

export default { getBeerClass, compareByProperty }