const AWS = require('aws-sdk')
const express = require('express')
const multer = require('multer')
const multerS3 = require('multer-s3')
const path = require('path')

const router = express.Router();
require('dotenv/config')


const config = new AWS.Config({
    accessKeyId : process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY,
    region : 'ap-south-1'
});

const s3 = new AWS.S3({apiVersion: '2006-03-01'})

s3.listBuckets(function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Buckets);
    }
  });


