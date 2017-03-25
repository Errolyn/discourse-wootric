import { withPluginApi } from 'discourse/lib/plugin-api';


export default {
  name: 'apply-wootric',

  // console.log('name')
  initialize() {
    withPluginApi('0.5', api => {
      console.log('plugin');

      // var wootric_survey_immediately;
      // $("body").append('<script type="text/javascript" src="https://disutgh7q0ncc.cloudfront.net/beacon.js"></script>');
      // console.log('made it to line 12');
      //This loads the Wootric survey
      $.getScript('https://disutgh7q0ncc.cloudfront.net/beacon.js', function() {
        console.log('made it');
        var wootric_survey_immediately = true; // Shows survey immediately for testing purposes.  TODO: Comment out for production.
        console.log(wootric_survey_immediately);
        window.wootricSettings = {
          email: 'customer@example.com', // TODO: The current logged in user's email address. OPTIONAL
          external_id: 'abc123', // TODO: The current logged in user's unique ID in your system.  Reference field for external integrations only.  OPTIONAL
          created_at: 1234567890, // TODO: The current logged in user's sign-up date as a 10 digit Unix timestamp in seconds. OPTIONAL
          account_token: Wootric_account_token // This is your unique account token. NPS-f153b52b
        }
        window.wootric('run');
      });
    }); 
  }
};


console.log('hello');