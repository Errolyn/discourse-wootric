# Discourse-Wootric

## Statement of Intent:

We are filling a gap with NPS scoring in Discourse. We found Wootric is a good platform to do this. This plugin is to connect the Wootric platform to Discourse in a way that doesn't require an understanding of programming to configure options for Wootric.


## Who We Are and Who We Are Not:

Two programmers expanding our skills by developing a plugin. We are in no way affiliated with Wootric or Discourse.



## Instructions for Installing and Basic Use (Getting Started):

You can install this plugin using Discource's plugin installation guide: https://meta.discourse.org/t/install-a-plugin/19157

Once you have the plugin installed, you will go to the plugin's settings page. You'll need to enter your Wootric account token and the domain for your Discourse instance. Once you've entered that information, enable your plugin by checking the box ```wootric enabled```.


## Expected Interaction/Behaviors:

* By default the Discourse-Wootric plugin will be disabled, before the survey can render you must enable it by checking the ```wootric enabled``` box.

* Wootric accepts an email, due to the restrictions of discourse we are passing in a link to the User's account page instead.

* The timestamp being sent through with the customer survey is the time that the survey was taken.

* The ```wootric test mode``` setting causes the survey to be triggered at the beginning of each new session. This is for testing purposes, in confirming the information you are sending through. This overrides any time settings and percentage calculations for survey frequency in your Wootric account setttings. This should be disabled for production.


## Troubleshooting:

### The survey isn't showing up:

1. Check that you have the correct domain and account token entered into settings, and that your Wootric plugin is enabled.
2. Turn on ```wootric test mode```.
3. Open an incognito/private browser window. Navigate to your Wootric instance and wait to see if survey pops up. This can take up to one minute.
4. Open up a browser console and check for any errors.
5. In console type ```Discourse.SiteSettings.wootric_enabled```. If that returns ```True``` reach out to Wootric's support channels to confirm your account is set up correctly.
6. If on Wootric's side it's setup correctly, create an issue here: https://github.com/Riddlerat/discourse-wootric/issues.


## How to Get Support:

Create an issue here: https://github.com/Riddlerat/discourse-wootric/issues.

We'll attempt to respond to issues within 3 days of creation.





