FROM hayd/alpine-deno:1.1.1

EXPOSE 5000

WORKDIR /app

USER root

COPY deps.ts .
RUN deno cache deps.ts

<<<<<<< HEAD
COPY . .
=======
ADD . .
>>>>>>> f208604... Add docker files
RUN deno cache server.ts

CMD ["run", "--allow-net", "--allow-read", "--allow-write", "server.ts"]