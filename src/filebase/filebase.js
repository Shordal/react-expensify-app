import * as firebase from 'firebase';
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
    // appId: "1:890586185391:web:c32d299a8dbe2f6fe59e5a",
    // measurementId: "G-10GHKLXTD7"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });



// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });






// database.ref('expenses').push({
//     description: 'Rent',
//     Note: 'A rent payment',
//     amount: 45000,
//     createdAt: '10/24/19'
// });



// database.ref('expenses').push({
//     description: 'water',
//     Note: 'A water payment',
//     amount: 800,
//     createdAt: '11/24/19'
// })
// database.ref('expenses').push({
//     description: 'Games',
//     Note: 'A vyjda payment',
//     amount: 9000,
//     createdAt: '12/24/19'
// })


// database.ref('notes/-LxPG7A-hEMflFqmjegg').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'Python'
// });

// const firebaseNotes = {
//     notes: {

//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'
// }, {
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'
// }]

// database.ref('notes').set(notes);

// database.ref('notes/0').once('value').then((snapshot) => { const val = snapshot.val(); console.log(val) });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(` ${val.name} is a ${val.job.title} at ${val.job.company}.`);
// }, (e) => {
//     console.log('Error: ', e);
// });

// setTimeout(() => {
//     database.ref('job/title').set('Software developer')
// }, 3500);

// setTimeout(() => {
//     database.ref('name').set('Steven')
// }, 7000);

// const onValueChange = database.ref()
// .on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29)
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30)
// }, 10500);

// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => {
//     console.log('Error fetching data! ', e)
// })

// database.ref().set({
//     name: 'Steven Payne',
//     age: 30,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'google'
//     },
//     location: {
//         city: 'Houston',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed: ', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//     });

// database.ref('Age').set(null);

// database.ref()
// .remove().then(() => {
//     console.log('Data was removed!')
// }).catch((e) => {
//     console.log('Data was note removed! ', e);
// });
