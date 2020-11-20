'use strict';

var routes = require('next-routes')(); //require invokes a function

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZixBLDBCQUF3Qzs7QUFFeEMsT0FDTSxBQUROLElBQ1UsQUFEVixrQkFDMkIsQUFEM0Isa0JBRU0sQUFGTixJQUVVLEFBRlYsdUJBRWdDLEFBRmhDLG1CQUdNLEFBSE4sSUFHVSxBQUhWLGdDQUd5QyxBQUh6Qyw2QkFJTSxBQUpOLElBSVUsQUFKVixvQ0FJNkMsQUFKN0M7O0FBTUEsT0FBTyxBQUFQLFVBQWUsQUFBZiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvaXRhY2hpL2tpY2tzdGFydCJ9