Generic Chrome Mobile Angular Application with Material Design
==============================================================

This is a generic app framework that can run as a standalone webpage, a chrome
extension, an android app, or an ios app.  

It will use the tools provided by angular's
[material-design](material.angularjs.org) package to provide
basic application scaffolding.

![A Generic Chrome App running as a Chrome
Extension](docs/images/ChromeExtensionScreenshot.png)

This is a very early work in progress. The material-design repo provided by
angular is not yet in a official distribution, so some hacks are required to
get this to compile and deploy.  When bundling the android app, you should remove
all the node_modules under the material design bower component used to build the
dist directory.  Really, all directories other than "dist" can be discarded or
ignored.

Features
--------

In addition to basic application scaffolding, this repo will provide various
common mobile application behaviors, as dictated by
[material design](http://www.google.com/design/spec/material-design/introduction.html).

How to use this repo
--------------------

At some point this will be a yeoman template or something, until then you can:

1. Clone this repo and delete the .git directory
2. Update the application name in www/manifest.mobile.json
3. Update the application name in bower.json and package.json
4. Follow the steps below to get the boilerplate app working.

First time Setup
----------------

### Setting up tools

1. run ``npm install -g yo`` to install yo, grunt-cli and bower
2. run ``npm install -g cca`` to install the chrome mobile utility
3. run ``export PATH=/usr/local/share/npm/bin:$PATH`` to ensure command line access to modules.
4. run ``cca checkenv`` to ensure your machine is set up for mobile development.  If not this will instruct you on how to get Xcode and android development environments initialized for use with cca.
5. run ``npm install -g ios-deploy``
6. run ``npm install -g ios-sim``

### Setting up the repo after cloning for the first time

1. run ``npm install`` to initialize node modules
2. run ``bower install`` to initialize bower dependencies
3. As material design by angular is not currently packaged as a proper bower
module, you'll have to [build it yourself](https://github.com/angular/material#development)

   0. ``git clone git@github.com:angular/material.git www/bower_components/material-design``
   1. ``cd www/bower_components/material-design``
   2. ``npm install``
   3. ``bower install``
   4. ``npm install gulp``
   5. ``gulp build``

4. run ``cca pre-prepare`` to initialize cordova plugins
5. run ``cca platform add ios`` to add ios platform to project
6. run ``./initializePlugins.sh`` to initialize plugins


### Copying settings from chrome extension to android app

Run this the first time, and any time after you make modifications to the ``www`` directory.

1. run ``cca prepare`` to initialize the platforms directory with ios and android applications
2. run ``./copySplash`` to copy splash screens from ``www/res`` to the platforms directories - this is currently not handled by cordova

Standalone web app
------------------

### Running the web application

1. grunt serve

Chrome extension
----------------

The chrome extension is the easiest to modify and debug.

### Running the chrome app

1. In your chrome browser, enable chrome developer flags at ``chrome://flags`` and enable "Experimental Extension APIs"
2. Go to Tools -> Extensions
3. Load Unpacked Extension- navigate to ``./www``

### Debugging the chrome app

The chrome app can be debugged with the standard "Inspect Element" debugger in a chrome web browser.

Android
-------

### Running the android app

The android app can be run in an emulator, which can be installed with brew

1. run ``brew install android`` to install the android toolkig
2. run ``android`` to download packages and set up an avd device.

To run the android on an emulator or connected device

1. Attach an android device in debug mode, or run the android avd emulator.
2. if you are running on a connected device you can verify first with ``adb devices``
2. run ``cca run android``

### Debugging the android app

TODO

IOS
---

### Running the ios app

The ios app can be run in an emulator, which can be installed via xcode.  It can only be installed on devices with a valid provisioning profile, which requires a paid apple developer account.

To run on a emulator

1. run ``cca emulate ios``

To run on a connected device (requires provisioning)

1. run ``cca run ios``

### Debugging the ios app

1. Run Xcode
2. Open ``./platforms/ios/*.xcodeproj``
3. Click Run

### Debugging the ios app in safari

1. At the command line run ``defaults write com.apple.Safari IncludeDebugMenu 1`` (you only need to do this once)
2. Launch the app in the emulator
3. Launch safari
4. Connect to the Iphone Simulator in the Develop menu

Extending the application
-------------------------

### adding new javascript dependencies

1. Find a module with ``bower search <search term>``
2. Install it and save it to your bower.json file with ``bower install <javascript module> --save``

### adding new plugins

1. ``cca plugin add <plugin name``
2. ``cca pre-prepare``
3. ``cca prepare``

File documentation
------------------
### Project files
* **``README.md``** This file
* **``bower.json``** A list of all json dependencies.  _Do not modify directly_.  Add new dependencies with ``bower install <dependency name> --save``
* **``config.xml``** A config file for cordova.
* **``www/``** All of the actual content of the app is contained in this directory

  * **``index.html``** The skeleton of one-page application mostly just contains javascript and css imports.  Very little modifications should be made to this, other than new bower dependencies or css.
  * **``manifest.json``** Defines how the chrome app will be packaged, including identifiers, oauth behaviors, permissions, icons, and version name.
  * **``background.js``** Defines the behavior of the chrome app, including the landing page, and the window size of the chrome extension (does not affect ios or android).
  * **``assets/``** Contains icons that will be used to represent the app
  * **``bower_components/``** Contains external javascript and css dependencies brought in by bower.json.  Should not be version controlled or modified directly- make all modifications to ``../bower.json`` using ``bower install --save``
  * **``images/``** Contains all packaged images used by the application, i.e. logos.
  * **``res/``** Contains resources used by the packaged apps, such as splash screens (TBD).
  * **``scripts/``** Contains all angular scripts and javascript objects used by the application

    * **``app.js``** Contains the definition for the main angular app
    * **``controllers/``** Contains controllers for various parts of the application

  * **``styles/``** Contains custom stylesheets for the application
    * **``main.css``** Common css for the application
    * **``nav.css``** Styling related to the top nav
    * **``sidenav.css``** Styling related to the side nav
  * **``views/``** Contains different screens for the application

    * **``main.html``** The landing page that the user first sees

### Files not kept in version control

* ``platforms/*`` These files are generated by cca prepare
* ``plugins/*`` These files should be generated with cca plugin install as they vary by machine
* ``node_modules/*`` These files are generaetd by npm install
* ``www/bower_components/*`` These files are generated by bower install
