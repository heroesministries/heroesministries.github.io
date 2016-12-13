(function() {
angular
  .module('app', []);
})();

(function() {
  'use strict';

  angular
    .module('app')
    .controller('HeaderController', HeaderController);

  function HeaderController(){
    var vm = this;
    
    vm.menuOptions = {
      about: {
        text: 'About',
        href: '#seccion0'
      },
      work: {
        text: 'Work',
        href: '#seccion1'
      }
    };

    function activate() {
    }
  }
})();


(function () {
  'use strict';

  angular
    .module('app')
    .directive('pageScroll', PageScrollDirective);

  function  PageScrollDirective() {
    var directive = {
      bindToController: true,
      link: link,
      restrict: 'E'
    };
    return directive;

    function link(scope, element, attrs) {
      element.on('click', function() {
        var $anchor = $(this);        
        $('body').animate({
          scrollTop: $('main').scrollTop() + $($anchor.attr('href')).position().top - $('header').height()
        }, 1000, 'easeInOutExpo'); 

        event.preventDefault();
      });
    }
  }
})();