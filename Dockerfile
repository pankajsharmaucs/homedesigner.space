# Use the official Nginx image as base
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /var/www/html/projects/static/homedesigner.space

# Copy the contents of your local '/home' directory to the target location in the container
COPY . /var/www/html/projects/static/homedesigner.space

# Expose port 80 to be able to view the website from the container
EXPOSE 80
