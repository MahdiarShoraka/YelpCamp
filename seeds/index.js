const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");

mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp", {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("database connected");
});

const pickSample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 5; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 30) + 10;
    const camp = new Campground({
      author: "67731b999add29adf59234be",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${pickSample(descriptors)} ${pickSample(places)}`,
      image: `https://picsum.photos/seed/picsum/300/200`,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, quo obcaecati iure itaque voluptatum doloribus blanditiis exercitationem ducimus numquam. Praesentium assumenda dignissimos facilis dolorum officia aperiam minima voluptatum vero unde.",
      price,
    });
    await camp.save();
  }
};

seedDB();
