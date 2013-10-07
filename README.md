BrightCoveLoadVideo
===================

JQuery Plugin for BrightCove which allows you to load thumbnails and launch the MP4 video file once the ID is provided.


##Sample

The plugin was intended to be used as is, mainly modifying the token value and providing new video IDs as necessary.

```javascript
var pluginSettings = {
  token: 'xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX..'
}

var bcPlayer = new $.BCLoadMp4( $('#id') , pluginSettings);

bcPlayer.loadVideo('XXXXXXXXXXXXX');
```
