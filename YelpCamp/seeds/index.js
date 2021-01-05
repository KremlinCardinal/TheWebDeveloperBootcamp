const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '5fdf4d364505213724ee8a9b',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, quos. Architecto qui tempore ducimus expedita iste, officiis ab, rerum placeat quis velit, pariatur consequatur voluptatibus! Iste ea distinctio autem illo?',
            price,
            geometry: {
                "type": "Point",
                "coordinates": [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/kremlincardinal/image/upload/v1609511947/YelpCamp/lh7yicerufxe1a2rnhnt.jpg',
                    filename: 'YelpCamp/lh7yicerufxe1a2rnhnt'
                },
                {
                    url: 'https://res.cloudinary.com/kremlincardinal/image/upload/v1609511947/YelpCamp/glomtowgzzz17c5gjvh7.jpg',
                    filename: 'YelpCamp/glomtowgzzz17c5gjvh7'
                }
            ]
        });
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});