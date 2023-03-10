FROM mcr.microsoft.com/playwright:focal
WORKDIR /github/workspace
RUN apt-get -y update
RUN apt-get install -y \
    curl \
    gnupg
# 最新のLTSを確認すること
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN npm install npm@latest -g
COPY ./ /github/workspace
ENTRYPOINT [ "node" ]
CMD [ "dist/index.js"]