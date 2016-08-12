'use strict';

angular
	.module('app', ['ngMaterial']);
	
	
	

	angular
        .module('app')
        .directive('mySlider', mySlider);
    
    function mySlider () {
        var directive = {
            restrict: 'EA',
            templateUrl: 'slider.tpl.html',
            scope:{},
            link : link
        };
        
        return directive;
        
        function link (scope, element, attrs) {
            $(document).ready(function(){
              $('.slider').slider({
				  full_width: true,
				  transition: 500,
				  interval: 7000
			  });
				
				console.log('Before Scrolling');
				
				var options = [
				{selector: '.caption', offset: 200, callback: function() {
				  Materialize.slider('next');
				}},
			  ];
			  Materialize.scrollFire(options);
				
				
            });   
        }
    }


angular
	.module('app')
	.directive('myPage', page);

function page(){
	var directive ={
		restrict: 'AE',
		templateUrl: 'page.html',
		link: link
	}
	
	return directive;
	
	function link(scope, element, attrs){
		/*
		$(document).ready(function(){
		  $('.parallax').parallax();
		});
		*/
		
		
		
		$(document).ready(function() {
			$( "#initial-banner" ).show().animate({
				height: "30%"
			}, 1500 );
			
				$('#fullpage').fullpage({
					//Navigation
        			menu: '#menu',
        			lockAnchors: false,
        			anchors:['firstPage', 'secondPage', 'ContactUs', 'Last'],
					
					navigation: false,
					navigationPosition: 'right',
					navigationTooltips: ['firstSlide', 'secondSlide'],
					showActiveTooltip: false,
					slidesNavigation: true,
					slidesNavPosition: 'bottom',

					//Scrolling
					css3: true,
					scrollingSpeed: 800,
					autoScrolling: true,
					fitToSection: true,
					fitToSectionDelay: 1000,
					scrollBar: false,
					easing: 'easeInOutCubic',
					easingcss3: 'ease',
					loopBottom: true,
					loopTop: false,
					loopHorizontal: true,
					continuousVertical: false,
					normalScrollElements: '#element1, .element2',
					scrollOverflow: false,
					scrollOverflowOptions: null,
					touchSensitivity: 15,
					normalScrollElementTouchThreshold: 5,
					bigSectionsDestination: null,

					//Accessibility
					keyboardScrolling: true,
					animateAnchor: true,
					recordHistory: true,

					//Design
					controlArrows: true,
					verticalCentered: true,
					sectionsColor : ['#31353b', '#31353b', '#20f3a3', '#FFC107'],
					paddingTop: '0',
					paddingBottom: '0',
					fixedElements: '#header, .footer',
					responsiveWidth: 0,
					responsiveHeight: 0,

					//Custom selectors
					sectionSelector: '.section',
					slideSelector: '.slide',

					//events
					onLeave: function(index, nextIndex, direction){
						var loadedSection = $(this);
						
						if(nextIndex == 2) {
							var id = '#section-'+nextIndex;
							
							console.log('**************', id);
							$(id + ' md-content md-card').show().animate({ height: '350px', 'marginTop': '15%'}, 1500);
						}
						
						console.log('SECTION: ', index, nextIndex, direction);
					},
					afterLoad: function(anchorLink, index){},
					afterRender: function(){},
					afterResize: function(){},
					afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
					onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
				});
			});
		
		
		
		
		
		
		
		
		
		
		$( window ).scrollTop(function() {
  $( "a" ).animate(1000);
});
		
		$('a[href^="#"]').on('click', function(event) {

			var target = $(this.getAttribute('href'));

			if( target.length ) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top
				}, 1000);
			}

		});
	}
}