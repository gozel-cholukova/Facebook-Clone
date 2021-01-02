import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post"

function Feed() {
  return (
    <div className="feed">
      {/* StoryReel */}
      <StoryReel />
      {/* MessageSender */}
      <MessageSender />

      <Post 
        profilePic="https://pbs.twimg.com/profile_images/758628680579047424/C7BBg-vE.jpg"
        message="Check and test"
        timestamp="This is a timestamp"
        username="Gozel CH"
        image="https://cdn-images.welcometothejungle.com/5DDbrp9_kdlw05Z0hzc7kYEpaaruHhUUWJqs-nW1o8k/rs:auto:980::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9jYXRlZ29yeS9jb3Zlci8yNjYwLzE1NDg4My9jb2xsZWN0aW9uX2NhdGVnb3J5X2JlaGluZF90aGVfY29kZS5qcGc" 
      />

      <Post 
        profilePic="https://pbs.twimg.com/profile_images/758628680579047424/C7BBg-vE.jpg"
        message="Check and test"
        timestamp="this is a timestamp"
        username="Gozel CH"
      />
    </div>
  );
}
export default Feed;