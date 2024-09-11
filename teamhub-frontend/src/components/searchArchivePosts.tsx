import { useState } from "react";
import PostsForArchive from "./postsForArchive";

export interface PostsForArchiveProps {
  searchTerm: string;
}

export default function SearchArchivePosts() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div>
        <input
          type="search"
          className="input input-accent input-lg text-sm min-w-40 m-10"
          placeholder="Search posts"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <PostsForArchive searchTerm={searchTerm} />
      </div>
    </>
  );
}
