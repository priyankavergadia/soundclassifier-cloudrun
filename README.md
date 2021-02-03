# soundclassifier-cloudrun
Sound Classifier made in teachable machines and hosted on Cloud Run

To deploy the service on Cloud Run you would first need to follow these steps:
* Build the service
* Create container image
* Deploy the service 

##Build the service
The service is already built for you. Just go ahead and build the image in the next step.

###Optional
If you are interested in starting from scratch then follow [this Quikstart](https://cloud.google.com/run/docs/quickstarts/build-and-deploy) to get the basic node.js service running.

Create a public directory in the folder and add all the .js and index.html files donwloaded from p5.js

Copy the contents of index.js from this repo and add them to your index.js. You are essentially just calling the index.html from the node.js service.

##Build the container image
```gcloud builds submit --tag gcr.io/PROJECT-ID/soundclassifier-service```

##Deploying to Cloud Run
```gcloud run deploy --image gcr.io/PROJECT-ID/soundclassifier-service --platform managed```
