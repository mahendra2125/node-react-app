const Zone = require('../models/Zone');

module.exports = {
    find: (params, callback) => {
        Zone.find(params, (err, zones) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, zones);
        });
    },
    findById: (id, callback) => {
        Zone.findById(id, (err, zones) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, zones);
        });
    },
    create: (params, callback) => {
        const zips = params.zipCodes;
        const zip = zips.split(',');
        const newZips = [];
        zip.forEach(zipCode => {
            newZips.push(zipCode.trim());
        });

        params.zipCodes = newZips;

        Zone.create(params, (err, zones) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, zones);
        });
    },
    update: (id, params, callback) => {
        Zone.findByIdAndUpdate(id, params, {new:true}, (err, zones) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, zones);
        });
    },
    delete: (id, callback) => {
        Zone.findByIdAndRemove(id, (err) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, null);
        });
    }
}