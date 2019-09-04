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

*Point the camera on the following marker and you should see a blue shape animate in front of it:*

![Image of Hiro marker](https://jeromeetienne.github.io/AR.js/data/images/HIRO.jpg)

*Caveat: the user must accept camera usage when prompted.*

## 👎 Location-based push notifications (geofencing)

[Browser support](https://whatwebcando.today/geofencing.html)

This is not implemented in any browser.

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
