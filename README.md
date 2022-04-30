# Tailwind Crush Course

For this project, I'm following this [youtube video](https://www.youtube.com/watch?v=BY6fhtCDrqU)

```shell
npm init -y
```

## Install Parcel

We are going to install a Bundle called Parcel

```shell
npm install --save-dev parcel
```

We need to make changes to our `package.json` file

> From: "main": "index.js",
> To: "source": "./src/index.html",

## Install Tailwind

We need to install Tailwind. We can follow the documentation on how to install it with Parcel

```shell
 npm install -D tailwindcss postcss autoprefixer
 npx tailwindcss init
```

Follow the Tailwind documentation on how to complete the setup.

> **Note:**
> We are making changes to Tailwind to use some Preproccessors

```shell
npm install -D postcss-import
```

## Run project

To run this project during the development process, you need to run:

```shell
npm run dev
```

Once you are done and it's ready to deploy to pruduction, you can stop the preovious command and run:

```shell
npm run build
```

This will compile everything and create a `dist` folder. This folder will contain the code you need to deploy to the production server.
