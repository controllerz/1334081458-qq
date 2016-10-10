(function() {  
  'use strict';

  angular
    .module('2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
