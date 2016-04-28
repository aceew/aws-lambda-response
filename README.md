# aws-lambda-response

> A simple package for sending standard responses in AWS Lambda callback functions.

## Install
```
$ npm install --save aws-lambda-response
```

## Why
API Gateway does not support objects as the error parameter in callbacks from Lambda, this package solves this buy stringifying error and failure responses and assumes the JSON is parsed at API Gateway level. 


## Usage

```js
require resp from 'aws-lambda-response';

function handler(event, contect, callback) {
  callback(resp.success(200, { hello: "World"}));
}

export { handler };

```


## API

### resp.success(statusCode, data)

##### statusCode

Type: `int`

HTTP status code to be mapped in the API Response header

##### data

Type: `object`

Response payload.

### resp.error(statusCode, message, data)

##### statusCode

Type: `int`

HTTP status code to be mapped in the API Response header

##### message

Type: `string`

Error message

##### data

Type: `object`

Any additional response data.

### resp.fail(statusCode, data)

##### statusCode

Type: `int`

HTTP status code to be mapped in the API Response header

##### data

Type: `object`

Response data that may help explain the issue. Can be be a string if the information is better presented as one.


## License

MIT
