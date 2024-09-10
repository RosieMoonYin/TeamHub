import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PostsMeeting from "../components/postsMeeting";

export default function Meeting() {
  return (
    <>
      <Navbar />
      <h2>Hello Meeting Opened</h2>
      <section>
        <PostsMeeting />
      </section>
      <section>
        <h2>Put summary here!</h2>
      </section>

      <Link to="/">
        <button className="btn">Home</button>
      </Link>

      <Footer />
    </>
  );
}
