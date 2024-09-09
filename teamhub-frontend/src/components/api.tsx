export interface Meeting {
  id: number;
  meetingName: string;
  description?: string;
  meetingDate: string;
  summary?: string;
  aiSummary?: string;
  posts?: Post[];
}

export interface Post {
  id: number;
  personName: string;
  textInput: string;
  postType?: string;
  status?: string;
  meetingId: number;
}

export const fetchMeetings = async (): Promise<Meeting[]> => {
  const response = await fetch("http://localhost:5082/api/Meeting");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
