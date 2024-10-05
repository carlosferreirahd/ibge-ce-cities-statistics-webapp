# IBGE Cities Statistics

This project is a straightforward exploration of the Brazilian IBGE API, designed to help (us) understand how it works. It was originally created by my friend [Alcides](https://github.com/srcid) as a Python API that interacts with the IBGE API for a job challenge. I decided to build on his work by using his API to develop this simple yet functional React web app 😄.

This web app lets you search for cities in the state of Ceará and view data such as population, literacy rates, and GDP trends over the years, as available from the IBGE API.

![Homepage](https://github.com/carlosferreirahd/ibge-ce-cities-statistics-webapp/blob/main/readme/home.png?raw=true)

![Population](https://github.com/carlosferreirahd/ibge-ce-cities-statistics-webapp/blob/main/readme/population.png?raw=true)

![Literacy](https://github.com/carlosferreirahd/ibge-ce-cities-statistics-webapp/blob/main/readme/literacy.png?raw=true)

![GDP](https://github.com/carlosferreirahd/ibge-ce-cities-statistics-webapp/blob/main/readme/gdp.png?raw=true)

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the API repository and run it**:

Clone the [original Python API](https://github.com/srcid/insight-python) made by [Alcides](https://github.com/srcid), and run it using `Docker`.

```sh
git clone https://github.com/srcid/insight-python
```

```sh
cd insight-python
```

```sh
docker compose up
```

2. **Clone this repository and run it**:

Clone this React webapp, install the dependencies and start the development server.

```sh
git clone https://github.com/carlosferreirahd/ibge-ce-cities-statistics-webapp.git
```

```sh
cd ibge-ce-cities-statistics-webapp
```

```sh
npm install
```

```sh
npm run dev
```

3. **Check the application**:

Open your browser and go to `http://localhost:5173` to see the application running.

## Technologies Used

- **React**;
- **TypeScript**;
- **Vite**;
- **[Tailwind CSS](https://tailwindcss.com/)**;
- **[tailwind-animated](https://github.com/new-data-services/tailwindcss-animated)**;
- **[daisyUI](https://daisyui.com/)**;
- **[fuse.js](https://github.com/krisk/fuse)**;
- **[Chart.js](https://github.com/chartjs/Chart.js)**;
- **[TanStack Query](https://tanstack.com/query/latest)**;

## Features

- [x] **List and Search Ceará Cities**;
- [x] **Population Growth Graph over the years**;
- [x] **Literacy Rates Graph over the years**;
- [x] **GDP Trends Graph over the years**;
- [x] **Light and Dark Themes**;
