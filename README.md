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
1. User can receive and accept/decline invitation via email

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
    -   **Exception**:
        -   Backend does not respond
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
