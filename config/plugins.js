// config/plugin.js
//CLOUDINARY_URL=cloudinary://165543942446938:ro5de2o9n895NkOeID4-XP5lUIQ@dajutt8ul
module.exports = ({ env }) => ({
    upload: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('CLOUDINARY_NAME', 'dajutt8ul'),
            api_key: env('CLOUDINARY_KEY', '165543942446938'),
            api_secret: env('CLOUDINARY_SECRET', 'ro5de2o9n895NkOeID4-XP5lUIQ')
        }
    }
});