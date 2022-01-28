import { doc, setDoc, getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase-confing';

const attendanceCol = collection(db, 'attendance');

const updateWorkedHours = async (userId, data) => {
  await setDoc(
    doc(
      db,
      'attendance',
      `${userId}-${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
    ),
    data,
    { merge: true }
  );
};

const getWorkDays = async (userId) => {
  const response = [];
  const q = await query(attendanceCol, where('userId', '==', userId));

  const days = await getDocs(q);
  days.forEach((day) => {
    response.push({ ...day.data(), id: day.id });
  });
  return response;
};

export { updateWorkedHours, getWorkDays };
