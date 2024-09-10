import SelectOpenMeeting from "../components/Cards/selectOpenMeetings";
import Footer from "../components/footer";
import AddMeetingForm from "../components/Forms/addMeetingForm";
import Navbar from "../components/navbar";

export default function SelectMeeting() {
  return (
    <>
      <Navbar />

      <SelectOpenMeeting />

      <AddMeetingForm />

      <Footer />
    </>
  );
}
