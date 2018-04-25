function onDeviceReady() {
      document.removeEventListener('deviceready', onDeviceReady, false);
      
      // Set AdMobAds options: 
      admob.setOptions({
        publisherId:          "ca-app-pub-7025332965195086/5260116767",  // Required 
        tappxIdAndroid:       "Pub-39084-Android-9162",        // Optional 
        tappxShare:           0.1                                        // Optional 
       adSize:               admob.AD_SIZE.SMART_BANNER,
  bannerAtTop:          false,
  overlap:              false,
  offsetStatusBar:      false,
  isTesting:            false,
  adExtras :            {},
  autoShowBanner:       true,
  autoShowInterstitial: false
      });
      
      // Start showing banners (atomatic when autoShowBanner is set to true) 
      admob.createBannerView();
      
      // Request interstitial (will present automatically when autoShowInterstitial is set to true) 
      admob.requestInterstitialAd();
    }
    
    document.addEventListener("deviceready", onDeviceReady, false);
