# Matching

Wanna find a buddy to study with? Matching is here to help you. (A project for GDGHCMUS)

## User Requirements

1. User can register/login new account
1. User can view list of their study sessions
1. User can create a study session and invite another user to it
    - Time
    - Subject
    - Location
1. User can filter other users based on specific criteria (Subject, Free Time,...) and view filtered list after ranking
1. User can view invitation details
    - Time
    - Creator
    - Subject
    - Location
1. User can receive and accept/decline invitation
1. User can end study session

## Use cases

-   Register new account
    -   **Precondition**: user has not login (no token)
    -   **Trigger**: user visits register page
    -   **Scenario**:
        1. User fills in the register form
        1. System verifies forms
        1. System creates a new account
        1. System notifies user
    -   **Exception**:
        -   User's form is invalid
        -   User has valid cookies
-   Login to current account
    -   **Precondition**: user has not login
    -   **Trigger**: user visits login page
    -   **Scenario**:
        1. User fill in the username and password to login form
        2. System checks valid info
        3. System return token
    -   **Exception**:
        -   User's credential is invalid
        -   User has already logged in
-   View list of study session
    -   **Precondition**: user has logged in
    -   **Trigger**: user navigates to home page
    -   **Scenario**:
        1. User returns to home page
        2. A list of their study sessions appears
    -   **Exception**:
        -   No study session created
        -   Backend responsed with invalid data
-   Create a study session
    -   **Precondition**: user has logged in
    -   **Trigger**: user press New session on home page
    -   **Scenario**:
        1. User presses New session on home page
        1. A pop-up appears requiring the user to fill all necessary informations
        1. User presses Create new study session
        1. Backend marks user is busy at the time of study session
    -   **Exception**:
        -   Backend does not respond
        -   User is not free at the time of the study session
-   View list of users
    -   **Precondition**: user has logged in and in a study session
    -   **Trigger**: user navigates to a specific study session page
    -   **Scenario**:
        1. User enter study session page
        1. Frontend fetches the ranked list of user and displays
-   Filter list of users
    -   **Precondition**: user has logged in, in a study session (with list of users)
    -   **Trigger**: user press filter button
    -   **Scenario**:
        1. A tab appears with different fields (Subject, Free time, Gender,...)
        1. User enters fields and presses search
        1. The list updates to match user's preferences
    -   **Exception**:
        -   There is no match
        -   User did not update any fields before pressing search
-   Invite another person to a study session
    -   **Precondition**: user has logged in and in a study session (with list of users)
    -   Trigger: user press Invite button next to a user's profile
    -   **Scenario**:
        1. Backend sends invitation via email to the recipient
    -   **Exception**:
        -   Invited does not exist anymore
        -   Backend returns invalid data
-   View invitations
    -   **Precondition**: user has logged in
    -   **Trigger**: user navigates to Invitation page
    -   **Scenario**:
        1. Backend responses with a ranked list of valid invitation
    -   **Exception**:
        -   There is no invitation
-   Response to an invitation:
    -   **Precondition**: user has logged in, in Invitation page (with invitation list)
    -   **Trigger**: user presses accept/decline
    -   **Scenario**:
        1. Backend notifies the owner of the invitation
        1. If accept, backend adds user to the study session and marks user is busy at the time frame of the study session
    -   **Exception**:
        -   Session has ended before user response
-   End study session without any user
    -   **Precondition**: user has logged in, in a study session
    -   **Trigger**: user press End session
    -   **Scenario**:
        1. Backend marks session as completed
    -   **Exception**
-   End study session with another user, both agree
    -   **Precondition**: user has logged in, in a study session, another user has joined it
    -   **Trigger**: one of the user press End session
    -   **Scenario**:
        1. A pop-up appears prompting the user to agree to end the session
        1. If both users agree, the session ends
        1. System marks the session as completed
        1. System asks both users to rate their experience (with platform, with partners)
    -   **Exception**
-   End study session with another user, one deny
    -   **Precondition**: user has logged in, in a study session, another user has joined it
    -   **Trigger**: one of the user press End session
    -   **Scenario**:
        1. A pop-up appears prompting the user to agree to end the session
        1. One user deny, the other will be offered to end the session alone
        1. That user will be removed from the session
        1. System asks that user to rate their experience (with platform, with partners)
    -   **Exception**

## Data schema

```
user: {
    ID: uuid,
    name: string,
    subject: [string],
    free_time: [sáng, chiều, tối],
    gender: [nam, nữ],
    subject: [string],
    characteristics: [string],
    password: [string]
}

session: {
    ID: uuid,
    title: string,
    description: string,
    subject: string,
    scheduled_time: [sáng, chiều, tối],
    participant: [user_id],
}

invitation: {
    ID: uuid,
    from: user_id,
    to: user_id
    session: session_id
    status: [pending, accepted, declined]
}

token: {
    ID: uuid,
    user: user_id,
    token: string,
    expired_at: datetime
}

```

## Endpoint

**POST** /login (username, password)

**POST** /register (username, email, subjects, free_time, gender, hobbies, characteristics, password)

**GET** /users?subject=&free_time=

**GET** /users/{userID}

**GET** /sessions
**GET** /sessions/{sessionID}

**POST** /sessions (title, description, subject, scheduled_time)

**POST** /sessions/{sessionID}/invitations (to_user)

**POST** /invitations/{invitationID}/accept

**POST** /invitations/{invitationID}/decline
