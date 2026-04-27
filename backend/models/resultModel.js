const { db } = require('../config/firebaseConfig');

const COLLECTION = 'results';

const ResultModel = {
  getAll: async (filters = {}) => {
    let query = db.collection(COLLECTION);
    
    if (filters.course && filters.course !== 'All Courses') {
      query = query.where('course', '==', filters.course);
    }
    if (filters.studentId) {
      query = query.where('studentId', '==', filters.studentId);
    }
    if (filters.grade) {
      query = query.where('grade', '==', filters.grade);
    }

    const snapshot = await query.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  create: async (data) => {
    const docRef = await db.collection(COLLECTION).add({
      ...data,
      createdAt: new Date().toISOString()
    });
    return { id: docRef.id, ...data };
  },

  update: async (id, data) => {
    await db.collection(COLLECTION).doc(id).set({
      ...data,
      updatedAt: new Date().toISOString()
    }, { merge: true });
    return { id, ...data };
  },

  delete: async (id) => {
    await db.collection(COLLECTION).doc(id).delete();
    return { success: true };
  }
};

module.exports = ResultModel;
