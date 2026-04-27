const ExamModel = require('../models/examModel');

const getAllExams = async (req, res) => {
  try {
    const exams = await ExamModel.getAll();
    res.json(exams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createExam = async (req, res) => {
  try {
    const exam = await ExamModel.create(req.body);
    res.status(201).json(exam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateExam = async (req, res) => {
  try {
    const exam = await ExamModel.update(req.params.id, req.body);
    res.json(exam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteExam = async (req, res) => {
  try {
    const result = await ExamModel.delete(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllExams,
  createExam,
  updateExam,
  deleteExam
};
