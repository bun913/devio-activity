FROM mcr.microsoft.com/playwright:focal
RUN apt-get -y update
RUN apt-get install -y \
    curl \
    gnupg
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN npm install npm@latest -g
COPY ./ ./
ENTRYPOINT [ "node" ]
CMD [ "dist/index.js" ]