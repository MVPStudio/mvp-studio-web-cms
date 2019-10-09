FROM mvpstudio/node:v10

WORKDIR /home/mvp/app
# mvp user needs to be able to install here
RUN chown -R mvp:mvp /home/mvp/app
USER mvp

# move resources to correct location
COPY ./express-gen-ts /home/mvp/app

#install dependencies
RUN npm install

# port set
EXPOSE 3000
ENTRYPOINT ["npm", "run", "start-dev"]
