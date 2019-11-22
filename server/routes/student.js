var express = require('express');
var router = express.Router();

var student_controller = require('../controllers/student');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', student_controller.test);

//Get all the students collection.
router.get('/all/get',student_controller.all);


router.post('/create', student_controller.student_create);

router.get('/:id', student_controller.student_details);

router.put('/:id/update', student_controller.student_update);

router.delete('/:id/delete', student_controller.student_delete);


module.exports = router;