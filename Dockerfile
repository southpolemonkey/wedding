FROM node:14.15

# NODE_env environment variable
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Container workspace
ADD . /app
WORKDIR /app

# Install dependences
RUN cd /app && \
  npm install && \
  npm run build

# Expose server ports
EXPOSE 5000

# Start the service
CMD ["npm", "start"]