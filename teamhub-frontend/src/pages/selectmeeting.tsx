import SelectOpenMeeting from "../components/Cards/selectOpenMeetings";
import Footer from "../components/footer";
import AddMeetingForm from "../components/Forms/addMeetingForm";
import Navbar from "../components/navbar";
import TimeLine from "../components/timeLine";
import TrackerWidget from "../components/trackerWidget";

export default function SelectMeeting() {
  return (
    <>
      <Navbar />

      <section className="bg-purple-300 p-5 mt-10 mb-5">
        <h1 className="text-8xl text-left m-5 ms-20 mt-20 text-black">
          Choose a discussion
        </h1>
        <p className="text text-left m-20 ms-40 me-40 text-black">
          We help small businesses and startups to manage and summarize issues
          effortlessly, ensuring every meeting is organized and productive.
          Simplify your workflow and focus on what matters most with a smart
          meeting board designed for your needs.
        </p>
      </section>
      <SelectOpenMeeting />
      {/* <h2 className="text-8xl text-left m-5 mt-20 mb-20">SyncSpace</h2>
      <p className="text text-left text-4xl m-5 ms-40 me-40">
        Not seeing the meeting you’re looking for?
      </p>
      <p className="text text-left text-lg m-10 ms-60 me-40">
        No worries! Just fill out the form below to create a new one and get
        things rolling.
      </p> */}
      <section className="bg-lime-200 p-5 mt-10 mb-5">
        <h2 className="text-4xl text-left m-5 ms-20 mt-20 text-black">
          Not seeing the meeting you’re looking for?
        </h2>
        <p className="text text-left text-2xl m-20 ms-40 me-40 text-black">
          No worries! Just fill out the form below to create a new one and get
          things rolling.
        </p>
      </section>
      <AddMeetingForm />

      <section className="flex flex-wrap justify-center align-middle mt-20 bg-stone-900 p-20">
        <TimeLine />
        <TrackerWidget />
      </section>

      <Footer />
    </>
  );
}
