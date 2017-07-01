import { withPluginApi } from 'discourse/lib/plugin-api';


export default {
  name: 'apply-wootric',

  initialize() {
    if (Discourse.SiteSettings.wootric_enabled) {

      var userobj = Discourse.User.current();
      var users_name = ""
      var users_id = ""
      var users_account = ""
      var test_mode = Discourse.SiteSettings.wootric_test_mode

      function userObjCreation(){ 
        if ( userobj != null ){
          users_name = userobj.username
          users_id = userobj.id
          users_account = Discourse.SiteSettings.wootric_customer_domain + "/admin/users/" + users_id + "/" + users_name;
          return "Authenticated"
        } 
        else {
          users_name = "Unknown"
          users_id = "Guest"
          users_account = "Unknown"
          return "Unauthenticated"
          };
        }

      userObjCreation();
      
      withPluginApi('0.5', api => {
        
        //This loads the Wootric survey
        $.getScript('https://disutgh7q0ncc.cloudfront.net/beacon.js', function() {
          
          // console.log("Get Script ran");
          window.wootricSettings = {
            survey_immediately: test_mode, // Shows survey immediately for testing purposes.  TODO: Comment out for production.
            email: users_account, // Link to the customer's user page. TODO: The current logged in user's email address. OPTIONAL
            //external_id: 'unknown', // TODO: The current logged in user's unique ID in your system.  Reference field for external integrations only.  OPTIONAL
            created_at: Math.floor(Date.now() / 1000), //Timestamp of when the survey was taken. TODO: The current logged in user's sign-up date as a 10 digit Unix timestamp in seconds. OPTIONAL
            account_token: Discourse.SiteSettings.wootric_account_token // This is your unique account token. NPS-d0f3875c
          }
          window.wootric('run');
        });
      });
    }   
  }
};
