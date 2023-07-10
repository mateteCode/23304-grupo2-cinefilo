import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxFzrCtrPqYAjIW8xzaaNDq9Cum5IPlr0",
  authDomain: "fir-auth-article-5a22c.firebaseapp.com",
  projectId: "fir-auth-article-5a22c",
  storageBucket: "fir-auth-article-5a22c.appspot.com",
  messagingSenderId: "497685829031",
  appId: "1:497685829031:web:4171ccc2354c4fcb3a9282",
};

/*TODO: LLamar esta carpeta services, integrandola con otro archivo para la API de pelis */
const COLLECTION_COMMENTS = "comments2";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

/* Funciones privadas */
const getField = async (col, field, fieldId, id) => {
  try {
    const q = query(collection(db, col), where(fieldId, "==", id));
    const docs = await getDocs(q);
    const documentRef = doc(db, col, docs.docs[0].id);
    const documentSnapshot = await getDoc(documentRef);
    if (documentSnapshot.exists()) {
      const result = documentSnapshot.data()[field];
      return result;
    } else {
      console.log("No existe el documento");
    }
  } catch (err) {
    console.log("No se puede acceder al campo");
  }
  return null;
};

/* Funciones públicas */
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, new GoogleAuthProvider());
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        photo: user.photoURL,
        favorites: [],
        blocked: [],
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      photo: null,
      favorites: [],
      blocked: [],
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    const res = await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

const addFavorites = async (user, movie) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    const documentRef = doc(db, "users", docs.docs[0].id);
    await updateDoc(documentRef, {
      favorites: arrayUnion(movie),
    });
  } catch (err) {
    console.log(err);
  }
};

const addBlocked = async (user, movie) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    const documentRef = doc(db, "users", docs.docs[0].id);
    await updateDoc(documentRef, {
      blocked: arrayUnion(movie),
    });
  } catch (err) {
    console.log(err);
  }
};

const removeFavorites = async (user, movie) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    const documentRef = doc(db, "users", docs.docs[0].id);
    await updateDoc(documentRef, {
      favorites: arrayRemove(movie),
    });
  } catch (err) {
    console.log(err);
  }
};

const removeBlocked = async (user, movie) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    const documentRef = doc(db, "users", docs.docs[0].id);
    await updateDoc(documentRef, {
      blocked: arrayRemove(movie),
    });
  } catch (err) {
    console.log(err);
  }
};

const addComment = async (movieId, comment) => {
  try {
    const q = query(collection(db, "comments"), where("id", "==", movieId));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "comments"), {
        id: movieId,
        comments: [comment],
      });
    } else {
      const documentRef = doc(db, "comments", docs.docs[0].id);
      await updateDoc(documentRef, {
        comments: arrayUnion(comment),
      });
    }
  } catch (err) {
    console.error(err);
  }
};

const getComments = async (movieId) => {
  return await getField("comments", "comments", "id", movieId);
};

const setUserPhoto = async (userId, urlFile) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", userId));
    const docs = await getDocs(q);
    const docRef = doc(db, "users", docs.docs[0].id);
    await updateDoc(docRef, {
      photo: urlFile,
    });
  } catch (err) {
    console.log(err);
  }
};

/* TODO: Usar un generador de id */
const uploadFile = async (file, userId) => {
  const storageRef = ref(storage, `photo-user${userId}`);
  await uploadBytes(storageRef, file);
  const urlFile = await getDownloadURL(storageRef);
  await setUserPhoto(userId, urlFile);
  return urlFile;
};

const getUserPhoto = async (userId) => {
  return await getField("users", "photo", "uid", userId);
};

const getUserName = async (userId) => {
  return await getField("users", "name", "uid", userId);
};

const getBlocked = async (userId) => {
  return await getField("users", "blocked", "uid", userId);
};

const getFavorites = async (userId) => {
  return await getField("users", "favorites", "uid", userId);
};

/* Funciones de prueba para cambiar la estructura de datos */
async function addComment2(userId, movieId, content) {
  try {
    const newCommentRef = await addDoc(collection(db, COLLECTION_COMMENTS), {
      userId,
      movieId,
      content,
      timestamp: serverTimestamp(),
    });
    console.log("Comentario guardado con ID:", newCommentRef.id);
  } catch (error) {
    console.log("Error al guardar el comentario:", error);
  }
}

async function getCommentsByMovie(movieId) {
  try {
    const q = query(
      collection(db, COLLECTION_COMMENTS),
      where("movieId", "==", movieId)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  } catch (error) {
    console.log("Error al obtener los comentarios:", error);
  }
}

async function getCommentsByUser(userId) {
  try {
    const q = query(
      collection(db, COLLECTION_COMMENTS),
      where("userId", "==", userId)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  } catch (error) {
    console.log("Error al obtener los comentarios:", error);
  }
}
/* FIN: Funciones de prueba para cambiar la estructura de datos */

export {
  db,
  auth,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  addFavorites,
  removeFavorites,
  addBlocked,
  removeBlocked,
  addComment,
  getComments,
  uploadFile,
  getUserPhoto,
  getUserName,
  getBlocked,
  getFavorites,
};
