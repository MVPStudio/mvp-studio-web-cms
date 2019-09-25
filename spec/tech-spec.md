# Tech Spec

![overview](https://raw.githubusercontent.com/MVPStudio/mvp-studio-web-cms/2603430405ea7a0a354c437a880d13460b2322af/spec/techSpec.png)

## Components

### React

Providing the dynamic functionality for our project showcase.
Handles all form submissions.

* Project Showcase page showing all projects
* Individual project detail page for each project
* Volunteer form on each individual project
  * Store info in local storage.

### Nginx

Serving the static Gatsby output.

### Node API server

* Express for routing/api.
* Typescript is the language choice.
* Send email using Google Cloud API.
  * Sent when projects are submitted and when volunteers sign up.

* Slack integreation when new projects are proposed.

### API Endpoints

* `/api/{project}` (GET)

    Return project info.
* `/api/{project}` (POST)

    Add a new project to the database.
* `/api/{project}` (PUT)

    Update an existing project.
* `/api/projects` (GET)

    Return list of all projects.
* `/api/volunteer` (POST)

    Send volunteer info to project owner.

### Postgres DB

To store our project info.

### Gatsby

Where our current static pages are made.

### Kubernetes

Hosting everything.
