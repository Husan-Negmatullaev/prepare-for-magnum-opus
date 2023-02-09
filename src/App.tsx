import React, {RefObject} from "react";

import {IPostItem, PostItem} from "./components/post-item/PostItem";

import "./styles/style.css";
import {PostsList} from "./components/posts-list/PostsList";
import {PrimaryButton} from "./components/UI/primary-button/PrimaryButton";
import {PrimaryInput} from "./components/UI/primary-input/PrimaryInput.";

function App() {
  const [listPosts, setListPosts] = React.useState<IPostItem[]>([
    {
      id: 0,
      title: "JavaScript",
      description: "JavaScript - это язык прон=граммирования"
    },
    {
      id: 1,
      title: "JavaScript",
      description: "JavaScript - это язык прон=граммирования"
    },
    {
      id: 2,
      title: "JavaScript",
      description: "JavaScript - это язык прон=граммирования"
    },
  ]);
  const [title, setTitle] = React.useState<string>("");
  const bodyInputRef: RefObject<HTMLInputElement> = React.useRef(null);

  const createPost = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current?.value);
  };
  
  return (
    <main className="app">
      <form action="#">
        <PrimaryInput
            type={"text"}
            value={title}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
            placeholder={"Название поста"}
        />
        <PrimaryInput
            ref={bodyInputRef}
            type={"text"}
            placeholder={"Описание поста"}
        />
        <PrimaryButton onClick={createPost}>Создать пост</PrimaryButton>
      </form>
      <PostsList posts={listPosts} title={"Список постов"} />
    </main>
  )
}

export default App
