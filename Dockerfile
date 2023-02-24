FROM node:16-slim
COPY ./ ./
RUN npm i
RUN npx playwright install chromium
CMD [ "node", "dist/index.js"]