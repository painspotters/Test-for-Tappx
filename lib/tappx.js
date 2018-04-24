function onDeviceReady() {
      document.removeEventListener('deviceready', onDeviceReady, false);
      
      // Set AdMobAds options: 
      admob.setOptions({
        publisherId:          "ca-app-pub-3940256099942544/6300978111",  // Required 
        interstitialAdId:     "",  // Optional 
        tappxIdiOS:           "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional 
        tappxIdAndroid:       "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional 
        tappxShare:           0.1                                        // Optional 
      });
      
      // Start showing banners (atomatic when autoShowBanner is set to true) 
      admob.createBannerView();
      
      // Request interstitial (will present automatically when autoShowInterstitial is set to true) 
      admob.requestInterstitialAd();
    }
    
    document.addEventListener("deviceready", onDeviceReady, false);