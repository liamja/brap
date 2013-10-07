Brap: The In-Browser Wiretap
============================

	     ...     ..                                             
	  .=*8888x <"?88h.                                          
	 X>  '8888H> '8888      .u    .                .d``         
	'88h. `8888   8888    .d88B :@8c        u      @8Ne.   .u   
	'8888 '8888    "88>  ="8888f8888r    us888u.   %8888:u@88N  
	 `888 '8888.xH888x.    4888>'88"  .@88 "8888"   `888I  888. 
	   X" :88*~  `*8888>   4888> '    9888  9888     888I  888I 
	 ~"   !"`      "888>   4888>      9888  9888     888I  888I 
	  .H8888h.      ?88   .d888L .+   9888  9888   uW888L  888' 
	 :"^"88888h.    '!    ^"8888*"    9888  9888  '*88888Nu88P  
	 ^    "88888hx.+"        "Y"      "888*""888" ~ '88888F`    
	        ^"**""                     ^Y"   ^Y'     888 ^      
	                                                 *8E        
	                                                 '8>        
	                                                  "         

U Wot M8?
---------

Brap is a surveillance tool packaged as a cross-browser extension.


Features
--------

* Keylogger
* Cookie / Session Stealing
* Modular Stucture


Usage
-----

* [Download and install Python 2.7](http://www.python.org/download/)
* [Download and extract Kango](http://kangoextensions.com/kango/kango-framework-latest.zip).
* Edit `src/common/config.json`
* Build using `/kango-path/kango.py build .`
* Deploy to the target.

You'll need to configure a server to listen for HTTP POST requests. Brap sends two parameters:

* *target* is the unique identifier assigned to your target.
* *log* is the JSON-formatted log file.


Libraries
---------

This browser extension is built upon the following libraries:

  * [Kango](http://kangoextensions.com/)
  * [ContentLoaded.js](http://javascript.nwbox.com/ContentLoaded/)
  * [Keymaster.js](https://github.com/madrobby/keymaster)


License
-------

Released under an MIT License.

See [license.md](license.md) for the full license text.
