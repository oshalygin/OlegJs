FROM node:7.0.0

MAINTAINER Oleg Shalygin <oshalygin@gmail.com>

ARG version

LABEL version=$version
LABEL description="OlegJs Web Application"

ENV PORT=3000
ENV PACKAGE_VERSION=$version

COPY . /wwwroot
WORKDIR /wwwroot
EXPOSE $PORT

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN $HOME/.yarn/bin/yarn install
RUN npm run build

ENTRYPOINT  ["npm", "run", "open:dist"]
