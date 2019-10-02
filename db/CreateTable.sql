CREATE TABLE projects (
    project_id serial PRIMARY KEY,
    project_name varchar(256) NOT NULL,  
    org_url varchar(2083),  
    po_name varchar(128) NOT NULL,  
    description varchar(512) NOT NULL,  
    description_link varchar(2083)
);
