import { withPluginApi } from 'discourse/lib/plugin-api';


export default {
  name: 'apply-wootric',

  // console.log('name')
  initialize() {
    withPluginApi('0.5', api => {
      //This loads the Wootric survey
      $.getScript('https://disutgh7q0ncc.cloudfront.net/beacon.js', function() {
        var wootric_survey_immediately = true; // Shows survey immediately for testing purposes.  TODO: Comment out for production.
        window.wootricSettings = {
          email: 'customer@example.com', // TODO: The current logged in user's email address. OPTIONAL
          external_id: 'abc123', // TODO: The current logged in user's unique ID in your system.  Reference field for external integrations only.  OPTIONAL
          created_at: 1234567890, // TODO: The current logged in user's sign-up date as a 10 digit Unix timestamp in seconds. OPTIONAL
          account_token: {{ siteSettings.Wootric_account_token }} // This is your unique account token. NPS-d0f3875c
        }
        window.wootric('run');
      });
    }); 
  }
};
