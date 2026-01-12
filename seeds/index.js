const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("database connected");
});

const pickSample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 30) + 10;
    // Default values for a new campground
    const camp = new Campground({
      author: "67731b999add29adf59234be",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${pickSample(descriptors)} ${pickSample(places)}`,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      images: [
        {
          url: "https://res.cloudinary.com/dptgg37uu/image/upload/w_800,ar_1:1,c_fill,g_auto,e_art:hokusai/v1735942688/YelpCamp/krvrt7hbruwmjl1cxwyn.jpg",
          filename: "YelpCamp/krvrt7hbruwmjl1cxwyn",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, quo obcaecati iure itaque voluptatum doloribus blanditiis exercitationem ducimus numquam. Praesentium assumenda dignissimos facilis dolorum officia aperiam minima voluptatum vero unde.",
      price,
    });
    await camp.save();
  }
};

seedDB();
