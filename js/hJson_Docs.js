"use strict";
// JavaScript Document 

		// Development Team: Kip Omaha

		// Developers:
			// Steven Van Sant ( alias: Kip )

				// Dev Date:
					// 12/27/2015

		//  Redistribituion of this page isn't authorized.
		//  Any content referenced in the text is licensed by the listed organization. 
		//  If you chose to use information on this site all applicable licenses and agreements must be followed.


//  **********************************************************************************************************************************
//  ************************************************************ Start Library *******************************************************
//  **********************************************************************************************************************************


var pageDate = new Date(), ev = window.event, page = [], Page = [], pLCycle = [];

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

var number = {
	rational: /\-\d+\.\d+|\-\.\d+|\-\d+|\d+\.\d+|\.\d+|\d+/g,
	unitSec: /\d+\.\d+(?=s)|\.\d+(?=s)|\d+(?=s)/g,
	numberSyntax: function( _string, _array ){
var _func = function( _stg ){
var _numItem = "", _num = [];

	for( var c=0; c < _stg.length; c++ ){

	testSyntax.barFlag.test( _stg[c] ) === true ?
		( _num.push( _numItem.match( number.rational )[0] ),
		  _numItem = "" ) :
		( _numItem += _stg[c] );

	};

	 _num.push( _stg[ _stg.length-1 ].match(getSyntax.operFlag)[0] );

	return _num;
s
};

var _execute_math = function( _params ){
var _numSets = [];

var _origin = Number( _params[0] ),
	_num = Number( _params[2] );

	for( var n=1; n <= _params[1]; n++ ){

		_params[3] === "+" ?
		( _numSets.push( _origin + ( _num* n ) ) ) :
		( _params[3] === "-" ?
			( _numSets.push( _origin - ( _num*n ) ) ) :
			( _params[3] === "*" ?
				( _numSets.push( _origin * ( _num * n ) ) ) :
				( _params[3] === "/" ?
					( _numSets.push( _origin / ( _num * n ) ) ) :
					( "NaN" ) ) ) );

	};

	return _numSets;

};

var _array = _array || [], _tempString = "";

		for( var i=0; i < _string.length; i++ ){

	testSyntax.flag.test( _string[i] ) === true ?
		( _array.push( _execute_math( _func( _tempString ) ) ), _tempString = "", 
		  _tempString = "" ) :
		( testSyntax.semiColonFlag.test( _string[i] ) === true ?
			( _array.push( _execute_math( _func( _tempString ) ) ), _tempString = "" ) :
			  _tempString += _string[i] );

		};

	return _array;

	},

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

var underScore = function( _string ){

	return _string.replace( /\_/g, " " );

};

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

	String.prototype.toJSON = function(){
var _nullValue = this.replace( /\'\'(?=\,)|\'\'(?=\})|\'\'(?=\:)/g,'"null"' ),

_doubleqoutes = _nullValue.replace(/\'+/g,'"'),

_space = _doubleqoutes.replace( /\s+/g, "" ),

_fixStringType = _space.replace(/\"+(?=\"\w)/g, '",' ),

_fixObjectType = _fixStringType.replace(/\}+(?=\"\w)/g, '},' ),

_fixNullType = _fixObjectType.replace(/null+(?=\"\w)/g, 'null,' ),

_fixTrueType = _fixNullType.replace(/true+(?=\"\w)/g, 'true,' ),

_fixFalseType = _fixTrueType.replace(/false+(?=\"\w)/g, 'false,' ),

_fixNumberType = _fixFalseType.replace(/\d(?=\"\w)/g, function( string ){ return string + ","; } ),

_fixArrayType = _fixNumberType.replace(/\]+(?=\"\w)/g, function( string ){ return string + ","; } );

	return JSON.parse( _fixArrayType );

	};

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

	String.prototype.underScore = function( ){

	return this.replace( /\_/g, " " );

	};

	Object.prototype.make = function( _array ){
var _jsn;
	this.hasAttribute("data-json") === true ?
		( _jsn = this.getAttribute("data-json").toJSON(), 
		  this.setAttribute( "id", _jsn.id ),
		  this.setAttribute( "class", _jsn.class ),
		  this.setAttribute( "name", _jsn.name ) ) : false;

	_array !== undefined ? _array.push( _jsn ) : undefined;

	try{
var _box_const = [], _interval_const = [],

	boxTest = _jsn.box !== undefined ?

			( _box_const.push( new constuctElement( _jsn.id, _jsn.class, _jsn.name, _jsn.html ) ),
			  _box_const[0].addBoxSet( _jsn ),
			  Page.push( _box_const[0] ) ) : undefined,

	intervalTest = _jsn.interval !== undefined ?

				( _interval_const.push( new constuctElement( _jsn.id, _jsn.class, _jsn.name, _jsn.html ) ),
			 	  _interval_const[0].addIntervalListener( "null" ),
			 	  pLCycle.push( _interval_const[0] ) ) :
				( undefined );

	boxTest === undefined && intervalTest === undefined ? 
		( Page.push( new constuctElement( _jsn.id, _jsn.class, _jsn.name, _jsn.html ) ) ) :
		( "" );

	return _jsn;

	}
	catch(e){

	return _jsn;

	}

	};

	Object.prototype.page = function( _array ){

var arr = _array || [], 
	_obj = [];

	this.length === undefined ? _obj.push( this ) : _obj = this;

			for( var i=0; i < _obj.length; i++ ){
var _create = _obj[i].make();

		_array !== undefined ?
			( _create !== undefined ? 
				( arr.push( _create ), page.push( _create ) ) : undefined
			) : _create !== undefined ?
					page.push( _create ) :
					undefined;
			}

	return arr;

	};

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
		  	( this.box = page.getJsonById( this.id ).box.getElement() );
	
	return this;

	};

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

var update = function( _obj, _array, deep ){
var _deepFunc = function( _object, _arr ){

	for( var i=0; i < _object.length; i++ ){

	_object[i].getElementsByTagName("*").page( _arr );
	
	}

	return _object;

},
	_json = /true/.test( deep ) === true ?
	( _obj.page( _array ),
	  _deepFunc( _obj, _array ) ) :

	_obj.page( _array );

	return _json;

};

var timeline = window.setInterval( function(){

	pLCycle.metaScan();

}, 100 );


// **********************************************************************************************************************************
// *********************************************************** CODE START **********************************************************
// **********************************************************************************************************************************


// *************** NOTE:  This function is a beta for the djBase.js library.
	// SUMMARY:  


var currentBox = "",
	addBoxEvent = function( _displayFunc, _boxSetId, _currentBox ){
var section = document.createElement("section");
	section.setAttribute( "class", "autoBox" );

	_cs( 'autoBox' ).length === 0 ?
	( document.body.appendChild( section ), currentBox = _currentBox,
	  Page.getJsonById( _boxSetId ).boxEvent = _displayFunc,
	  _cs( 'autoBox' )[0].innerHTML = _displayFunc() ) :

	( _currentBox === currentBox ?
		( _cs( 'autoBox' )[0].innerHTML = "", _cs( 'autoBox' )[0].outerHTML = "", currentBox = _currentBox )  :
		(  Page.getJsonById( _boxSetId ).boxEvent = _displayFunc, _cs( 'autoBox' )[0].innerHTML = _displayFunc(), currentBox = _currentBox ) );

};


// *************** NOTE:  Start of JSON update()


var refs = [], _mem = [], _lib = [],
	refUpdate = update( _("reference_application"), refs, "false" ),
	jsonApp = [],
	jsonAppUpdate = update( _tn("form"), jsonApp, "false" ),
	chapters = [],
	chaptersUpdate = update( _cs("chapter") );


// *************** NOTE:  Start of JSON Edu Application

		//  Application Toggle button

	Page[1].box[0][3].addEventListener( "click", function(){

	Page[1].box[0][0].style.visibility === "visible" ? 

		( Page[1].box[0][0].style.visibility = "hidden",
		  Page[1].box[0][0].style.width = "0%",
		  Page[1].box[0][0].style.height = "0mm",
		  Page[1].box[0][0].style.backgroundColor = "rgba(240,240,240,.8",
		  Page[1].box[0][0].style.overflow = "hidden",
		  Page[1].box[0][0].style.border = "solid 2px silver" ) : 

		( Page[1].box[0][0].style.visibility = "visible",
		  Page[1].box[0][0].style.width = "85%",
		  Page[1].box[0][0].style.height = "135mm",
		  Page[1].box[0][0].style.backgroundColor = "rgba(240,240,240,.8)",
 		  Page[1].box[0][0].style.overflow = "hidden",
		  Page[1].box[0][0].style.border = "solid 2px silver" ) ;

	} );


	//  Textarea event listener


	Page[1].box[0][1].addEventListener( "keyup", function( ev ){

var _create = function( parameter ){
var _nullValue = parameter.replace( /\'\'(?=\,)|\'\'(?=\})|\'\'(?=\:)|\'\'(?=\s)/g,'"null"' ),

_doubleqoutes = _nullValue.replace(/\'+/g,'"'),

_space = _doubleqoutes.replace( /\s+/g, "" ),

_fixStringType = _space.replace(/\"+(?=\"\w)/g, '",' ),

_fixObjectType = _fixStringType.replace(/\}+(?=\"\w)/g, '},' ),

_fixNullType = _fixObjectType.replace(/null+(?=\"\w)/g, 'null,' ),

_fixTrueType = _fixNullType.replace(/true+(?=\"\w)/g, 'true,' ),

_fixFalseType = _fixTrueType.replace(/false+(?=\"\w)/g, 'false,' ),

_fixNumberType = _fixFalseType.replace(/\d(?=\"\w)/g, function( string ){ return string + ","; } ),

_fixArrayType = _fixNumberType.replace(/\]+(?=\"\w)/g, function( string ){ return string + ","; } );

	return _fixArrayType;
    
	},
	create_json = _create( this.value );

	try{
var _json = JSON.parse( create_json );
		console.log( "Your JSON tests good." ),
		console.log( create_json ),
		_mem.push( _json ),
		Page[1].box[0][2].innerHTML = "Your JSON tests good.<br />",
		Page[1].box[0][2].innerHTML += create_json;
	}
	catch(e){
		console.log( "Check your work." ),
		Page[1].box[0][2].innerHTML = "Your JSON tests bad.<br />",
		Page[1].box[0][2].innerHTML += create_json;

	}

	} );


//  *************** NOTE:  Start of Embedded PDF toggle buttons


	_("jsonDocIetfRfc").addEventListener( "click", function( ev ){

		_("embeddedIetfPDF").style.visibility === "hidden" ?
			( _("embeddedIetfPDF").style.visibility = "visible", 
			  _("embeddedIetfPDF").style.position = "fixed", 
			  _("embeddedIetfPDF").style.width = "42%",
			  _("embeddedIetfPDF").style.height = "85%" ,
			  _("embeddedIetfPDF").style.zIndex = "" ) :
			( _("embeddedIetfPDF").style.visibility = "hidden",
			  _("embeddedIetfPDF").style.position = "absolute", 
			  _("embeddedIetfPDF").style.width = "0mm",
			  _("embeddedIetfPDF").style.height = "0mm" ,
			  _("embeddedIetfPDF").style.zIndex = "-10" );

		_("embeddedEcmaPDF").style.visibility === "visible" ?
		( _("embeddedEcmaPDF").style.visibility = "hidden",
			  _("embeddedEcmaPDF").style.position = "absolute", 
			  _("embeddedEcmaPDF").style.width = "0mm",
			  _("embeddedEcmaPDF").style.height = "0mm" ,
			  _("embeddedEcmaPDF").style.zIndex = "-10" ) :
		( "" );

	} );

	_("jsonPDFDOCEmbed").addEventListener( "click", function( ev ){

		_("embeddedEcmaPDF").style.visibility === "hidden" ?
			( _("embeddedEcmaPDF").style.visibility = "visible", 
			  _("embeddedEcmaPDF").style.position = "fixed", 
			  _("embeddedEcmaPDF").style.width = "42%",
			  _("embeddedEcmaPDF").style.height = "85%" ,
			  _("embeddedEcmaPDF").style.zIndex = "" ) :
			( _("embeddedEcmaPDF").style.visibility = "hidden",
			  _("embeddedEcmaPDF").style.position = "absolute", 
			  _("embeddedEcmaPDF").style.width = "0mm",
			  _("embeddedEcmaPDF").style.height = "0mm" ,
			  _("embeddedEcmaPDF").style.zIndex = "-10" );

		_("embeddedIetfPDF").style.visibility === "visible" ?
			( _("embeddedIetfPDF").style.visibility = "hidden",
			  _("embeddedIetfPDF").style.position = "absolute", 
			  _("embeddedIetfPDF").style.width = "0mm",
			  _("embeddedIetfPDF").style.height = "0mm" ,
			  _("embeddedIetfPDF").style.zIndex = "-10" ) :
			( "" );

	} );






