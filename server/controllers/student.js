var Student = require('../models/student');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};


//gets all students from collection
exports.all = function(req,res) {
    Student.find({}, function(err, docs) {
        if(err) return next(err);
       
        if(docs) {
            console.log(docs);
            var response = {
                statusCode: 200,
                headers:  { 'Content-Type': 'application/json' },
                body: docs
                }
                res.end(JSON.stringify(response));
        }
        });
    };

;

    



exports.student_create = function (req, res) {
    var student = new Student(
        {   _id: req.body._id,
            password:req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            father_name : req.body.father_name,
            mother_name : req.body.mother_name,
            selectedDate: req.body.selectedDate,
            address: req.body.address,
            phone: req.body.phone,
            zipcode: req.body.zipcode,
            email: req.body.email
        }
    );  

    student.save(function (err) {
        if (err) throw(err)
        console.log(err);
        },
        res.send('Student Created successfully')
    )
};

exports.student_details = function (req, res) {
    Student.findById(req.params.id, function (err, student) {
        if (err) return next(err);
        res.send(student);
    })
};

exports.student_update = function (req, res) {
    Student.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, student) {
        if (err) throw(err);
        res.send('Student updated!');
    });
};

exports.student_delete = function (req, res) {
    Student.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })

};