import React, {Component} from 'react';
import firebase from "firebase";
import {StyleSheet, Text, View} from 'react-native';
import Card from 'react-native-paper';
import SignUpForm from "./components/SignUpForm";

export default class App extends Component {

    state = {user: null}

    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyBxb08J6CgWoAnDwZ0J_DK8WVRpnifCcNI",
            authDomain: "innovationoevelse5.firebaseapp.com",
            databaseURL: "https://innovationoevelse5.firebaseio.com",
            projectId: "innovationoevelse5",
            storageBucket: "innovationoevelse5.appspot.com",
            messagingSenderId: "278880860352",
            appId: "1:278880860352:web:95a36307338c7ee9369525",
            measurementId: "G-3G6LP68GLP"
        }

        /*
        Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
        Så undgår vi fejlen firebase App named [DEFAULT] already exists (app/duplicate-app)
         */

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged(user => {
            this.setState({user});
        });
    }

    render() {
        const {user} = this.state

        if (!user) {
            return (
                <View style={styles.container}>
                    <Text style={styles.paragraph}>
                        Opret eller login med din firebase email
                    </Text>

                    <SignUpForm />

                </View>
            )
        } else {
            return (
                <Text>ProfileScreen</Text>
            )
        }
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //  paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBxb08J6CgWoAnDwZ0J_DK8WVRpnifCcNI",
    authDomain: "innovationoevelse5.firebaseapp.com",
    databaseURL: "https://innovationoevelse5.firebaseio.com",
    projectId: "innovationoevelse5",
    storageBucket: "innovationoevelse5.appspot.com",
    messagingSenderId: "278880860352",
    appId: "1:278880860352:web:95a36307338c7ee9369525",
    measurementId: "G-3G6LP68GLP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
 */
