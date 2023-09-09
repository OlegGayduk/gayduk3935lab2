import {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.suai.pwa',
    appName: 'test mobile app',
    webDir: 'dist',
    bundledWebRuntime: false,
    backgroundColor: '#282D46',
    plugins: {
        "LocalNotifications": {
            "smallIcon": "logo.png",
            "iconColor": "#000000",
            "sound": "beep.wav"
        },
        "SplashScreen": {
            "launchShowDuration": 0
        },
        "PushNotifications": {
            "presentationOptions": ["badge", "sound", "alert"]
        }
    },
    server: {
        "hostname": "localhost",
        "androidScheme": "http",
        "iosScheme": "http"
    }
};

export default config;
