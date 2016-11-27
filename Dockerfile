FROM node:7.0.0

MAINTAINER Oleg Shalygin "oshalygin@gmail.com"

LABEL version="0.0.1"
LABEL description="OlegJs Web Application"

ENV PORT=3000

COPY . /wwwroot
WORKDIR /wwwroot
EXPOSE $PORT

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN $HOME/.yarn/bin/yarn install

ENTRYPOINT  ["npm", "run", "build"]
