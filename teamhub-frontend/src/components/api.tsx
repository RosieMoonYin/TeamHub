export interface Meeting {
  id: number;
  meetingName: string;
  description?: string;
  meetingDate: string; // Date is often serialized as a string in JSON
  summary?: string;
  aiSummary?: string;
  posts?: Post[]; // If you need to handle posts, include this
}

export interface Post {
  id: number;
  personName: string;
  textInput: string;
  postType?: string; // Optional, defaults to "General"
  status?: string; // Optional, defaults to "Open"
  meetingId: number; // Foreign key
}

export const fetchMeetings = async (): Promise<Meeting[]> => {
  const response = await fetch("http://localhost:5082/api/Meeting");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
