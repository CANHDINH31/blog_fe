import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../libs/firebase/firebaseConfig";

const uploadImgToFirebase = (file) => {
  return new Promise((resolve, reject) => {
    const name = file.name;
    const storageRef = ref(storage, `blog/${name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.error(error);
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            resolve(url);
          })
          .catch((error) => {
            reject(error);
          });
      }
    );
  });
};

export default uploadImgToFirebase;
