FROM node:16-slim
RUN npx playwright install chromium
COPY ./ ./
CMD [ "node", "dist/index.js"]