create self sign certificate
```bash
openssl genpkey -algorithm RSA -out private.pem
openssl req -new -key private.pem -out request.csr
openssl x509 -req -days 365 -in request.csr -signkey private.pem -out certificate.pem
```
