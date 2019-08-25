const firebase = require("firebase")
const { FIREBASE_API_KEY, FIREBASE_PROJECT_ID } = require("../../config")

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: FIREBASE_PROJECT_ID,
}

firebase.initializeApp(firebaseConfig)

function getCurrentCount(called) {
  return firebase
    .firestore()
    .collection(`${called}`)
    .doc("call-count")
    .get()
    .then(doc => (!doc.exists ? { count: 0 } : doc.data()))
}
exports.incrementCounter = async called => {
  const { count } = await getCurrentCount(called)

  const dbRef = firebase
    .firestore()
    .collection(`${called}`)
    .doc("call-count")

  return dbRef.set({
    count: count + 1,
  })
}

function getCurrentSMSCount(texted) {
  return firebase
    .firestore()
    .collection(`${texted}`)
    .doc("sms-count")
    .get()
    .then(doc => (!doc.exists ? { count: 0 } : doc.data()))
}
exports.incrementSMSCounter = async texted => {
  const { count } = await getCurrentSMSCount(texted)

  const dbRef = firebase
    .firestore()
    .collection(`${texted}`)
    .doc("sms-count")

  return dbRef.set({
    count: count + 1,
  })
}
