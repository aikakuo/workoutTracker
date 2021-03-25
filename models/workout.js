const mongoose = require("mongoose")
let WorkoutSchema = new mongoose.Schema({
    
        day: {
          type: Date,
          default: Date.now,
          required: true
        },
        exercises: [
          {
            type: {
                type: String,
                trim: true,
                required: true
              },
            name: {
              type: String,
              required: true 
            },
            duration: {
              type: Number,
              required: true},
            weight: {
              type: Number},
            reps: {
              type: Number},
            sets: {
              type: Number},
            distance: {
              type: Number}
          }
        ]
      
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

