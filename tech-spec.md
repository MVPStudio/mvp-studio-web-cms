# Tech Spec
![overview](https://i.imgur.com/hbz9N5L.png)

## Components

### React
Providing the dynamic functionality for our project showcase.
Handles all form submissions.
* Project Showcase page showing all projects
* Individual project detail page for each project
* Volunteer form on each individual project
  - Store info in local storage.

### Nginx
Serving the static Gatsby pages.

### Node server
* Express for routing/api.
* Typescript is the language choice.
* Send email using Gmail API.
  - Sent when project are submitted and when volunteers sign up.
* Slack integreation when new projects are proposed.

### Postgres DB
To store our project info.

### Gatsby
Where our current static pages are made.

### Kubernetes
Hosting everything but Gatsby.
