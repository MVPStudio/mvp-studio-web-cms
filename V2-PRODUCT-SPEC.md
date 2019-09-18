# MVP Studio Website V2

The goal is the provide an online space for Non-profits with tech projects to advertise their project to potential
 volunteers in the Eugene/Springfield community.
This can be done with little to no direct involvement with MVP Studio until the project is ready to kick off.

### Specifically out of scope

To reduce complexity we do not want to implement the following:

- An account and/or login system
- Public facing email/phone/etc...
- A forum or chat system

## Audiences

#### Non Profits

The non profit audience is primarily concerned with posting their tech projects for volunteers to find.

#### Volunteers

These are tech product and engineering folks with a range of experience from student to long time industry professional.
They have extra time and a desire to learn while doing a public good.
Industry pros have an opportunity to mentor, industry beginners get experience and hopefully a project on their resume, and 
students get real experience for future internships and jobs.

#### MVP Studio

MVP Studio is primarily concerned with promoting a positive meeting space and being available for a project is ready to kick off.
This means guarding against bad data on the website, and being available to non profits.

## User Workflows

### Non Profits

**The primary workflow is to get informed about the process, and submit a project**

- Arrive at the homepage
- Click through for a non profit with a project idea
- There is a description of the process, what it means when they submit a project, expectations, etc... (copy tbd)
    - Maybe there is a space to tell people if they want help writing their proposal they can come meet us on a Tuesday
    evening and we can help them.
    - It should encourage them to communicate with us via our slack room(s) in Eugene Tech (not email).
- Click post a new project
- Arrive at a form 
- They can submit the following (* = optional)
    - name of the organization
    - link to organization website*
    - stakeholder name
    - stakeholder email (with a note that it will not be publicly visible)
    - short project description (length of a tweet?)
    - link to a longer project description (recommend they make a google doc or something?)
        - it would be best if we didn't have a giant text field, or try to make a markdown thing
- An email is sent to the stakeholder email
    - The email contains a 'magic link' to a page where they can edit their posting
    - The posting has an expiration of 2 months after it was posted.
        - If it should be extended we can allow them to just re-post it
- Once approved (see MVP Studio workflow below), the posting will be publicly visible

### Volunteers

**The primary workflow is to discover projects that seems interesting and reach out to help.**

- Arrive at the homepage
- Click through to see current projects seeking volunteers
- Presented with a listing of all currently approved projects that have not started
    - Each listing shows the following
        - name of the organization
        - stakeholder name
        - short project description
- Click on a project
- Arrive at a project details page
- Shows all information about the project
- Contains a description of the process they would under go if they want to help a project, 
expectations, what happens next, etc.... (copy tbd)
- Contains a form for the volunteer to submit the following information
    - name
    - email
    - role (pick only one)
        - engineer
        - product owner
        - web designer
        - artist
    - experience
        - student
        - new to the industry
        - industry professional
    - Why are you interested (big text field)
- On form submit 
    - a thank you page is displayed with details on next steps again
    - the stakeholder gets an email with the details of the volunteer

### MVP Studio

**The primary workflow for MVP Studio is to change the status of a project**

- A project can be in one of the following statuses
    - pending
    - approved
    - started
    - finished
- When a new project is submitted a 'magic link' is sent to team@mvpstudio.org
    - the password in the magic link is different than the one sent to the stakeholder
- Link goes to a page showing all the details of the new project.
- There is a drop down to change the status.
- when the status goes from pending to approved a congratulatory email is sent to the stakeholder.
- Only projects with an approved status are visible on the projects page for volunteers to sign up for
- Future work could be
    - a page for in progress projects
    - a page for completed projects that includes details on the outcome (retro, link to website, testimonial etc...)
