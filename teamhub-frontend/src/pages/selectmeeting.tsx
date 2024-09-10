import SelectOpenMeeting from "../components/Cards/selectOpenMeetings";
import Footer from "../components/footer";
import AddMeetingForm from "../components/Forms/addMeetingForm";
import Navbar from "../components/navbar";

export default function SelectMeeting() {
  return (
    <>
      <Navbar />

      <section>
        <SelectOpenMeeting />
      </section>

      <section className="w-80 m-10 flex flex-center">
        <AddMeetingForm />
      </section>
      <Footer />
    </>
  );
}
