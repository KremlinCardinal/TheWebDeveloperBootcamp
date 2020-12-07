const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        console.log("Connection open!");
    })
    .catch(err => {
        console.log("OH NO! ANYWAY...");
        console.log(err);
    });

const userSchema = new Schema({
    username: String,
    age: Number
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//     const user = await User.findOne({ username: 'chickenfan99' });
//     const tweet2 = new Tweet({ text: 'bock bock bock', likes: 1239 });
//     tweet2.user = user;
//     user.save();
//     tweet2.save();
// }

// makeTweets();

const findTweet = async () => {
    const t = await Tweet.findOne({}).populate('user', 'username');
    console.log(t);
}

findTweet();