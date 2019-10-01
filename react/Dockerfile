FROM mvpstudio/node:v10

USER mvp
WORKDIR /home/mvp/app

# move resources to correct location
COPY ./frontend /home/mvp/app

# port set
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
