import BaseUrl from "../data/baseUrl.js";

const DeepUrl = {
    login: `${BaseUrl.base}/login_page.php`,
    register: `${BaseUrl.base}/signup_page.php`,
    recoverPass: `${BaseUrl.base}/lost_pwd_page.php`,
    myView: `${BaseUrl.base}/my_view_page.php`,
    viewIssues: `${BaseUrl.base}/view_all_bug_page.php`,
    changeLog: `${BaseUrl.base}/changelog_page.php`,
    roadmap: `${BaseUrl.base}/roadmap_page.php`,
    repos: `${BaseUrl.base}/plugin.php?page=Source/index`,
    myAccount: `${BaseUrl.base}/account_page.php`,
    accountPreferences: `${BaseUrl.base}/account_prefs_page.php`,
    accountManageColumns: `${BaseUrl.base}/account_manage_columns_page.php`,
    accountProfiles: `${BaseUrl.base}/account_prof_menu_page.php`,
    accountApiTokens: `${BaseUrl.base}/api_tokens_page.php`,
    accountMySnippets: `${BaseUrl.base}/plugin.php?page=Snippets/snippet_list`,
    chooseProject: `${BaseUrl.base}/login_select_proj_page.php?ref=bug_report_page.php`,
    bugReport: `${BaseUrl.base}/bug_report_page.php`,
    viewIssueDetals: `${BaseUrl.base}/view.php?id=`,
  };
  
  export default DeepUrl;