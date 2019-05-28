import * as functions from 'firebase-functions';
import * as Cors from 'cors'
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// Expose Express API as a single Cloud Function:
const cors = Cors({ origin: true })
exports.logReceiver = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    console.info(req.body)
    res.send(req.body)
  })
});
