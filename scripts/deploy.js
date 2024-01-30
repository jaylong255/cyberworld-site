require('dotenv').config();
const { exec } = require('child_process');

const args = process.argv.slice(2).join(' ');

// Determine whether the environment is dev, stage, or prod from the command line. According to the environment, 
// set the bucket and distribution id accordingly.
switch (args) {
  case 'dev':
    bucket = process.env.DEV_BUCKET;
    distributionId = process.env.DEV_DISTRIBUTION;
    break;
  case 'stage':
    bucket = process.env.STAGE_BUCKET;
    distributionId = process.env.STAGE_DISTRIBUTION;
    break;
  case 'prod':
    bucket = process.env.PROD_BUCKET;
    distributionId = process.env.PROD_DISTRIBUTION;
    break;
  default:
    console.error('Invalid environment');
    return;
}

// make sure the bucket is updated before invalidating the cloudfront distribution
exec(`aws s3 sync ./build/ s3://${bucket} --delete`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
  exec(`aws cloudfront create-invalidation --distribution-id ${distributionId} --paths "/*"`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
});
