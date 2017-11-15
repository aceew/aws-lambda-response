# aws-lambda-response [![Build Status](https://travis-ci.org/aceew/aws-lambda-response.svg?branch=master)](https://travis-ci.org/aceew/aws-lambda-response)

> A simple package for building standard responses in AWS Lambda callback functions to be handled by API Gateway.

*This package was written before Lambda Proxy Integrations existed. If you are looking for a package to handle lambda proxy responses, check out [lambda-proxy-response](https://www.npmjs.com/package/lambda-proxy-response)*

## Install
```
$ npm install --save aws-lambda-response
```

## Why
API Gateway does not support objects as the error parameter in callbacks from Lambda, this package solves this by stringifying error and failure responses and assumes the JSON is parsed at API Gateway level.


## Usage

```js
import resp from 'aws-lambda-response';

function handler(event, context, callback) {
  callback(null, resp.success(200, { hello: "World"}));
}

export { handler };

```

## API
The following API is based on the imported module being named `resp`, however it can be substituted for any name you want.

```js
// ES6 modules
import resp from 'aws-lambda-response';

// commonJS modules
const resp = require('aws-lambda-response');
```

---

```js
resp.success(statusCode, data)
```
#### Params
##### statusCode

Type: `int`

HTTP status code to be mapped in the API Response header

##### data

Type: `object`

Response payload.

#### Returns

Type: `object`

```js
{
  status: "success",
  httpStatus: (int)statusCode,
  data: (obj)data
}
```

---

```js
resp.error(statusCode, message, data)
```
#### Params
##### statusCode

Type: `int`

HTTP status code to be mapped in the API Response header

##### message

Type: `string`

Error message

##### data

Type: `object`

Any additional response data.

#### Returns

Type: `string`

Stringified object to be parsed in API Gateway output mapping.

```JSON
{
  "status": "error",
  "httpStatus": "(int)statusCode",
  "message": "(string)message",
  "data": "(object)data"
}
```

---

```js
resp.fail(statusCode, data)
```
### Params
##### statusCode

Type: `int`

HTTP status code to be mapped in the API Response header

##### data

Type: `object`

Response data that may help explain the issue. Can be be a string if the information is better presented as one.

#### Returns

Type: `string`

Stringified object to be parsed in API Gateway output mapping.

```JSON
{
  "status": "fail",
  "httpStatus": "(int)statusCode",
  "data": "(object)data"
}
```

---

## License

MIT
