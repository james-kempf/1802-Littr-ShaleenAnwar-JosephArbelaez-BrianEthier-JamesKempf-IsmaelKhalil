import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class UploadFileService {

    FOLDER = 'littr/'

    constructor (){}

    uploadFile(file) {
        const bucket = new S3(
            {
              accessKeyId: 'AKIAIKGEIF6TAIFT6I3A',
              secretAccessKey: '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',
              region: 'us-east-1'
            }
          );

          const params = {
            Bucket: 'revature.1802february.littr',
            Key: 'littr/' + file.name,
            Body: file
          };

          bucket.upload(params, function (err, data) {
              if(err) {
                  console.log('There was an error uploading your file: ', err);
                  return false;
              }

              console.log('Successfully uploaded file.', data);
              return true;
          });
    }
}