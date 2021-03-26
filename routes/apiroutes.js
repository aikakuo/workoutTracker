const path = require("path");

let db = require("../models");

module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
      db.Workout.aggregate([{
        $addFields:{totalDuration: { $sum: "$exercises.duration" }}
      }]).then(data => {
        res.json(data)
      }).catch(err => {
        res.status(400).json(err);
    });
    });

    app.get("/api/workouts/range", (req, res) => {
      db.Workout.aggregate([{
        $addFields:{totalDuration: { $sum: "$exercises.duration" }}
      }]).sort({ "day":-1 })
      .limit(7).then(data => {
        res.json(data)
      }).catch(err => {
        res.status(400).json(err);
    });
    });

    app.post("/api/workouts", (req, res) => {
      db.Workout.create({}).then(data => {
        res.json(data)
      }).catch(err => {
        res.status(400).json(err);
    });
    });

    app.put("/api/workouts/:id", (req, res) => {
      db.Workout.findByIdAndUpdate(
        {_id:req.params.id},
        {$set : {exercises: req.body}},
        { new: true })
        .then(data => {res.json(data)
      }).catch(err => {
        res.status(400).json(err);
    });
    });
  
  };