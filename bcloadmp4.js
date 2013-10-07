/**
 * Jquery Plgin that fetches the video thumbnail and video URL
 * @param {object} el      Object on DOM that will have child elements appeneded to
 * @param {object} options Override options for this specific plugin
 */
$.BCLoadMp4 = function(el, options) {

        var defaults = {
        	token: 'jskS1rEtQHy9exQKoc14IcMq8v5x2gCP6yaB7d0hraRtO__6HUuxMg..',
        	fields: 'FLVURL,thumbnailURL',
        	mediaDelivery: 'http',
        	domain: 'http://api.brightcove.com/services/library',
        	command: 'find_video_by_id',
          propertyName: 'value'
        }

        var plugin = this;

        plugin.settings = {}

        var init = function() {
            plugin.settings = $.extend({}, defaults, options);
            plugin.el = el;
        }

        plugin.load_thumb = function(videoId) {

        	var url = 	plugin.settings.domain + '?command=' + 
        				plugin.settings.command + '&video_id=' + 
        				videoId + '&video_fields=' + 
        				plugin.settings.fields + '&media_delivery=' + 
        				plugin.settings.mediaDelivery + '&token=' + 
        				plugin.settings.token; 
        	
    			$.ajax({
    				url: url,
    				type: 'GET',
    				crossDomain: true,
    				dataType: 'jsonp',
    				success: function(e) {
    					create_player(e)
    				},
    				error: function() {
      				// nothing at this moment
    				}
    			});
			

        }

        var create_player = function(e) {
			    plugin.el.append('<div class="bcvideo"><a href="' + e.FLVURL+ '"><img class="bcimage" src="'+e.thumbnailURL+'"></a></div>')
        }


        init();

    }
