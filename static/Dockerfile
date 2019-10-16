FROM mvpstudio/node:v10

USER mvp
WORKDIR /home/mvp/app

# move resources to correct location
COPY ./public ./public
COPY ./config ./config
COPY ./server ./server

# port set in server.js
EXPOSE 8001
ENTRYPOINT ["node", "server/server.js"]