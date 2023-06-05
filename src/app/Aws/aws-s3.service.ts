// import { Injectable } from '@angular/core';
// import * as AWS from 'aws-sdk';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AwsS3Service {
//   private s3: AWS.S3;


//   uploadFile(file: File): Observable<any> {
//     const params = {
//       Bucket: 'YOUR_BUCKET_NAME',
//       Key: file.name,
//       Body: file
//     };

//     return new Observable((observer) => {
//       this.s3.upload(params, (err: any, data: any) => {
//         if (err) {
//           observer.error(err);
//         } else {
//           observer.next(data);
//           observer.complete();
//         }
//       });
//     });
//   }

//   constructor() {
//     this.s3 = new AWS.S3();
//     AWS.config.update({
//       accessKeyId: 'AKIAU3GCDHGVDSFNO7HA',
//       secretAccessKey: '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',
//       region: 'us-east-1'
//     });
//   }
// }
