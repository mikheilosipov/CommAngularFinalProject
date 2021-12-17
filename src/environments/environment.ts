// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  accuWeather: {
    apiKey: 'QxsLy6zC1HAeiiAu4SUYtXK7QAW8Psa1',
    locationsApiBase: 'http://dataservice.accuweather.com/locations/v1',
    currentConditions: 'http://dataservice.accuweather.com/currentconditions/v1'
  },
  firebaseConfig: {
    projectId: 'commangularfinalproject',
    appId: '1:915789704235:web:5a5bf74cf6c9dd96cb4e6e',
    storageBucket: 'commangularfinalproject.appspot.com',
    apiKey: 'AIzaSyAT6rkIY34a9oKKAOEE1yEJZjhg-jNM7vQ',
    authDomain: 'commangularfinalproject.firebaseapp.com',
    messagingSenderId: '915789704235',
    measurementId: 'G-H551JZS074',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
