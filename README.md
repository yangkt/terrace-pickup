# Terrace Pickup React App
## Idea
## How to run
You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine, as well as yarn which you can download with `brew install yarn`.  
For the backend, you will need [docker](https://docs.docker.com/docker-for-mac/install/) and [google cloud](https://cloud.google.com/sdk/docs).  
The project id is terrace-pickup-qjl3-ky289.  
We will need to use npm to install the required node modules. 
Run the following code for the first time:  
```
gcloud init  
gcloud components install cloud-build-local  
cd backend  
cloud-build-local --config=cloudbuild.yaml --dryrun=false --push .  
cd frontend/src  
npm install  
yarn start  
```
For the rest of the instructions, regarding yarn please view the [full stack workshop](https://github.com/HackOurCampus/fullstack-integration-workshop/blob/master/frontend/README.md)
Run the following code for the other times time:  
```  
cd backend  
cloud-build-local --config=cloudbuild.yaml --dryrun=false --push .  
cd frontend/src  
yarn start  
```  
## Figma
Our two UI/UX designers created a [Figma](https://www.figma.com/file/YSXPWkmC3BhqieXJ3bdVMZ/Terrace?node-id=0%3A1) of the complete user flow for both the restaurant and user side
