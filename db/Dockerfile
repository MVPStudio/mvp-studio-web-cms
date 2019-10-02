FROM mvpstudio/base:v1

USER mvp

# add PostgreSQL's PGP key and repo
RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc |  \
    apt-key add - && apt-get update

RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ stretch-pgdg main" > /etc/apt/sources.list.d/pgdg.list

# install PostgreSQL
RUN apt-get update && apt-get install -y postgresql-11 

USER postgres

# Create a PostgreSQL role named ``docker`` with ``docker`` as the password and
# then create a database `docker` owned by the ``docker`` role.
RUN    /etc/init.d/postgresql start &&\
    psql --command "CREATE USER docker WITH SUPERUSER PASSWORD 'docker';" &&\
    createdb -O docker docker

# Adjust PostgreSQL configuration so that remote connections to the
# database are possible.
RUN echo "host all  all    0.0.0.0/0  md5" >> /etc/postgresql/11/main/pg_hba.conf

# And add ``listen_addresses`` to ``/etc/postgresql/11/main/postgresql.conf``
RUN echo "listen_addresses='*'" >> /etc/postgresql/11/main/postgresql.conf

# Expose the PostgreSQL port
EXPOSE 5432

# Add VOLUMEs to allow backup of config, logs and databases
VOLUME  ["/etc/postgresql", "/var/log/postgresql", "/var/lib/postgresql"]

# Set the default command to run when starting the container
CMD ["/usr/lib/postgresql/11/bin/postgres", "-D", "/var/lib/postgresql/11/main", "-c", "config_file=/etc/postgresql/11/main/postgresql.conf"]

