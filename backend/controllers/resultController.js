const ResultModel = require('../models/resultModel');
const { db } = require('../config/firebaseConfig');
const { sendResultEmail } = require('../utils/emailService');

const calculateResult = (mcqMarks, essayMarks) => {
  const total = (Number(mcqMarks) * 0.5) + (Number(essayMarks) * 0.5);
  let grade = 'F';
  if (total >= 75) grade = 'A';
  else if (total >= 65) grade = 'B';
  else if (total >= 50) grade = 'C';
  else if (total >= 35) grade = 'S';
  return { total, grade };
};

const getResults = async (req, res) => {
  try {
    const { course, studentId, grade, dateFrom, dateTo } = req.query;
    let results = await ResultModel.getAll({ course, studentId, grade });

    results.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

    if (dateFrom) {
      const from = new Date(dateFrom);
      results = results.filter(r => new Date(r.createdAt || 0) >= from);
    }
    if (dateTo) {
      const to = new Date(dateTo);
      to.setHours(23, 59, 59, 999);
      results = results.filter(r => new Date(r.createdAt || 0) <= to);
    }

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createResult = async (req, res) => {
  try {
    const { studentId, studentName, course, mcqMarks, essayMarks } = req.body;
    const { total, grade } = calculateResult(mcqMarks, essayMarks);
    
    const payload = { 
      studentId, 
      studentName, 
      course, 
      mcqMarks: Number(mcqMarks), 
      essayMarks: Number(essayMarks), 
      total, 
      grade 
    };
    
    const result = await ResultModel.create(payload);

    // Send email asynchronously
    (async () => {
      try {
        const snapshot = await db.collection('students').get();
        const student = snapshot.docs
          .map(d => ({ docId: d.id, ...d.data() }))
          .find(s => {
            const sid = (s.id || s.studentId || '').trim();
            return sid === studentId.trim();
          });

        if (student && student.email) {
          await sendResultEmail(student.email, studentName, { course, mcqMarks, essayMarks, total, grade });
        }
      } catch (emailErr) {
        console.error('Failed to send result email:', emailErr.message);
      }
    })();

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateResult = async (req, res) => {
  try {
    const { studentId, studentName, course, mcqMarks, essayMarks } = req.body;
    const { total, grade } = calculateResult(mcqMarks, essayMarks);
    
    const payload = { 
      studentId, 
      studentName, 
      course, 
      mcqMarks: Number(mcqMarks), 
      essayMarks: Number(essayMarks), 
      total, 
      grade 
    };
    
    const result = await ResultModel.update(req.params.id, payload);

    // Send email asynchronously
    (async () => {
      try {
        const snapshot = await db.collection('students').get();
        const student = snapshot.docs
          .map(d => ({ docId: d.id, ...d.data() }))
          .find(s => {
            const sid = (s.id || s.studentId || '').trim();
            return sid === studentId.trim();
          });

        if (student && student.email) {
          await sendResultEmail(student.email, studentName, { course, mcqMarks, essayMarks, total, grade }, true);
        }
      } catch (emailErr) {
        console.error('Failed to send update email:', emailErr.message);
      }
    })();

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteResult = async (req, res) => {
  try {
    const result = await ResultModel.delete(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getResults,
  createResult,
  updateResult,
  deleteResult
};
