
import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  
    apiKey: "AIzaSyDe4JcUj31fTd2IPnc342jK2AiOwBY24JA",
    authDomain: "willy-app-98899.firebaseapp.com",
    projectId: "willy-app-98899",
    storageBucket: "willy-app-98899.appspot.com",
    messagingSenderId: "881648480336",
    appId: "1:881648480336:web:ebd9b71f0397459934a155"
  };

  
 firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()




