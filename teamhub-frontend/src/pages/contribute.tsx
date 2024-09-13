import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContributeForm from "../components/Forms/contributeForm";
import TimeLine from "../components/timeLine";
import TrackerWidget from "../components/trackerWidget";

export default function Contribute() {
  return (
    <>
      <Navbar />

      <section className="bg-purple-300 p-5 mt-20 mb-1">
        <h1 className="text-8xl text-left m-5 ms-20 mt-20 text-black">
          Submit Post
        </h1>
        <p className="text text-left m-20 ms-40 me-40 text-black">
          Have a topic to raise? <br />
          Create a contribution and make sure your voice is heard! Your ideas
          and concerns are valuable.
        </p>
      </section>

      <ContributeForm />

      <section className="flex flex-wrap justify-center align-middle mt-20 bg-stone-900 p-20">
        <TimeLine />
        <TrackerWidget />
      </section>
      <Footer />
    </>
  );
}
