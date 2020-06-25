FROM hayd/alpine-deno:1.1.1

EXPOSE 5000

WORKDIR /app

USER root

COPY deps.ts .
RUN deno cache deps.ts

<<<<<<< HEAD
<<<<<<< HEAD
COPY . .
=======
ADD . .
>>>>>>> f208604... Add docker files
=======
COPY . .
>>>>>>> 2673bbd... Update Dockerfile
RUN deno cache server.ts

CMD ["run", "--allow-net", "--allow-read", "--allow-write", "server.ts"]