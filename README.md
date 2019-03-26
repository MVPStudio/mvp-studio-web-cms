# mvp-studio-web-cms

The repo for the static site.
mvpstudio.org

## CMS
Each page has a markdown file associated with it for content editing.
[Go to Markdown Folder](https://github.com/MVPStudio/mvp-studio-web-cms/tree/master/src/markdown)

## Build Instructions

To get started, clone and...

```sh
npm install
npm gatsby develop
```

## CI

The server and client are build into a [docker container](https://github.com/MVPStudio/mvp-studio-web-cms/blob/master/Dockerfile).

The container is published to [DockerHub](https://cloud.docker.com/u/mvpstudio/repository/docker/mvpstudio/mvp-studio-web-cms).

CI build & deployment uses a [CircleCI config](https://github.com/MVPStudio/mvp-studio-web-cms/blob/master/.circleci/config.yml) and the output is [public](https://circleci.com/gh/MVPStudio/mvp-studio-web-cms).

## Deploy

This project id deployed automatically on kubernetes and the infrastructure config is [here](https://github.com/MVPStudio/mvp-studio-web-cms/blob/master/kube/prod-web.yaml).

If you are working on this project you will have been setup with [kubectl](https://kubernetes.io/docs/reference/kubectl/cheatsheet/).

#### Common Operations

**See the running pods for a project/namespace:**
```
kubectl get pods --namespace=prod-mvpstudio-web

NAME                                             READY     STATUS    RESTARTS   AGE
prod-mvpstudio-web-deployment-5764c44b6d-42ntl   1/1       Running   0          10d
```

**Get the logs from the contianer:**
```
kubectl logs prod-mvpstudio-web-deployment-5764c44b6d-42ntl --namespace=prod-mvpstudio-web

MVP-studio node server listening on port 8001!
```

**Restart the container:**
```
kubectl delete pod prod-mvpstudio-web-deployment-5764c44b6d-42ntl --namespace=prod-mvpstudio-web
```

**SSH into the container**
```
kubectl exec -it prod-mvpstudio-web-deployment-5764c44b6d-42ntl --namespace=prod-mvpstudio-web -- /bin/bash

mvp@prod-mvpstudio-web-deployment-5764c44b6d-xbzgr:~/app$ ls
config  public  server

mvp@prod-mvpstudio-web-deployment-5764c44b6d-xbzgr:~/app$ exit
```

**Manually Deploy**
```
kubectl apply -f ./kube
```
