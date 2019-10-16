FROM mvpstudio/node:v10

USER mvp
WORKDIR /home/mvp/app

# move resources to correct location
COPY ./dist ./
COPY ./node_modules ./

# port set
EXPOSE 8000
ENTRYPOINT ["node", "start.js"]
