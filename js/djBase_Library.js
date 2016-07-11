"use strict";
// JavaScript Document 

		// Development Team: Mozilla Omaha

		// Developers:
			// Steven Van Sant ( alias: Kip )

				// Dev Date:
					// 5/16/2016

		// Use of this package is authorized under the understanding it is not the authors
		// responsibility to inform or maintain documentation or warning concerning 
		// standard practices for security or web site or application development.
		// Also, be aware this package is not complete and may
		// not be supported or maintained in the future.
		// Attribution to Kip Omaha is required.


// **********************************************************************************************************************************
// ************************************************************ Start Library *******************************************************
// **********************************************************************************************************************************


var pageDate = new Date(), ev = window.event;


// Notes: The follow array objects are made for:
// _intervalArray: Constructor Objects that have interval instructions
// made: Constroctor Objects for general purpose objects
// required: Constructor Objects for schema data
// Change Notes: Added the box variable. (3-16-2016)


var _made = [], _intervals = [], _required = [], pLCycle, box = [];


// Notes: Added the JSON.document property

	JSON.document = [];


// Shim Notes: Temp for capatibilty with old addIntervalListener() function


	pLCycle = _intervals;


// Notes: The follow array JSON objects are made for:
// _attrJSON: For inline JSON objects
// _htmlJSON: For noscript JSON objects


var _attrJSON = [], _htmlJSON = [];

var testSyntax = {
	Id: /\w+\-\w+(?=\|\#\,)|\w+\-\w+(?=\|\#\;)|\w+(?=\|\#\,)|\w+(?=\|\#\;)/,
	Class: /\w+\-\w+(?=\|\.\,)|\w+\-\w+(?=\|\.\;)|\w+(?=\|\.\,)|\w+(?=\|\.\;)/,
	Name: /\w+(?=\|_,)|\w+(?=\|_;)/,
	Tag: /\w+(?=\|,)|\w+(?=\|;)/,
	endFlag: /\;/,
	flag: /\,/,
	semiColonFlag: /\;/,
	barFlag: /\|/,
	operFlag: /\+|\-|\*|\//,
};

var getSyntax = {
	Id: /\w+\-\w+(?=\|\#\,)|\w+\-\w+(?=\|\#\;)|\w+(?=\|\#\,)|\w+(?=\|\#\;)/g,
	Class: /\w+\-\w+(?=\|\.\,)|\w+\-\w+(?=\|\.\;)|\w+(?=\|\.\,)|\w+(?=\|\.\;)/g,
	Name: /\w+(?=\|_,)|\w+(?=\|_;)/g,
	Tag: /\w+(?=\|,)|\w+(?=\|;)/g,
	endFlag: /\;/g,
	flag: /\,/g,
	semiColonFlag: /\;/,
	barFlag: /\|/g,
	operFlag: /\+|\-|\*|\//g,
};

var _searchFunc = function( search_param, comparison_param ){
var _matched;

	comparison_param === search_param ?

	_matched = comparison_param :

	_matched = "null";

	return _matched;

};

var constuctElement = function( Id, Class, Name, Html ){

	this.id = Id;
	this.class = Class;
	this.name = Name;
	this.html = Html;

};


// Change Notes: Deleted underscore function. (3-16-2016)


var getId = function( _id_param ){
var _array = [],
	_id_match = _id_param.match( /\w+\-\w+(?=\,)|\w+\-\w+(?=\;)|\w+\-\w+(?=\" ")|\w+(?=\,)|\w+(?=\;)|\w+(?=\" ")/g ),
	_testFunc = function( _id_param ){

		for( var c=0; c < _id_param.length; c++ ){

var _get_test = _id_param[c] === "undefined" ?
	"null" : document.getElementById( _id_param[c] );

	_get_test !== "null" ? _array.push( _get_test ) : _array.push( "null" );

		};

	};

	testSyntax.semiColonFlag.test( _id_param ) === true ? _testFunc( _id_match ) : _testFunc( [ _id_param ] );
	_array = _array.length === 1 ? _array[0] : _array;

	return _array;

},

	_ = getId;

var getClass = function( _class_param ){ 
var _array = [],
	_class_match = _class_param.match( /\w+\-\w+(?=\,)|\w+\-\w+(?=\;)|\w+\-\w+(?=\" ")|\w+(?=\,)|\w+(?=\;)|\w+(?=\" ")/g ),
	_testFunc = function( _class_param ){

		for( var c=0; c < _class_param.length; c++ ){

var _get_test = _class_param[c] === "undefined" ?
	"null" : document.getElementsByClassName( _class_param[c] );

	_get_test !== "null" ? _array.push( _get_test ) : _array.push( "null" );

		};

	};

	testSyntax.semiColonFlag.test( _class_param ) === true ? _testFunc( _class_match ) : _testFunc( [ _class_param ] );
	_array = _array.length === 1 ? _array[0] : _array;

	return _array;

	},
	_cS = getClass, 
	_cs = getClass; 

var getTag = function( _tag_param ){
var _array = [],
	_tag_match = _tag_param.match( /\w+\-\w+(?=\,)|\w+\-\w+(?=\;)|\w+\-\w+(?=\" ")|\w+(?=\,)|\w+(?=\;)|\w+(?=\" ")/g ),
	_testFunc = function( _tag_param ){

		for( var c=0; c < _tag_param.length; c++ ){

var _get_test = _tag_param[c] === "undefined" ?
	"null" : document.getElementsByTagName( _tag_param[c] );

	_get_test !== "null" ? _array.push( _get_test ) : _array.push( "null" );

		};

	};

	testSyntax.semiColonFlag.test( _tag_param ) === true ? _testFunc( _tag_match ) : _testFunc( [ _tag_param ] );
	_array = _array.length === 1 ? _array[0] : _array;

	return _array;

	},

	_tN = getTag,
	_tn = getTag; 

var getName = function( _name_param ){ 
var _array = [],
	_name_match = _name_param.match( /\w+\-\w+(?=\,)|\w+\-\w+(?=\;)|\w+\-\w+(?=\" ")|\w+(?=\,)|\w+(?=\;)|\w+(?=\" ")/g ),
	_testFunc = function( _name_param ){

		for( var c=0; c < _name_param.length; c++ ){

var _get_test = _name_param[c] === "undefined" ?
	"null" : document.getElementsByName( _name_param[c] );

	_get_test !== "null" ? _array.push( _get_test ) : _array.push( "null" );

		};

	};

	testSyntax.semiColonFlag.test( _name_param ) === true ? _testFunc( _name_match  ) : _testFunc( [ _name_param ] );
	_array = _array.length === 1 ? _array[0] : _array;

	return _array;

	},
	_nM = getName,
	_nm = getName; 


// Note: getElement() function's parameter uses dom retrieval


var getElement = function( syntax ){
var _return = [],
		_id_test = testSyntax.Id.test( syntax ) === true ? 
			_return.push( _( syntax.match( getSyntax.Id ).toString().match(/\w+/g).toString() + ";" ) ) : "",

		_class_test = testSyntax.Class.test( syntax ) === true ? 
			_return.push( _cs( syntax.match( getSyntax.Class ).toString().match(/\w+/g).toString() + ";" ) ) : "",

		_name_test = testSyntax.Name.test( syntax ) === true ? 
			_return.push( _nm( syntax.match( getSyntax.Name ).toString().match(/\w+/g).toString() + ";" ) ) : "",

		_tag_test = testSyntax.Tag.test( syntax ) === true ? 
			_return.push( _tn( syntax.match( getSyntax.Tag ).toString().match(/\w+/g).toString() + ";" ) ) : "";

	return _return;

},
	_get = getElement;


// Note: restatIntervalListener


var restartIntervalListener = function( _update ){

var restart_test = _update.length >= 1 ? 
		( pLCycle = _update, timeline = window.setInterval( function(){

	pLCycle.metaScan();

	}, 100 ), _update ) :

		( timeline = window.setInterval( function(){

	pLCycle.metaScan();

	}, 100 ), pLCycle );

	return restart_test;

	};


// Notes: String prototype for the HTML-JSON syntax
// Change Notes: added _fixLiteralNotation to allow literal object notation. (Date: 3/16/2016 )
// Change Notes: added _fixFinalComma to remove commas at the end of name/value pairs (Date: 3/16/2016 )
// Change Notes: moved the the _fixNullType (Date: 3/16/2016 )
// Change Notes: Change _nullValue to _emptyStringValue (Date: 3/16/2016 )
// Change Notes: Change _doubleqoutes to _singleToDoubleQoutes (Date: 3/16/2016 )
// Change Notes: Added a try/catch statement at the end for trouble shooting (Date: 3/16/2016 )
// Change Notes: Fixed _fixStringType. (3-16-2016)


	String.prototype.toJSON = function(){
var _emptyStringValue = this.replace( /\'\'(?=\,)|\'\'(?=\})|\'\'(?=\:)/g,'"null"' ),

_singleToDoubleQoutes = _emptyStringValue.replace(/\'+/g,'"'),

_fixNullType = _singleToDoubleQoutes.replace(/null+(?=\"\w)|null+(?=\s+)/g, 'null,' ),

_space = _fixNullType.replace( /\s+/g, "" ),

_fixStringType = _space.replace(/\"+(?=\"\w+\"\:)|\"+(?=\w+\:)/g, '",' ),

_fixObjectType = _fixStringType.replace(/\}+(?=\"\w)|\}+(?=\w)/g, '},' ),

_fixTrueType = _fixObjectType.replace(/true+(?=\"\w)|true(?=\w)/g, 'true,' ),

_fixFalseType = _fixTrueType.replace(/false+(?=\"\w)|false+(?=\w)/g, 'false,' ),

_fixNumberType = _fixFalseType.replace(/\d(?=\"\w)|\d(?=\w)/g, function( string ){ return string + ","; } ),

_fixArrayType = _fixNumberType.replace(/\]+(?=\"\w)|\]+(?=\w)/g, function( string ){ return string + ","; } ),

_fixLiteralNotation = _fixArrayType.replace(/\w+(?=\:)/g, function( string ){ return '"' + string + '"' } ),

_fixFinalComma = _fixLiteralNotation.replace(/\,+(?=\})/g, "" );

	try{

	console.log( "Finished retrieving HTML JSON" );
	return JSON.parse( _fixFinalComma );

	}
	catch(e){

	console.log( e + "\n\n" + _fixFinalComma);

	}

	};


// Note: String prototype version of the getElement() function


	String.prototype.getElement = function(){
var _return = [],
		_id_test = testSyntax.Id.test( this ) === true ? 
			_return.push( _( this.match( getSyntax.Id ).toString().match(/\w+/g).toString() + ";" ) ) : "",

		_class_test = testSyntax.Class.test( this ) === true ? 
			_return.push( _cs( this.match( getSyntax.Class ).toString().match(/\w+/g).toString() + ";" ) ) : "",

		_name_test = testSyntax.Name.test( this ) === true ? 
			_return.push( _nm( this.match( getSyntax.Name ).toString().match(/\w+/g).toString() + ";" ) ) : "",

		_tag_test = testSyntax.Tag.test( this ) === true ? 
			_return.push( _tn( this.match( getSyntax.Tag ).toString().match(/\w+/g).toString() + ";" ) ) : "";

	return _return;

	};


// Change Notes: Erased the underscore string prototype (3-16-2016)


// Note: Start of Object prototypes. 


// Note: Object prototype make. 
// Change Notes: Deleted the page object prototype methdo.
// Change Notes: make method object prototype now reads schema syntax.
// Change Notes: Constructor Objects are now sorted in there own arrays for easier object retrieval
// Change Notes: Added the checkJSON variable and fixed the setAttribute methods to accurately reflect back and forth between
	// the _jsn globals and the html globals while following the rule for DOM unique id's
// Change Notes: Removed the try catch statement. (3-16-2016)
// Change Notes: Removed the _user param. (3-16-2016)
// Change Notes: Added the box variable and the _jsn.box logic. (3-16-2016)
// Change Notes: Deleted the _createSchema variable. (3-16-2016)


	Object.prototype.make = function( _jsn ){
var checkJSON = this.hasAttribute("data-json") === true ? (
			_jsn.id !== undefined ? this.setAttribute( "id", _jsn.id ) : _jsn.id = "null",
			_jsn.class !== undefined ? this.setAttribute( "class", _jsn.class ) : ( _jsn.class = "null", this.setAttribute( "class", "null" ) ),
			_jsn.name !== undefined ? this.setAttribute( "name", _jsn.name ) : ( _jsn.name = "null", this.setAttribute( "name", "null" ) ) ):
		( _jsn );

var _req, _int, _createSchema, _box;

	_jsn.schema !== undefined ?
			( _req = new constuctElement( _jsn.id, _jsn.class, _jsn.name, _jsn.html ),
			  _req.schema = ( _jsn.schema ), 
			  _req.schema.utilities = _jsn.schema.utilities, _req.schema.forms = _jsn.schema.forms, _req.schema.divs = _jsn.schema.divs,
			  _required.push( _req ) ) : undefined;

	_jsn.interval !== undefined ?

				( _int = new constuctElement( _jsn.id, _jsn.class, _jsn.name, _jsn.html ),
			 	  _int.addIntervalListener( "null" ),
			 	  _interval.push( _int ) ) : undefined;

	_jsn.box !== undefined ?

				( _box = new constuctElement( _jsn.id, _jsn.class, _jsn.name, _jsn.html ),
				  _box.addBoxSet( _jsn ),
			 	  box.push( _box ) ) : undefined;

	return _jsn;

	};


// Note: The addIntervalListener object prototype.


	Object.prototype.addIntervalListener = function( _func, _jsn ){

	typeof _jsn === "string" ? 
		( this.pLCEvent = _func,
		  this.interval = _jsn, 
		  this.autoInterval = pageDate.getTime() ) : 
		typeof _jsn === "object" ? 
			( this.pLCEvent = _func,
		  	  this.interval = _jsn.interval,
		  	  this.autoInterval = pageDate.getTime() ) :
		  	  ( this.pLCEvent = _func,
		  		this.interval = page.getJsonById( this.id ).interval,
		  		this.autoInterval = pageDate.getTime() );

	return this;

	};

	Object.prototype.stopAddedInterval = function( objId ){

	objId === undefined ? 
		window.clearInterval( "timeline" ) :
		pLCycle.getJsonById( objId ).interval = "false";

	return this;

	};

	Object.prototype.addBoxSet = function( _jsn ){

		typeof _jsn === "string" ? 
		( this.box = _jsn.getElement() ) : 
		typeof _jsn === "object" ? 
			( this.box = _jsn.box.getElement() ) :
		  	( this.box = _attrJSON.getJsonById( this.id ).box.getElement() );
	
	return this;

	};


// Notes: Array Prototype Start


	Array.prototype.getJsonById = function( search_param ){
var _matched = "";

		for( var i=0; i < this.length; i++){
var _search = this[i] === "null" ? "null" : _searchFunc( search_param, this[i].id );

	_search === "null" ? "null" : _matched = this[i];

		};

	return _matched;

	};

	Array.prototype.getJsonByClassName = function( search_param ){
var _matched = [];

		for( var i=0; i < this.length; i++){
var _search = this[i] === "null" ? "null" : _searchFunc( search_param, this[i].class );

	_search === "null" ? 
		"null" : 
			( _matched.push( this[i] ) );

		}

	return _matched;

	};

	Array.prototype.getJsonByName = function( search_param ){
var _matched = [];

		for( var i=0; i < this.length; i++){
var _search = this[i] === "null" ? "null" : _searchFunc( search_param, this[i].name );

	_search === "null" ?
		"null" :
		( _matched.push( this[i] ) );

		}

	return _matched;

	};

	Array.prototype.getJsonByTagName = function( search_param ){
var _matched = [];

		for( var i=0; i < this.length; i++){
var _search = this[i] === "null" ? "null" : _searchFunc( search_param, this[i].html );

	_search === "null" ?
		"null" :
		( _matched.push( this[i] ) );

		}

	return _matched;

	};

	Array.prototype.metaScan = function(){

var	_scan = function( obj ){
var _new = new Date(), scan_time = _new.getTime();

	for( var i=0; i < obj.length; i++ ){

var lapse = scan_time-obj[i].autoInterval;

	obj[i].interval !== "false" ?
		( Number(obj[i].interval.match(number.unitSec))*1000 < lapse) ?
			( obj[i].pLCEvent(), obj[i].autoInterval = scan_time ) : ( false ) : ( false );

	};

};

var _quite_interval = function( obj ){
var _bolean_arr = [];

	for( var i=0; i < obj.length; i++ ){

	obj[i].interval !== "false" ?
		true :
		_bolean_arr.push( "false" );

	};

	return _bolean_arr;

};

var _if_False = this.length === _quite_interval( this ).length ?
		( window.clearInterval( timeline ), "false" ) :
		( this.length >= 1 ?
			( _scan( this ), "true" ) :
			( window.clearInterval( timeline ), "false" ) );

	return _if_False;

	};


// Notes: update() function. Used to retrieve HTML-JSON from the Page.
// Change Notes: _make param added so that a developer can send HTML-JSON to the make object method.
// Change Notes: Switched the order of HTML JSON retrieval so that update() now collects data-json information first.
// Change Notes: Deleted the first argument from the make() method.


var update = function( _inlineJSON, _make ){
var _noScript = document.getElementsByTagName("noscript"), _document = [];


// Script Note: Start of the _inlineJSON param  element loop


	if( _inlineJSON === true ){
var _elementNodelist = document.getElementsByTagName("*");
		for( var i=0; i < _elementNodelist.length; i++ ){
			if(_elementNodelist[i].hasAttribute("data-json") === true){
var _toJSON = _elementNodelist[i].getAttribute("data-json").toJSON();
	_document.push(_toJSON);
	_attrJSON.push(_toJSON);
	JSON.document.push(_toJSON);

	_make === true ?
		( _elementNodelist[i].make( _toJSON ) ) :
		( "" );

			}
		};
	};


// Script Note: Start of the noscript element loop


	for( var i=0; i < _noScript.length; i++ ){
var _toJSON = _noScript[i].innerHTML.toJSON();
	_document.push(_toJSON);
	_htmlJSON.push(_toJSON);
	JSON.document.push(_toJSON);

	_make === true ?
		( _noScript[i].make( _toJSON ) ) :
		( "" );

	};

	return _document;

};

var timeline = window.setInterval( function(){

	pLCycle.metaScan();

}, 100 );


// **********************************************************************************************************************************
// *********************************************************** CODE START **********************************************************
// **********************************************************************************************************************************


// Notes: Simple toggle function. 


var toggle = function(_toggle, _class){
	if( _(_toggle).className === "memory" ){
		_(_toggle).className = _class;
	}
	else{
		_(_toggle).className = "memory";
	}
};

// Notes: Simple Reader Utility Object

var reader = {
	active: false,
	library: function(){
// Notes: Beta constructor method. Used to create a library.

	},
	current: function(){
// Notes: Returns the current active book url.
		
	},
	_open: function(_containerClass, _viewerClass, _controlsClass){
// Notes: Opens the reader app.

	// Developer Notes: check to see if the reader is active. If it isn't than open in it or else close it.
		if(reader.active === false){
var container = document.createElement("div"),
	viewer = document.createElement("iframe"),
	controls = _("reader-form-controls");

	// Developer Notes: Set id of the container and viewer
	container.id = "reader-container"; 
	viewer.id = "reader-viewer";
	
	viewer.src = reader.current();

	// Developer Notes: Set the class name of the container, viewer, and controls.
	_containerClass !== undefined ? container.className = _containerClass : container.className; 
	_viewerClass !== undefined ? viewer.className = _viewerClass : viewer.className; 
	_controlsClass !== undefined ? controls.className = _controlsClass : controls.className;

	// Developer Notes: Append container into body than append the controls and viewer into the container.
	document.body.appendChild(container);
	container.appendChild(controls);
	container.appendChild(viewer);

	// Developer Notes: Set reader.active to true	
	reader.active = true;
		}
		else{
	_tn("memory")[0].appendChild(_("reader-form-controls"));
	_("reader-container").innerHTML = "";
	_("reader-container").outerHTML = "";

	
	reader.active = false; 
	
		}
	return;
	}
};

