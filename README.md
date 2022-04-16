
# Bad Word Checker

This API lets you check for bad words using Wit.AI!

## API Reference

#### Full Check

```http
  GET /check/full
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. The text to check |

#### Medium Check

```http
  GET /check/medium
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. The text to check |

#### Relaxed Check

```http
  GET /check/relax
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. The text to check |

#### Custom Check

```http
  GET /check/custom
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `text` | `string` | **Required**. The text to check |
| `minscale` | `integer` | **Required**. The minimum scale to flag (1, 2, 3, 4, 5) |

## Run Locally

Clone the project

```bash
  git clone https://github.com/Offensively/bad-word-checker-api
```

Go to the project directory

```bash
  cd bad-word-checker-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

The server will start on port 8080 but you can change this in the .env file!


## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

`WIT_TOKEN`

Optional: `PORT`


## Author

- [@OffensivelyKind](https://www.github.com/Offensively)

