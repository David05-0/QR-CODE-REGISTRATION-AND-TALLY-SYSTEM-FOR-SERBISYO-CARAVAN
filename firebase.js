import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

export * from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
export * from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const app = initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
});

export const db = getFirestore(app);
export const auth = getAuth(app);

// code -> display name. The code is what goes in the agency QR (?agency=DOLE).
export const AGENCIES = {
  DMW: "Department of Migrant Workers",
  DOLE: "DOLE",
  OWWA: "OWWA",
  TESDA: "TESDA",
  SSS: "SSS",
  PHILHEALTH: "PhilHealth",
  PAGIBIG: "Pag-IBIG",
};
