FROM mvpstudio/node:v10

USER mvp
WORKDIR /home/mvp/app

# move resources to correct location
COPY ./express-gen-ts /home/mvp/app

# port set in server.js
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
