const GOOGLE_API_KEY = "AIzaSyCR9JuniM19jgZM60Sqq3IoJxqRyRM56B8";

const YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="+GOOGLE_API_KEY;
export default YOUTUBE_VIDEOS_API;