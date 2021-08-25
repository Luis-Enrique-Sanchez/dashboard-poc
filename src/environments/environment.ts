// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //api_url:"http://localhost:7777",
  api_url:"http://localhost:7777",
  //getItemsPath:"/portalserver/services/rest/api/v1/private/get/items",
  getItemsPath:"/portalserver/services/rest/api/v1/private/get/items/online",
  backbase_url:"http://ec2-3-81-147-145.compute-1.amazonaws.com:7777",
  logOut_url:"/portalserver/test-dashboard/index"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
