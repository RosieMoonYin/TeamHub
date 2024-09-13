import SelectOpenMeetingLite from "../components/Cards/selectOpenMeetingsLite";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import TimeLine from "../components/timeLine";
import TrackerWidget from "../components/trackerWidget";

export default function SelectMeetingLite() {
  return (
    <>
      <Navbar />
      <section className="bg-stone-900 p-5 mt-20 mb-5 pb-10">
        <h1 className="text-8xl text-left m-5 ms-20 mt-20 text-white">
          To Meet or Not
        </h1>
        <p className="text text-left m-20 ms-40 me-40 text-white">
          Efficiency is key: meetings with fewer than{" "}
          <span className="badge badge-error">5 contributions!</span> might not
          be worth your time.
          <br />
          <br />
          "Time is money." – Benjamin Franklin
        </p>
      </section>
      <SelectOpenMeetingLite />

      <section className="bg-cyan-200 p-5 mt-20 pb-10">
        <h1 className="text-8xl text-left m-5 ms-20 mt-20 text-black">
          All voices heard
        </h1>
        <p className="text text-left m-20 ms-40 me-40 text-black">
          At TeamHub, we believe in the power of inclusive dialogue to drive
          progress and unity. Our platform is dedicated to ensuring that every
          voice is heard and valued, regardless of race, gender, or background.
          By fostering a collaborative environment where diverse perspectives
          are elevated and embraced, we empower teams to achieve their fullest
          potential. Together, we create a space where every individual
          contributes to meaningful change, advancing equity and understanding
          across all communities.
        </p>
      </section>

      <section className="flex flex-wrap justify-center align-middle bg-stone-900 p-20">
        <TimeLine />
        <TrackerWidget />
      </section>
      <Footer />
    </>
  );
}
