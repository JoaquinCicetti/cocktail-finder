// firebase config
const fbConfig = {
    apiKey:
        'AAAA7Tqa77E:APA91bEtStwP8blFilYk_Ujnm-Jg3iCTerGNz3aswwWH4yvUhbjIOE4STqfILWr-5fJZoYUDa9F1q9a6HwBAsjj9MYhpE7uoXYEvuPvDXNWc-KTrX49-LXQqAJ6xZBsWYeEoys9bATem',
    authDomain: 'cocktail-finder.firebaseapp.com',
    databaseURL: 'https://cocktail-finder.firebaseio.com',
    storageBucket: 'gs://cocktail-finder.appspot.com',
    messagingSenderId: '1018890481585',
    projectId: 'cocktail-finder',
};
// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    // enableClaims: true // Get custom claims along with the profile
};
export { fbConfig, rrfConfig };
