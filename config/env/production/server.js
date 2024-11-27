// Path: ./config/env/production/server.js`

export default ({ env }) => ({
    proxy: true,
    url: env('https://elearning-strapi-f0a587e9a326.herokuapp.com/'), // Sets the public URL of the application.
    app: { 
        keys: env.array("APP_KEYS", ["2HE85F3RgFpL41N6xC/veg==", "8MIv77QcCOmSpnnrm6pjmQ==", "zv9uJWsJvIs2jQlNNAHU2g==","Vr46HUc79fNrEOpKBBbbkw=="]),
         },
   });