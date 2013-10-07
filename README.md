BrightCoveLoadVideo
===================

JQuery Plugin for BrightCove which allows you to load thumbnails and launch the MP4 video file once the ID is provided.


##Sample

The plugin was intended to be used as-is (internal project). The main thing you have to be concerned about is the token value and the different video ID's in order for the thumbnails that will then launch the MP4 files to be displayed on the browser.

```javascript
	var pluginSettings = {
	  token: 'xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX..'
	}

	var bcPlayer = new $.BCLoadMp4( $('#id') , pluginSettings );

	bcPlayer.prepareAsset( 'XXXXXXXXXXXXX' );
```

####Things to consider

In order to get the MP4 address your BrightCove account must be set to HTTP [Delivery](http://support.brightcove.com/en/video-cloud/docs/setting-video-delivery-options)

The test was intended to load MP4 files for mobile devices only. You can switch the flag on/off on isMobile.