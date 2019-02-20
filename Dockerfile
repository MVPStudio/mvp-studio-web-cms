FROM mvpstudio/node:v10

USER mvp
WORKDIR /home/mvp/app

# move resources to correct location
COPY ./public /home/mvp/app
COPY ./node_modules /home/mvp/app
COPY ./config /home/mvp/app
COPY ./server /home/mvp/app

# port set in server.js
EXPOSE 8001
ENTRYPOINT ["node", "server/server.js"]