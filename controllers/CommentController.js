const Comment = require('../models/Comment');

module.exports = {
    find: (params, callback) => {
        Comment.find(params, (err, Comments) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, Comments);
        });
    },
    findById: (id, callback) => {
        Comment.findById(id, (err, Comments) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, Comments);
        });
    },
    create: (params, callback) => {
        Comment.create(params, (err, Comments) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, Comments);
        });
    },
    update: (id, params, callback) => {
        Comment.findByIdAndUpdate(id, params, {new:true}, (err, Comments) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, Comments);
        });
    },
    delete: (id, callback) => {
        Comment.findByIdAndRemove(id, (err) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, null);
        });
    }
}