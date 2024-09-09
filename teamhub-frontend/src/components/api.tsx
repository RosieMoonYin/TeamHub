export interface Meeting {
  id: number;
  title: string;
}

export const fetchMeetings = async (): Promise<Meeting[]> => {
  const response = await fetch("/api/meeting");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
