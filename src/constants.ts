export const pathnames = {
    account: '/account',
    session: '/account/sessions',
    signUp: '/account/signup',
    signIn: '/account/signin',
    failure: '/failure',
    activate: '/account/activate',
    clients: '/clients',
    clientsAdd: '/clients/add',
    clientsEdit: '/clients/:id/edit',
};

export const enum IconNames {
    None = 'alert-circle',
    Time = 'time',
    Checkmark = 'checkmark-circle',
    Exit = 'exit',
    Person = 'person-circle',
    List = 'list-circle',
    Create = 'create',
    Close = 'close-circle',
    Apps = 'apps',
    Add = 'add',
    Alert = 'alert',
    Remove = 'remove',
}

export const enum IconThemePostfix {
    Light = '-outline',
}

export const enum Captions {
    AppTitle = 'sso sorface',
    Loading = 'Loading',
    Error = 'Error',
    NotFound = '404 Not Found',
    Account = 'Account',
    ActiveSessions = 'Active Sessions',
    SignUp = 'Sign up',
    SignUpLink = 'You do not have an account? Register!',
    SignInLink = 'You have an account? Sign In!',
    Signin = 'Signin',
    SignIn = 'Sign in',
    Password = 'Password',
    InvalidPassword = 'Invalid password',
    EmailOrUsername = 'Email or Username',
    InvalidEmailOrUsername = 'Invalid email or username',
    ClientTechId = 'Id',
    Id = 'Client Id',
    Username = 'Username',
    Email = 'Email',
    FirstName = 'First Name',
    LastName = 'Last Name',
    Roles = 'Roles',
    LogoAlt = 'logo',
    ContinueWith = 'Continue with',
    WelcomeToSSO = 'Welcome to SSO Sorface',
    ActivateFail = 'Activation Fail',
    ActivateSuccess = 'Activation Success',
    Activating = 'Activating',
    TokenNotFound = 'Token not found',
    InvalidToken = 'Invalid token',
    ErrorTitle = 'An error has occurred',
    YouWillBeRedirected = 'You will be redirected in :redirectTimeoutSec seconds',
    PleaseWait = 'Please wait...',
    Unknown = 'unknown',
    UnknownError = 'Unknown error',
    Logout = 'Logout',
    AddClient = 'Add client',
    EditClient = 'Edit client',
    ClientName = 'Client Name',
    RedirectionUrls = 'Redirection Urls',
    IssueTime = 'Issue time',
    ExpiresAt = 'Expires at',
    Save = 'Save',
    Delete = 'Delete',
    RenewSecret = 'Renew secret',
    NewSecret = 'New secret',
    NewExpiredSecret = 'New expired secret',
    ClientSecretLabel = 'Client Secret'
}
