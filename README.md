# Containerization of a React App

### Step 1
To create react application via the command line, you should have Node installed on your computer. 

#### npx create-react-app my-app
#### cd my-app
#### npm start

That's it. Open http://localhost:3000/ to see your app.

### Step 2
Before we containerize our application, we should create a special file that Docker understands, i.e, Dockerfile in the root of your application.
Docker builds images automatically by reading the instructions from a Dockerfile.A Docker image consists of read-only layers each of which represents a Dockerfile instruction. The layers are stacked and each one is a delta of the changes from the previous layer.

Without further ado, let's write into our Dockerfile

### Step 3
Now, let's build our Dockerfile,

docker build -f Dockerfile -t react-app:latest .

### step 4
takes that build folder, pulls Nginx image from Dockerhub, and copies our build to the /html folder we specified. Now Nginx serves our React application inside port 80 inside the container. After all the steps/layers in Dockerfile are completed successfully, we can spin up the image using the following command,

docker run -it --rm -p 3000:80 my_react_app:prod

in this, the port 80 from container listens in 3000 in our machine, which means we can view our application on http://localhost:3000
With this, now you can able to containerize your applic
