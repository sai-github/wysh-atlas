// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: 'AIzaSyAk7AZPNkmOvReT7BQHOdPjJtWgl8vRUPc',
  authDomain: 'wysh-atlas.firebaseapp.com',
  databaseURL: 'https://wysh-atlas.firebaseio.com',
  projectId: 'wysh-atlas',
  storageBucket: 'wysh-atlas.appspot.com',
  messagingSenderId: '185755587529',
  appId: '1:185755587529:web:d8176d520b6bb659374e18',
  measurementId: 'G-0RWDXYEF84',
};

export const environment = {
  production: false,
  firebase: firebaseConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
