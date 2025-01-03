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
  for (let i = 0; i < 1; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 30) + 10;
    const camp = new Campground({
      author: "67731b999add29adf59234be",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${pickSample(descriptors)} ${pickSample(places)}`,
      images: [
        {
          url: "https://res.cloudinary.com/dptgg37uu/image/upload/v1735838370/YelpCamp/awrowc4m2wjji4h0vkdv.jpg",
          filename: "YelpCamp/awrowc4m2wjji4h0vkdv",
        },
        {
          url: "https://res.cloudinary.com/dptgg37uu/image/upload/v1735838371/YelpCamp/otn86mthv6ltyfio6upu.jpg",
          filename: "YelpCamp/otn86mthv6ltyfio6upu",
        },
        // {
        //   url: "https://res.cloudinary.com/dptgg37uu/image/upload/v1735838371/YelpCamp/vpzfsdjie9cj14hbxc4m.jpg",
        //   filename: "YelpCamp/vpzfsdjie9cj14hbxc4m",
        // },
        // {
        //   url: "https://res.cloudinary.com/dptgg37uu/image/upload/v1735838372/YelpCamp/bitu9mlvpppugkdhd6se.jpg",
        //   filename: "YelpCamp/bitu9mlvpppugkdhd6se",
        // },
        // {
        //   url: "https://res.cloudinary.com/dptgg37uu/image/upload/v1735838372/YelpCamp/ug04si7jnygup4msq2qg.jpg",
        //   filename: "YelpCamp/ug04si7jnygup4msq2qg",
        // },
        // {
        //   url: "https://res.cloudinary.com/dptgg37uu/image/upload/v1735838372/YelpCamp/lyrd7iyjetjmb9jhdgxn.jpg",
        //   filename: "YelpCamp/lyrd7iyjetjmb9jhdgxn",
        // },
        // {
        //   url: "https://res.cloudinary.com/dptgg37uu/image/upload/v1735838372/YelpCamp/dbmj4ttubes2c9wd67lc.jpg",
        //   filename: "YelpCamp/dbmj4ttubes2c9wd67lc",
        // },
        // {
        //   url: "https://res.cloudinary.com/dptgg37uu/image/upload/v1735838372/YelpCamp/xvy0wbrs4qzcwsllzk2i.jpg",
        //   filename: "YelpCamp/xvy0wbrs4qzcwsllzk2i",
        // },
        // {
        //   url: "https://res.cloudinary.com/dptgg37uu/image/upload/v1735838373/YelpCamp/c1qyptyhxlw3fexwpm2a.jpg",
        //   filename: "YelpCamp/c1qyptyhxlw3fexwpm2a",
        // },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, quo obcaecati iure itaque voluptatum doloribus blanditiis exercitationem ducimus numquam. Praesentium assumenda dignissimos facilis dolorum officia aperiam minima voluptatum vero unde.",
      price,
    });
    await camp.save();
  }
};

seedDB();
