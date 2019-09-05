# Run

The service worker caching will only work as expected in production mode:

```sh
yarn build
serve -s build
```

Expose the app to any device:

```sh
ngrok http -bind-tls=true 5000
```

# Features

## 👍 Offline

[Browser support](https://whatwebcando.today/offline.html)

Implemented.

*Add the app to the Home Screen, switch to Flight Mode and start the app again, implemented 
features should function properly.*

## 👍 Geolocation tracking

[Browser support](https://whatwebcando.today/geolocation.html)

Implemented.

*Caveat: the user must accept geolocation usage when prompted.*

## 👍 QR Code Scanner

[Browser support](https://whatwebcando.today/camera-microphone.html)

Implemented.

*Caveat: the user must accept camera usage when prompted.*

## 👍 AR visualisation

Implemented.

[Browser support](https://whatwebcando.today/vr.html)

*Point the camera on the following marker and you should see a blue shape animate in front of it:*

![Image of Hiro marker](https://jeromeetienne.github.io/AR.js/data/images/HIRO.jpg)

*Caveat: the user must accept camera usage when prompted; this implementation is functional
but does not rely on the HTML5 specification because most browsers have no or little support for
WebVR API and WebXR Device API.*

## 👍 Payment

Implemented.

[Browser support](https://whatwebcando.today/payments.html)

## 👍 Custom Home Screen installation

Implemented.

[Browser support](https://whatwebcando.today/installation.html)

*Caveat: the application is not entirely in control of the moment the application will be 
installable by the user (unless they use the browser settings). Upon installation refusal,
we will not be able to prompt them to install the app for 3 months (on Chrome, AFAIK). We
must rely mostly on the user touching the Share button or opening their browser settings.*

## ❓Local push notifications

TODO.

[Browser support](https://whatwebcando.today/local-notifications.html)

*Caveat: no support on iOS.*

## 👎 Location-based push notifications (geofencing)

[Browser support](https://whatwebcando.today/geofencing.html)

This is not implemented in any browser.

*While geofencing is supported on both Android and iOS (on native applications), it is always
possible to either implement it ourselves or use a third-party service to make it work on the web.*

**Native is required.**

## 👎 NFC

[Browser support](https://whatwebcando.today/nfc.html)

This is not implemented in most browsers.

*Caveat: even in Chrome, NFC must be enabled by the user in their Settings
since it is an experimental feature.*

**Native is required.**

## 👎 Proximity detection

[Browser support](https://whatwebcando.today/proximity.html)

This is not implemented in any browser.

**Native is required.**
