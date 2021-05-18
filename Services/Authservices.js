import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function getProfile(uid) {
  return new Promise((resolve, reject) => {
    firestore()
      .collection('Profiles')
      .doc(uid)
      .get()
      .then((documentSnapshot) => {
        resolve(documentSnapshot.data());
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
function Signin(email, password) {
  return new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function signOut() {
  return new Promise((resolve, reject) => {
    if (auth().currentUser) {
      auth()
        .signOut()
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    }
  });
}

function register(email, password, name, role) {
  return new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        let uid = auth().currentUser.uid;
        auth().currentUser.updateProfile({displayName: name});
        // Update role
        firestore().collection('Profiles').doc(uid).set({
          role: role,
          name: name,
        });

        resolve('User account created');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          reject('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          reject('That email address is invalid!');
        }

        console.error(error);
        reject(error);
      });
  });
}
function createOrder(order) {
  return new Promise((resolve, reject) => {
    firestore()
      .collection('Orders')
      .add(order)
      .then((ref) => {
        // OK
        // TODO: Send a email to customers (THANK YOU)
        // TODO: Send notification to call center
        ref
          .get()
          .then((documentSnapshot) => {
            let createdOrder = documentSnapshot.data();
            createdOrder.id = documentSnapshot.id;
            console.log(createdOrder);
            resolve(createdOrder);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
export default {
  register,
  getProfile,
  Signin,
  signOut,
};
