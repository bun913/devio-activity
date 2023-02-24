FROM node:16-slim
RUN npm i
RUN npx playwright install chromium
COPY ./ ./
CMD [ "node", "dist/index.js"]