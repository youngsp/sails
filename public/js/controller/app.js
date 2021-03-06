// Include all service in app
var app = angular.module('sails', ['ngResource', 'buildingServices', 'floorServices', 
                                   'storeServices', 'adServices', 'userServices', 'developerApplicationServices']);

// REST API of Building
angular.module('buildingServices', [ 'ngResource' ]).factory('Building', function($resource) {
    return $resource('/building/:action/:_id', { _id : "@id"}, {

        get : {
            method : 'GET',
            params : {
                action : 'read'
            }
        },
        create : {
            method : 'POST',
            params : {
                action : 'create'
            }
        },
        save : {
            method : 'POST',
            params : {
                action : 'update'
            }
        },
        "delete" : {
            method : 'POST',
            params : {
                action : 'delete'
            }
        },
        list : {
            method : 'GET',
            params : {
                action : 'listPage',
                page: 1
            }
        },
        packageMapzip : {
            method : 'POST',
            params : {
                action : 'packageMapzip'
            }
        }                
    });
});

// REST API of Floor
angular.module('floorServices', [ 'ngResource' ]).factory('Floor', function($resource) {
    return $resource('/floor/:action/:_id', { _id : "@id" }, {
        get : {
            method : 'GET',
            params : {
                action : 'read'
            }
        },
        create : {
            method : 'POST',
            params : {
                action : 'create'
            }
        },
        save : {
            method : 'POST',
            params : {
                action : 'update'
            }
        },
        "delete" : {
            method : 'POST',
            params : {
                action : 'delete'
            }
        },
        list : {
            method : 'GET',
            params : {
                action : 'list'
            },
            isArray : true
        }
    });

});


// REST API of Store
angular.module('storeServices', [ 'ngResource' ]).factory('Store', function($resource) {
    return $resource('/store/:action/:_id', { _id : "@id" }, {
        get : {
            method : 'GET',
            params : {
                action : 'read'
            }
        },
        create : {
            method : 'POST',
            params : {
                action : 'create'
            }
        },
        save : {
            method : 'POST',
            params : {
                action : 'update'
            }
        },
        "delete" : {
            method : 'POST',
            params : {
                action : 'delete'
            }
        },
        list : {
            method : 'GET',
            params : {
                action : 'list'
            },
            isArray : true
        }
    });
});


// REST API of Ad
angular.module('adServices', [ 'ngResource' ]).factory('Ad', function($resource) {
    return $resource('/ad/:action/:_id', { _id : "@id" }, {
        get : {
            method : 'GET',
            params : {
                action : 'read'
            }
        },
        create : {
            method : 'POST',
            params : {
                action : 'create'
            }
        },
        save : {
            method : 'POST',
            params : {
                action : 'update'
            }
        },
        "delete" : {
            method : 'POST',
            params : {
                action : 'delete'
            }
        },
        list : {
            method : 'GET',
            params : {
                action : 'list'
            },
            isArray : true
        }
    });
});

// REST API of User
angular.module('userServices', [ 'ngResource' ]).factory('User', function($resource) {
    return $resource('/user/:action/:_id', { _id : "@id" }, {
        get : {
            method : 'GET',
            params : {
                action : 'read'
            }
        },
        save : {
            method : 'POST',
            params : {
                action : 'update'
            }
        },
        changePassword : {
            method : 'POST',
            params : {
                action : 'changePassword'
            }        	
        },
        upgradeDeveloper : {
            method : 'POST',
            params : {
                action : 'upgradeDeveloper'
            }        	
        }            
    });
});

// REST API of Developer
angular.module('developerApplicationServices', [ 'ngResource' ]).factory('DeveloperApplication', function($resource) {
    return $resource('/developer/app/:action/:_id', { _id : "@id" }, {
        create : {
            method : 'POST',
            params : {
                action : 'create'
            }
        },
        save : {
            method : 'POST',
            params : {
                action : 'update'
            }
        },
        "delete" : {
            method : 'POST',
            params : {
                action : 'delete'
            }
        },
        list : {
            method : 'GET',
            params : {
                action : 'list'
            }
        },
        regenerateKey : {
            method : 'POST',
            params : {
                action : 'regenerateKey'
            }           
        }                
    });
});