# Tech Spec

![overview](https://github.com/MVPStudio/mvp-studio-web-cms/blob/v2-tech-spec/spec/techSpec.png)

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

* `/api/project/{id}` (GET)

    Return project info.
* `/api/project` (POST)

    Add a new project to the database.
* `/api/project/{id}` (PUT)

    Update an existing project.
* `/api/projects` (GET)

    Delete an existing project.
* `/api/project/{id}` (DELETE)

    Return list of all projects.
* `/api/volunteer` (POST)

    Send volunteer info to project owner.

### Postgres DB

To store our project info.

```
Table: Projects
    id: UUID, PRIMARY KEY
    project_name: VARCHAR(256), NOT NULL
    org_url: VARCHAR(2083)
    po_name: VARCHAR(128), NOT NULL
    po_email: VARCHAR(256), NOT NULL
    description: VARCHAR(512), NOT NULL
    description_link: VARCHAR(2083)
    status: SMALLINT, NOT NULL, CHECK (status >= 0)
```

### Gatsby

Where our current static pages are made.

### Kubernetes

Hosting everything.
