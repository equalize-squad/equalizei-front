/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
 /** Map relative paths to URLs. */
 const map:any = {
   '@angular2-material': 'vendor/@angular2-material',
   'angular2-devise-token-auth': 'vendor/angular2-devise-token-auth/dist'
 };

/** User packages configuration. */
const packages: any = {
  'angular2-devise-token-auth': {
    main: 'angular2-devise-token-auth.js'
  }
};

// put the names of any of your Material components here
const materialPkgs:string[] = [
  'core',
  'button',
  'card',
  'checkbox',
  'grid-list',
  'icon',
  'input',
  'list',
  'progress-bar',
  'progress-circle',
  'radio',
  'sidenav',
  'slide-toggle',
  'tabs',
  'toolbar'
];

materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/forms',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/+sign-up',
  'app/+users',
  'app/shared',
  'app/+sign-in',
  'app/message',
  'app/+dashboard',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
