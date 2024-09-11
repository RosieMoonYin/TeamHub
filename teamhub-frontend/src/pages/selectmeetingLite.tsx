import SelectOpenMeetingLite from "../components/Cards/selectOpenMeetingsLite";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function SelectMeetingLite() {
  return (
    <>
      <Navbar />
      <h1 className="text-8xl text-left m-5 mt-20">To Meet or Not</h1>
      <p className="text text-left text-sm m-20 ms-40 me-40">
        Efficiency is key: meetings with fewer than 5 contributions might not be
        worth your time.
        <br />
        <br />
        <span className="italic">"Time is money." – Benjamin Franklin</span>
      </p>
      <SelectOpenMeetingLite />
      <Footer />
    </>
  );
}
