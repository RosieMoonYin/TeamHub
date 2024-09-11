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

export interface UpdateMeetingDto {
  summary?: string;
  aiSummary?: string;
  status?: string;
}

// export const fetchMeetings = async (): Promise<Meeting[]> => {
//   const response = await fetch("http://localhost:5082/api/Meeting");
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// };

export const fetchOpenMeetings = async (): Promise<Meeting[]> => {
  const response = await fetch("http://localhost:5082/api/Meeting/open");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchClosedMeetings = async (): Promise<Meeting[]> => {
  const response = await fetch("http://localhost:5082/api/Meeting/closed");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch("http://localhost:5082/api/Posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchPostsByMeetingId = async (
  meetingId: number
): Promise<Post[]> => {
  const response = await fetch(
    `http://localhost:5082/api/Posts/MeetingId?meetingId=${meetingId}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const createPost = async (postData: {
  personName: string;
  textInput: string;
  postType: string;
  status: string;
  meetingId: number;
}) => {
  const response = await fetch("http://localhost:5082/api/Posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error("Failed to create post");
  }

  return response.json();
};

export const createMeeting = async (meetingData: {
  meetingName: string;
  description?: string;
  meetingDate: string;
}) => {
  const response = await fetch("http://localhost:5082/api/Meeting", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(meetingData),
  });
  if (!response.ok) {
    throw new Error("Failed to create meeting");
  }
  return response.json();
};

export const updateMeeting = async (
  id: number,
  updateData: UpdateMeetingDto
): Promise<Meeting> => {
  const response = await fetch(`http://localhost:5082/api/Meeting/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });

  if (!response.ok) {
    throw new Error("Failed to update meeting");
  }

  return response.json();
};
