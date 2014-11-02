/**
 * Handle Waypoints
 *
 * $author       Richard Bultitude
 * $email        richard.bultitude@gmail.com
 * $url          http://www.frondmusic.com/
 * $copyright    Copyright (c) 2014, frondmusic.com. All rights reserved.
 * $version      1.3
 *
 * $notes        Notes
 */

define(['waypoints'], function() {
	'use strict';

	var handleWaypoints = {

	mqMax: window.matchMedia("all and (max-width: 600px)"),
	mqMin: window.matchMedia("all and (min-width: 600px)"),

	initWaypoints: function initWaypointsFn() {
		console.log('smaller than 600');
		$('.footer').waypoint(function() {
			$('.link-cta').toggleClass('active');
		}, {
			offset: 'bottom-in-view'
		});
		//check size
		handleWaypoints.toggleWaypoints();
	},

	toggleWaypoints: function toggleWaypointsFn() {
		if (handleWaypoints.mqMax.matches) {
			console.log('smaller than 600');
			$('.footer').waypoint('enable');
		} 
		else if(handleWaypoints.mqMin.matches) {
			console.log('bigger than 600');
			$('.footer').waypoint('disable');
		}
	},

	handleResize: function handleResizeFn() {
		$(window).on('resize', function() {
			handleWaypoints.toggleWaypoints();	
		});
	},

	init: function inithandleWaypoints() {
		handleWaypoints.initWaypoints();
		handleWaypoints.handleResize();
	}

};

return handleWaypoints;

});