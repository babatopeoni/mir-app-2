angular.module('WordApp.config', [])

// Replace with your Wordpress Blog WP REST API url 
.constant('WORDPRESS_API_URL', 'https://mirhassanmir.com/lyrics2/wp-json/wp/v2/')

// Replace with your Google Project Number https://documentation.onesignal.com/v2.0/docs/android-generating-a-gcm-push-notification-key
.constant('GOOGLE_PROJECT_NUMBER', '465096348346')

// Replace with your OneSignal AppId https://documentation.onesignal.com/docs/phonegap-sdk-installation#2-add-required-code
.constant('ONESIGNAL_APP_ID', '9fe239ab-f1a8-4aaf-81f5-582c5b63cec5')

// Change color your Ionic application to light, stable, positive, calm, balanced, energized, assertive, royal or dark 
.constant('IONIC_APP_COLOR', 'calm')

// Change Posts page template to cards, cards2, list
.constant('POSTS_TEMPLATE', 'cards2')

// Replace with your Android package name and IOS app ID
.constant('ANDROID_PACKAGE_NAME', 'com.mirhassanmir.mirhasanapp')
.constant('IOS_APP_ID', 'com.mirhassanmir.mirhasanapp')

// Replace with your Primary Email to send Feedback
.constant('PRIMARY_EMAIL', 'mirhasanmirr@gmail.com')

// Replace with email to send copy Feedback or leave empty
.constant('COPY_EMAIL', '')

// Replace with phone number for send SMS
.constant('SMS_PHONE_NUMBER', '+923452470214');
