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

# Analysis

| Feature              | Support                                                            | Impl | Comments | Questions |
| -------------------- | ------------------------------------------------------------------ | ---- | -------- | --------- |
| Offline              | [whatwebcando](https://whatwebcando.today/offline.html)            | ✅🤩 | Add the app to the Home Screen, switch to Flight Mode and start the app again, the app should function smoothly. | |
| Geolocation tracking | [whatwebcando](https://whatwebcando.today/geolocation.html)        | ✅🤩 | The user must accept geolocation usage when prompted. | *Should work when the app is in the background too, does it?* |
| QR Code Scanner      | [whatwebcando](https://whatwebcando.today/camera-microphone.html)  | ✅🤩 | The user must accept camera usage when prompted. | *What about barcode standards?* |
| Payment              | [whatwebcando](https://whatwebcando.today/payments.html)           | ✅😄 | The payment is not processed for real here but the workflow is realistic. | *This is smooth but not as smooth as store in-app purchases.* |
| Augmented Reality    | [whatwebcando](https://whatwebcando.today/vr.html)                 | ✅😄 | See below; the user must accept camera usage when prompted; this implementation is functional but does not rely on the HTML5 specification because most browsers have little or no support for WebVR API and WebXR Device API. | *Performance limitations?* |
| Installation         | [whatwebcando](https://whatwebcando.today/installation.html)       | ✅😄 | The application is not entirely in control of the moment the application will be  installable by the user (unless they use the browser share/settings). Upon installation refusal, we will not be able to prompt them to install the app for 3 months (on Chrome, AFAIK). We must rely mostly on the user using the browser feature to install the application. | *Is there an alternative way to deploy the PWAs to users?* |
| Local notifications  | [whatwebcando](https://whatwebcando.today/local-notifications.html)| ✅😐 | No support on iOS AFAIK. | *There is non-standard iOS-specific solution to this, is it viable?* |
| Geofencing           | [whatwebcando](https://whatwebcando.today/geofencing.html)         | ❌😢 | No support in any browser while this is supported natively both on Android and iOS. However a custom implementation seems totally doable. | *What do third-parties such as HERE provide?* |
| NFC                  | [whatwebcando](https://whatwebcando.today/nfc.html)                | ❌😡 | No support in browsers (expect Chrome with the experimental feature on). | |
| Proximity detection  | [whatwebcando](https://whatwebcando.today/proximity.html)          | ❌😡 | No support in any browser. | |

### Augmented Reality

*Point the camera on the following marker and you should see a blue shape animate in front of it:*

![Image of Hiro marker](https://jeromeetienne.github.io/AR.js/data/images/HIRO.jpg)
