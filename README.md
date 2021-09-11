# nginx-sample
Dockerでnginxを使用するサンプルコードです。

解説記事は[こちら](https://qiita.com/fukky21/items/cd6e29a1519754aae5f5)

## Setup
```bash
$ docker-compose up
```

## Usage
- WEB

  http://localhost/app にアクセス

- API

  ```bash
  $ curl http://localhost/api/v1/users -s | jq
  {
    "users": [
      {
        "id": 1,
        "name": "ココア",
        "email": "cocoa@example.com"
      },
      {
        "id": 2,
        "name": "チノ",
        "email": "chino@example.com"
      },
      {
        "id": 3,
        "name": "リゼ",
        "email": "rize@example.com"
      },
      {
        "id": 4,
        "name": "千夜",
        "email": "chiya@example.com"
      },
      {
        "id": 5,
        "name": "シャロ",
        "email": "syaro@example.com"
      }
    ]
  }

  ```
