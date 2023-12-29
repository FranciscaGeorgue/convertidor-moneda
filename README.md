# convertidor-moneda
Aplicación para convertir UF a CLP

## Instalar dependencias

```bash
 cd backend
 npm install
 cd frontend
 npm install
```

## Agregar archivos de configuracion

- Ruta: ./backend
- Archivo: .env

```
MONGO_URI = mongodb+srv://<user>:<password>@default.o61cqaw.mongodb.net/converter?retryWrites=true&w=majority
FRONTEND_URL = http://localhost:5173
JWT_SECRET = jwt_secret_key
```

- Ruta: ./frontend
- Archivo: .env.local

```
VITE_API_URL = http://127.0.0.1:4000/api
```

## Correr app

```bash
 cd backend
 npm run dev
 cd frontend
 npm run dev
```

## Ver proyecto en el navegador

Dirigirse a la URL http://localhost:5173