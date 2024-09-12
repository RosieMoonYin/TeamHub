import SelectOpenMeeting from "../components/Cards/selectOpenMeetings";
import Footer from "../components/footer";
import AddMeetingForm from "../components/Forms/addMeetingForm";
import Navbar from "../components/navbar";

export default function SelectMeeting() {
  return (
    <>
      <Navbar />

      <SelectOpenMeeting />
      <h1 className="text-8xl text-left m-5 mt-20 mb-20">SyncSpace</h1>
      <p className="text text-left text-4xl m-5 ms-40 me-40">
        Not seeing the meeting you’re looking for?
      </p>
      <p className="text text-left text-lg m-10 ms-60 me-40">
        No worries! Just fill out the form below to create a new one and get
        things rolling.
      </p>
      <AddMeetingForm />

      <Footer />
    </>
  );
}
