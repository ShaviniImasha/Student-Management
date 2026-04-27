const { db } = require('../config/firebaseConfig');

const COLLECTION = 'exams';

const ExamModel = {
  getAll: async () => {
    const snapshot = await db.collection(COLLECTION).get();
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

module.exports = ExamModel;
