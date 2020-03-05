import App from '../src/App.vue';
import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

    // do your setup here
    console.log("[DEMO] :: Starter-Kit of the Rainbow SDK for Web with Vue.js started!");

    var applicationID = "",
        applicationSecret = "";

    /* Bootstrap the SDK */
    angular.bootstrap(document, ["sdk"]).get("rainbowSDK");

    /* Callback for handling the event 'RAINBOW_ONREADY' */
    var onReady = function onReady() {
        console.log("[DEMO] :: On SDK Ready !");
        // do something when the SDK is ready
        // new Vue({
        //     el: '#app', vuetify, router,
        //     render: h => h(App)
        // })
        new Vue({
            render: h => h(App)
        }).$mount('#app');
    };

    /* Callback for handling the event 'RAINBOW_ONCONNECTIONSTATECHANGED' */
    var onLoaded = function onLoaded() {
        console.log("[DEMO] :: On SDK Loaded !");

        rainbowSDK.initialize(applicationID, applicationSecret).then(function() {
            console.log("[DEMO] :: Rainbow SDK is initialized!");
        }).catch(function(err) {
            console.log("[DEMO] :: Something went wrong with the SDK...", err);
        });
    };

    /* Listen to the SDK event RAINBOW_ONREADY */
    $(document).on(rainbowSDK.RAINBOW_ONREADY, onReady);

    /* Listen to the SDK event RAINBOW_ONLOADED */
    $(document).on(rainbowSDK.RAINBOW_ONLOADED, onLoaded);

    /* Load the SDK */
    rainbowSDK.load();
});


// $(function() {
//     console.log("[DEMO] :: Rainbow Application started!");
//
//
//     // Update the variables below with your applicationID and applicationSecret strings
//     var applicationID = "a58cfac05b0711eabf7e77d14e87b936",
//         applicationSecret = "JnjQaOpCW9Pc3u2IUQAvyjyiAEINpBo47Vb5S3jSUxHdgQkc3pqFFXGHJPojXbGu";
//
//     /* Bootstrap the SDK */
//     angular.bootstrap(document, ["sdk"]).get("rainbowSDK");
//
//     /* Callback for handling the event 'RAINBOW_ONREADY' */
//     var onReady = function onReady() {
//         console.log("[DEMO] :: On SDK Ready !");
//         // new Vue({
//         //     vuetify,router,
//         //     render: h => h(App)
//         // }).$mount('#app');
//
//     };
//
//     /* Callback for handling the event 'RAINBOW_ONCONNECTIONSTATECHANGED' */
//     var onLoaded = function onLoaded() {
//         console.log("[DEMO] :: On SDK Loaded !");
//
//         // Activate full SDK log
//         rainbowSDK.setVerboseLog(true);
//
//         rainbowSDK
//             .initialize(applicationID, applicationSecret)
//             .then(function() {
//                 console.log("[DEMO] :: Rainbow SDK is initialized!");
//             })
//             .catch(function(err) {
//                 console.log("[DEMO] :: Something went wrong with the SDK...", err);
//             });
//     };
//
//     /* Listen to the SDK event RAINBOW_ONREADY */
//     document.addEventListener(rainbowSDK.RAINBOW_ONREADY, onReady)
//
//     /* Listen to the SDK event RAINBOW_ONLOADED */
//     document.addEventListener(rainbowSDK.RAINBOW_ONLOADED, onLoaded)
//
//     /* Load the SDK */
//     rainbowSDK.load();
// });
