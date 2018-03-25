const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.get('/:resource', (req, res, next) => {
    const resource = req.params.resource;
    const controller = controllers[resource];

    if (!controller) {
        res.json({
            confirmation: 'Failed',
            message: 'Not a valid resource name: ' + resource
        });
        return;
    }

    controller.find(req.query, (err, results) => {
        if (err) {
            res.json({
                confirmation: 'Failed',
                message: err
            }); 
            return; 
        }
        res.json({
            confirmation: 'success',
            results: results
        });
    });
});

router.get('/:resource/:id', (req, res, next) => {
    const resource = req.params.resource;
    const id = req.params.id;
    const controller = controllers[resource];
    
    if (!controller) {
        res.json({
            confirmation: 'Failed',
            message: 'Not a valid resource name: ' + resource
        });
        return;
    }

    controller.findById(id, (err, result) => {
        if (err) {
            res.json({
                confirmation: 'Failed',
                message: 'Not a valid id'
            }); 
            return; 
        }
        res.json({
            confirmation: 'success',
            message: result
        });
    });
});

router.post('/:resource', (req, res, next) => {
    const resource = req.params.resource;
    const controller = controllers[resource];

    if (!controller) {
        res.json({
            confirmation: 'Failed',
            message: 'Not a valid resource name: ' + resource
        });
        return;
    }

    controller.create(req.body, (err, results) => {
        if (err) {
            res.json({
                confirmation: 'Failed',
                message: err
            }); 
            return; 
        }
        res.json({
            confirmation: 'success',
            message: results
        });
    });
});

module.exports = router;