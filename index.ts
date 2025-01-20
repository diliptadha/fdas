import { S3Client } from "bun";

console.log("ok");

const client = new S3Client({
  accessKeyId: "env",
  secretAccessKey: "T+/env/aF13TB3FhHsS",
  bucket: "demo-hai-bro",
  endpoint: "https://storage.googleapis.com",
  // acl: "public-read",
});

const response = await fetch(
  "https://storage.googleapis.com/demo-hai-bro/demo/20241215111916_3dicons-png-dynamic-1.0.0.zip"
);

const lazyS3File = client.file("asdf");

const resposes = new Response(lazyS3File);
console.log("resposes", resposes);

// const writer = lazyS3File.writer({
//   retry: 3,
//   queueSize: 10,
//   type: "application/octet-stream",
//   partSize: 5 * 1024 * 1024,
// });
// for await (const chunk of response.body) {
//   writer.write(chunk);
// }
// await writer.end();
