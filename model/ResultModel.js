const { default: mongoose } = require("mongoose");




const ResultSchema = mongoose.Schema({
    image: {data:Buffer,contentType:String },
    session: { type: String },
    roll_no: { type: String },
    student_name: { type: String },
    fathers_name: { type: String },
    mothers_name: { type: String },
    date_of_birth: { type: String },
    gender: { type: String },
    admission_in_class: { type: String },
    course_name: { type: String },
    sub1: { type: String },
    mark1: { type: Number },
    sub2: { type: String },
    mark2: { type: Number },
    sub3: { type: String },
    mark3: { type: Number },
    sub4: { type: String },
    mark4: { type: Number },
    sub5: { type: String },
    mark5: { type: Number },
    sub6: { type: String },
    mark6: { type: Number },
    sub7: { type: String },
    mark7: { type: Number },
    sub8: { type: String },
    mark8: { type: Number },


}, {
    versionKey: false,
    timestamps: true
})

const ResultModel = mongoose.model("result", ResultSchema)



module.exports = {
    ResultModel
}