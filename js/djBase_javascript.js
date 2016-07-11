"use strict";
// JavaScript Document 

		// Development Team: Kip Omaha

		// Developers:
			// Steven Van Sant ( alias: Kip )

				// Dev Date:
					// 12/27/2015

		// Redistribituion of this package isn't authorized.


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

var _req, _int, _make, _box;


// Temp Notes: Commented out until further development.
//	_jsn.schema !== undefined ?
//			( _req = new constuctElement( _jsn.id, _jsn.class, _jsn.name, _jsn.html ),
//			  _req.schema = ( _jsn.schema ), 
//			  _req.schema.utilities = _jsn.schema.utilities, _req.schema.forms = _jsn.schema.forms, _req.schema.divs = _jsn.schema.divs,
//			  _required.push( _req ) ) : undefined;


	_jsn.interval !== undefined ?

				( _int = new constuctElement( _jsn.id, _jsn.class, _jsn.name, _jsn.html ),
			 	  _int.addIntervalListener( "null" ),
			 	  _interval.push( _int ) ) : undefined;

	_jsn.box !== undefined ?

				( _box = new constuctElement( _jsn.id, _jsn.class, _jsn.name, _jsn.html ),
				  _box.addBoxSet( _jsn ),
			 	  box.push( _box ) ) : 
				 ( _make = new constuctElement( _jsn.id, _jsn.class, _jsn.name, _jsn.html ),
				 _made.push(_make) );

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


var listenBody = document.body.addEventListener("click", function(ev){
var _class = ev.target.getAttribute("class"),
	_id = ev.target.getAttribute("id"),
	_appJson = JSON.document.getJsonById("application-data");

	switch(_class){
		case "application-utility-menu":
			_("_prompt_Section") !== undefined ?
				( _("_prompt_Section").innerHTML = "", _("_prompt_Section").outerHTML = "" ) :
				( "" );
		return;
		default:
		break;
	};
});


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


// *************** NOTE:  JS Lab styles


var _styles = function( _element, p, x, y, z, w, h, m, pd, bg, bd, f, fs, fc, fw, fm, u ){
	_element.style.position = p;
	_element.style.top = y;
	_element.style.left = x;
	_element.style.zIndex = z;
	_element.style.width = w;
	_element.style.height = h;
	_element.style.margin = m;
	_element.style.padding = pd;
	_element.style.backgroundColor = bg;
	_element.style.border = bd;
	_element.style.font = f;
	_element.style.fontSize = fs;
	_element.style.color = fc;
	_element.style.fontWeight = fw;
	_element.style.fontFamily = fm;

	return _element.getAttribute("style");

};


// Notes: _validateJS() checks to see that the javascript doesn't contain any ajax or the html doesn't contain any script tags with linke sources.


var _validateJS = function( _html, _javascript){
var _javascriptCheck = /new xmlhttprequest\(\)/i.test(_javascript) === true ?
		( _javascript.replace(/xmlhttprequest\(\)/gi, "" ), null ) :
		( "Javacript check done." ),

	_htmlCheck = /\w+\.js/i.test(_html) === true ?
		( _javascript.replace(/\w+\.js/gi, "" ), null ) :
		( "HTML check done." ),

	_returnValue;

	_javascriptCheck === null || _htmlCheck === null ? 
		( _returnValue = false ) :
		( _returnValue = true );

	return _returnValue;

};


// *************** NOTE:  JS Lab web application


var _ide = update(true,true);


// *************** NOTE:  JS Lab Execute event


	_("executeJS").addEventListener( "click", function(){
var _win = document.createElement("article"),
	_script = document.createElement("script");
		_("newWinCheck").checked === false ? (
		_made.getJsonById("jsLabTextConsole")._func = _("jsLabTextConsole").value,
		_made.getJsonById("htmlLabTextConsole")._document = _("htmlLabTextConsole").value,
		_win.setAttribute( "id", "_document" ),
		_script.setAttribute("type","text/javascript"),
		_script.innerHTML = _made.getJsonById("jsLabTextConsole")._func,
		_win.innerHTML += _made.getJsonById("htmlLabTextConsole")._document,
		_win.appendChild(_script),
		_win.appendChild( _("_exeDocUtilities") ),
		document.body.appendChild( _win ),
		_styles( _win, "fixed", "22px","0px", "", "100%","100%","0px","10px", "rgba(255,255,255,1)", "rgba(0,255,100,1) 3px outset" ),
		_("_exeDocUtilities").style.visibility = "visible",
		_("_document").style.zIndex = "14" ) : (
		_made.getJsonById("jsLabTextConsole")._func = _("jsLabTextConsole").value,
		_made.getJsonById("htmlLabTextConsole")._document = _("htmlLabTextConsole").value,
		_("new_Window_Document_App").click() );
	} );



// *************** NOTE:  JS Lab Snippet Menu: Insert


	_("new_Window_Document_App").addEventListener( "click", function(){
var _newWindow = window.open(), 
	_script = document.createElement("script"), 
	_article = document.createElement("article");
		_article.innerHTML = _made.getJsonById("htmlLabTextConsole")._document;
		_script.innerHTML = _made.getJsonById("jsLabTextConsole")._func;
		_newWindow.document.body.innerHTML += _article.innerHTML;
		_newWindow.document.body.appendChild(_script);
		_newWindow.document.getElementById("_exeDocUtilities").innerHTML = "";
		_newWindow.document.getElementById("_exeDocUtilities").outerHTML = "";
	} );


// *************** NOTE:  JS Lab Snippet Menu: Insert


	_cs("application-utility-menu")[0].addEventListener( "click", function(){
var _json = JSON.document.getJsonById("application-data").data.application,
	_object = _( _json[0].menu );
		_object.getAttribute("class") === "memory" ?
			( _object.setAttribute("class", "application-active-menu") ) :
			( _object.setAttribute("class", "memory") );
		for( var i=0; i < _json.length; i++ ){
			i !== 0 ?
				( _json[i].box = "categoryMenuBox",
				_( _json[i].menu ).setAttribute( "class", "memory") ) :
				( "" );
		};
	} );


// *************** NOTE:  JS Lab Snippet Menu: Regular Expressions


	_cs("application-utility-menu")[1].addEventListener( "click", function(){
var _json = JSON.document.getJsonById("application-data").data.application,
	_object = _( _json[1].menu );
		_object.getAttribute("class") === "memory" ?
			( _object.setAttribute("class", "application-active-menu") ) :
			( _object.setAttribute("class", "memory") );
		for( var i=0; i < _json.length; i++ ){
			i !== 1 ?
				( _json[i].box = "categoryMenuBox",
				_( _json[i].menu ).setAttribute( "class", "memory") ) :
				( "" );
		};
	} );


// *************** NOTE:  JS Lab Snippet Menu: Set Interval


	_cs("application-utility-menu")[2].addEventListener( "click", function(){
var _json = JSON.document.getJsonById("application-data").data.application,
	_object = _( _json[2].menu );
		_object.getAttribute("class") === "memory" ?
			( _object.setAttribute("class", "application-active-menu"),
			_json[2].box = "active" ) :
			( _object.setAttribute("class", "memory") );
		for( var i=0; i < _json.length; i++ ){
			i !== 2 ?
				( _json[i].box = "categoryMenuBox",
				_( _json[i].menu ).setAttribute( "class", "memory") ) :
				( "" );
		};
	} );


// *************** NOTE:  JS Lab Snippet Menu: Dynamic Menus


	_cs("application-utility-menu")[3].addEventListener( "click", function(){
var _json = JSON.document.getJsonById("application-data").data.application,
	_object = _( _json[3].menu );
		_object.getAttribute("class") === "memory" ?
			( _object.setAttribute("class", "application-active-menu"),
			_json[3].box = "active" ) :
			( _object.setAttribute("class", "memory") );
		for( var i=0; i < _json.length; i++ ){
			i !== 3 ?
				( _json[i].box = "categoryMenuBox",
				_( _json[i].menu ).setAttribute( "class", "memory") ) :
				( "" );
		};
	} );


// *************** NOTE:  JS Lab Snippet Menu: SVG Manipulation


	_cs("application-utility-menu")[4].addEventListener( "click", function(){
var _json = JSON.document.getJsonById("application-data").data.application,
	_object = _( _json[4].menu );
		_object.getAttribute("class") === "memory" ?
			( _object.setAttribute("class", "application-active-menu"),
			_json[4].box = "active" ) :
			( _object.setAttribute("class", "memory") );
		for( var i=0; i < _json.length; i++ ){
			i !== 4 ? 
				( _json[i].box = "categoryMenuBox",
				_( _json[i].menu ).setAttribute( "class", "memory") ) :
				( "" );
		};
	} );


// *************** NOTE:  JS Lab Option's Menu: regExp Options


var regExpOptions = JSON.document.getJsonById("application-data").data.application[1].snippet;
	_("regExp_Options").addEventListener( "click", function(ev){
		_( JSON.document.getJsonById("application-data").data.application[1].target ).innerHTML = _(regExpOptions[this.selectedIndex]).innerHTML
	} );


// *************** NOTE:  JS Lab Option's Menu: setInterval() Options


var intervalOptions = JSON.document.getJsonById("application-data").data.application[2].snippet;
	_("setInt_Options").addEventListener( "click", function(ev){
		_( JSON.document.getJsonById("application-data").data.application[2].target ).innerHTML = _(intervalOptions[this.selectedIndex]).innerHTML
	} );


// *************** NOTE:  JS Lab Option's Menu: dynamic menu Options


var dynamicOptions = JSON.document.getJsonById("application-data").data.application[3].snippet;
	_("dynamicWin_Options").addEventListener( "click", function(ev){
		_( JSON.document.getJsonById("application-data").data.application[3].target ).innerHTML = _(dynamicOptions[this.selectedIndex]).innerHTML
	} );


// *************** NOTE:  JS Lab Option's Menu: svgManip menu Options


var svgOptions = JSON.document.getJsonById("application-data").data.application[4].snippet;
	_("svgManip_Options").addEventListener( "click", function(ev){
		_( JSON.document.getJsonById("application-data").data.application[4].target ).innerHTML = _(svgOptions[this.selectedIndex]).innerHTML
	} );


// Key Up Event Listener JS Console


	_("jsLabTextConsole").addEventListener( "keyup", function(ev){
		_made.getJsonById("jsLabTextConsole")._func = this.value;
	} );



// Key Up Event Listener HTML Console


	_("htmlLabTextConsole").addEventListener( "keyup", function(ev){
		_made.getJsonById("htmlLabTextConsole")._document = this.value;
	} );


// Click event listener Enlarge JS Console


	_( "enlargJSConsoleBtn" ).addEventListener( "click", function(ev){
		_("jsLabTextConsole").style.position !== "fixed" ? (
			_styles( _( "jsLabTextConsole" ), "fixed", "24px", "0px", "11", "100%", "100%", "0px", "0mm" ),
			_styles( _( "enlargJSConsoleBtn" ), "fixed", "85%", "0px", "12" ),
			_("enlargJSConsoleBtn").innerHTML = "Normal") :
				( _("jsLabTextConsole").removeAttribute("style"),
				_("enlargJSConsoleBtn").removeAttribute("style"),
				_("enlargJSConsoleBtn").innerHTML = "Enlarge",
				_( "enlargJSConsoleBtn" ).style.zIndex = "10" );
	} );


// Click event listener Enlarge HTML Console


	_( "enlargHtmlConsoleBtn" ).addEventListener( "click", function(ev){
		_("htmlLabTextConsole").style.position !== "fixed" ? (
			_styles( _( "htmlLabTextConsole" ), "fixed", "24px", "0px", "11", "100%", "100%", "0px", "0mm" ),
			_styles( _( "enlargHtmlConsoleBtn" ), "fixed", "85%", "0px", "12" ),
			_( "enlargHtmlConsoleBtn" ).innerHTML = "Normal" ) :
				( _("htmlLabTextConsole").removeAttribute("style"),
				_("enlargHtmlConsoleBtn").removeAttribute("style"),
				_("enlargHtmlConsoleBtn").innerHTML = "Enlarge",
				_( "enlargHtmlConsoleBtn" ).style.zIndex = "10" );
	} );


// Notes: Click Event listener: Close document snippet


	_("close_Document_App").addEventListener( "click", function(){
		document.body.appendChild( _( "_exeDocUtilities" ) );
		_( "_exeDocUtilities" ).style.visibility = "hidden";
		_( "_document" ).outerHTML="";

	});


// Notes: Click Event listener: Enlarge RegExp Snippet Desc


	_cs( "enlargeSnippetDesc" )[0].addEventListener( "click", function(){
		_( "menu_regExp" ).getElementsByClassName("application-target")[0].style.position !== "fixed" ?
			( _styles( _( "menu_regExp" ).getElementsByClassName("application-target")[0], "fixed", "22px", "0px", "", "100%", "94%" ),
				_styles( _( "menu_regExp" ).getElementsByTagName( "input" )[1], "fixed", "80%", "0px", "20" ) ) :
			( _( "menu_regExp" ).getElementsByClassName("application-target")[0].removeAttribute("style"),
			_( "menu_regExp" ).getElementsByTagName( "input" )[1].removeAttribute("style") );
	} );


// Notes: Click Event listener: Enlarge Set Interval Snippet Desc


	_cs( "enlargeSnippetDesc" )[1].addEventListener( "click", function(){
		_( "menu_setInt" ).getElementsByClassName("application-target")[0].style.position !== "fixed" ?
			( _styles( _( "menu_setInt" ).getElementsByClassName("application-target")[0], "fixed", "22px", "0px", "", "100%", "94%" ),
				_styles( _( "menu_setInt" ).getElementsByTagName( "input" )[1], "fixed", "80%", "0px", "20" ) ) :
			( _( "menu_setInt" ).getElementsByClassName("application-target")[0].removeAttribute("style"),
			_( "menu_setInt" ).getElementsByTagName( "input" )[1].removeAttribute("style") );
	} );


// Notes: Click Event listener: Enlarge Dynamic Snippet Desc


	_cs( "enlargeSnippetDesc" )[2].addEventListener( "click", function(){
		_( "menu_dynamicWin" ).getElementsByClassName("application-target")[0].style.position !== "fixed" ?
			( _styles( _( "menu_dynamicWin" ).getElementsByClassName("application-target")[0], "fixed", "22px", "0px", "", "100%", "94%" ),
				_styles( _( "menu_dynamicWin" ).getElementsByTagName( "input" )[1], "fixed", "80%", "0px", "20" ) ) :
			( _( "menu_dynamicWin" ).getElementsByClassName("application-target")[0].removeAttribute("style"),
			_( "menu_dynamicWin" ).getElementsByTagName( "input" )[1].removeAttribute("style") );
	} );


// Notes: Click Event listener: Enlarge SVG Manipulation Desc


	_cs( "enlargeSnippetDesc" )[3].addEventListener( "click", function(){
		_( "menu_svgManip" ).getElementsByClassName("application-target")[0].style.position !== "fixed" ?
			( _styles( _( "menu_svgManip" ).getElementsByClassName("application-target")[0], "fixed", "22px", "0px", "", "100%", "94%" ),
				_styles( _( "menu_svgManip" ).getElementsByTagName( "input" )[1], "fixed", "80%", "0px", "20" ) ) :
			( _( "menu_svgManip" ).getElementsByClassName("application-target")[0].removeAttribute("style"),
			_( "menu_svgManip" ).getElementsByTagName( "input" )[1].removeAttribute("style") );
	} );


// Notes: _getSnippetFunction executed on get snippet button event


var _getSnippetFunction = function( _menuCategory ){

var _pushStringToIndex = function( _string, _replaceString, _start, _end ){

var editedStgA = "", editedStgB = "";

	for( var i=0; i < _string.length; i++ ){

		i < _start ?
			( editedStgA += _string[i] ) :
			i >= _end ? 
				( editedStgB += _string[i] ) :
				( "" );

	};

	return editedStgA + _replaceString + editedStgB;;
 
};

var _prompt = document.createElement( "article" ),
	_text = document.createElement( "section" ),
	_seeSnippet = document.createElement( "button" ),
	_yes = document.createElement( "button" ),
	_no = document.createElement( "button" ),
	_cancel = document.createElement( "button" );

	_seeSnippet.innerHTML = "See Snippet";
	_text.innerHTML = "Are you sure you want to place the snippet<br><br>" + _( "regExp_Options" ).value + 
		"<br><br>starting right before the: <b>" + _("jsLabTextConsole").value[ _("jsLabTextConsole").selectionStart ] + "</b> character<br>" +
		"String index: [" + _("jsLabTextConsole").selectionStart + "] -- ";
	_yes.innerHTML = "Yes";
	_no.innerHTML = "No";
	_cancel.innerHTML = "Cancel";

	_prompt.setAttribute( "id", "_prompt_Section" );


// Notes: UI part retrieves the snippet textarea and enlarges it.


	_seeSnippet.addEventListener( "click", function(){
		_seeSnippet.style.zIndex !== "22" ? (
			_styles( _menuCategory.getElementsByTagName("textarea")[0], "fixed", "22px", "0%", "", "100%", "48%" ),
			_styles( _menuCategory.getElementsByTagName("textarea")[1], "fixed", "22px", "48%", "", "100%", "48%" ),
			document.body.appendChild( _seeSnippet ),
			_styles( _seeSnippet, "fixed", "88%", "0%", "22", "", "" ),
			_prompt.style.visibility = "hidden" ) :
			( _seeSnippet.removeAttribute("style"), _text.appendChild( _seeSnippet ),
			_prompt.style.visibility = "visible",
			_menuCategory.getElementsByTagName("textarea")[0].removeAttribute("style"),
			_menuCategory.getElementsByTagName("textarea")[1].removeAttribute("style") );
	} );


// Notes: UI part to cancel out of action.


	_cancel.addEventListener( "click", function(){
	_("_prompt_Section").innerHTML = "";
	_("_prompt_Section").outerHTML = ""	;
	} );


// Notes: UI part to place js directly after your last character in the text field.


	_no.addEventListener( "click", function(){
	_("jsLabTextConsole").value += "\n" + _menuCategory.getElementsByTagName("textarea")[0].value;
	_("htmlLabTextConsole").value = _menuCategory.getElementsByTagName("textarea")[1].value;
	_("_prompt_Section").innerHTML = "";
	_("_prompt_Section").outerHTML = "";
	} );


// Notes: UI part to confirm your selection point for js.


	_yes.addEventListener( "click", function(){	

	_("jsLabTextConsole").hasAttribute("value") === true ? "true" : _("jsLabTextConsole").setAttribute("value", Page[0].box[0][3].innerHTML)

var _startVal = _("jsLabTextConsole").selectionStart, _endVal = _("jsLabTextConsole").selectionEnd,
	_difVal = _endVal-_startVal, _returnString = "";


var _returnString = _pushStringToIndex( _("jsLabTextConsole").value, _menuCategory.getElementsByTagName("textarea")[0].value, _startVal, _endVal );
			_("jsLabTextConsole").value = _returnString;
			_("_prompt_Section").innerHTML = "";
			_("_prompt_Section").outerHTML = "";

	_("htmlLabTextConsole").value = _menuCategory.getElementsByTagName("textarea")[1].value;

	} );


// Notes: Append ui parts and style parent window.


	_text.appendChild( _seeSnippet );
	_prompt.appendChild( _text );
	_prompt.appendChild( _yes );
	_prompt.appendChild( _no );
	_prompt.appendChild( _cancel );
	document.body.appendChild( _prompt );
	_styles( _prompt, "fixed", "30%", "30%", "", "28%", "35mm", "", "10mm", "rgba(200,200,255,1)", "darkgrey outset 5px" );
};



// Notes: Click Event listener: Get Snippet Reg Exp


	_( "menu_regExp" ).getElementsByTagName( "input" )[0].addEventListener( "click", function(){
		document.getElementById("_prompt_Section") === null ? 
			_getSnippetFunction( _( "menu_regExp" ) ) :
			"";
	} );


// Notes: Click Event listener: Get Snippet Set Interval


	_( "menu_setInt" ).getElementsByTagName( "input" )[0].addEventListener( "click", function(){
		document.getElementById("_prompt_Section") === null ? 
			_getSnippetFunction( _("menu_setInt") ) :
			"";
	} );


// Notes: Click Event listener: Get Snippet Dynamic Menus


	_( "menu_dynamicWin" ).getElementsByTagName( "input" )[0].addEventListener( "click", function(){
		document.getElementById("_prompt_Section") === null ? 
			_getSnippetFunction( _( "menu_dynamicWin" ) ) :
		"";
	} );


// Notes: Click Event listener: Get Snippet Dynamic Menus


	_( "menu_svgManip" ).getElementsByTagName( "input" )[0].addEventListener( "click", function(){
		document.getElementById("_prompt_Section") === null ? 
			_getSnippetFunction( _( "menu_svgManip" ) ) :
			"";

	} );


// Notes: Function for adding media images or objects.


var addHtmlObject = function( _object, _src, _id ){
var _htmlObject = document.createElement(_object);

	_id = _id||"";

	_object === "object" ? 
		_htmlObject.data = _src :
		_htmlObject.src = _src;

	_htmlObject.setAttribute( "class", "autoObject" );	
	_htmlObject.id = _id;

	return _htmlObject;

};


// Notes: Click Event listener: Get Help Doc


	_("jsLabHelpBtn").addEventListener("click",function(){
var _helpDoc;
		_cs("autoObject").length < 1 ?
			( _helpDoc = addHtmlObject("object", "docs/javascript_HelpDocs.html", "objectHelp"),
			_styles( _helpDoc, "fixed", "7mm", "0%", "22", "100%", "100%", "", "0mm 7mm 0mm 7mm", "white" ),
			_helpDoc.setAttribute("type","text/html"),
			document.body.appendChild(_helpDoc) ) :
			( _("objectHelp").outerHTML = "" );

	} );


// Notes: Click Event listener: Create embedded object sample


	_("insertBtn").addEventListener("click",function(){
var _imgPath,
	_embedPath,
	_objectList = ["img","object"],
	_srcAtt = ["src","data"],
	_idArray = _( "imgPathInput,embedPathInput;" ),
	_checkBoxClass = _cs("insertObjectCheckBox"),
	_previewPane = _("previewInsert").getElementsByTagName("textarea")[0];

		for( var i=0; i < _checkBoxClass.length; i++ ){

			_checkBoxClass[i].checked === true ?
				( _previewPane.value += "<" + _objectList[i] + " " + _srcAtt[i] + "='" + _idArray[i].value + "'>" + "\n" ) :
				( "" );

		};

	} );


// Notes: Click Event listener: Insert HTML


	_("insertHTML").addEventListener("click",function(){
var _pushStringToIndex = function( _string, _replaceString, _start, _end ){

	_end = _end || 0;

var editedStgA = "", editedStgB = "";

	for( var i=0; i < _string.length; i++ ){
		i < _start ?
			( editedStgA += _string[i] ) :
			i >= _end ?
				( editedStgB += _string[i] ) :
				( "" );
	};

	return editedStgA + _replaceString + editedStgB;; 

};

var	_previewPane = _( "previewInsert" ).getElementsByTagName( "textarea" )[0],
	_startSelection = _("htmlLabTextConsole").selectionStart, _endSelection = _("htmlLabTextConsole").selectionEnd,
	_selectionDiff = _endSelection - _startSelection, 
	newString = _("htmlLabTextConsole").value.replace("<body>", "<body>" + "\n\t" + _previewPane.value ),
	placedString = "";

		if( _previewPane.value !== "" ){

			_("appendSnippet").checked === true ?
				( _("htmlLabTextConsole").value = _("htmlLabTextConsole").value.replace("<body>", "<body>" + _previewPane.value ) ) :
				( placedString = _pushStringToIndex( _("htmlLabTextConsole").value, _previewPane.value, _startSelection ),
				_("htmlLabTextConsole").value = placedString );

				_previewPane.value = "";

		}

	} );











