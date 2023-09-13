import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "홍길동",
    content: "아버지, 아... 아버지",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "춘향이",
    content: "공무원, 아... 공무원",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "심청이",
    content: "저는 물이 싫어요",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
