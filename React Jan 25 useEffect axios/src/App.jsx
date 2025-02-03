import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [input, setInput] = useState([]);

  const handleInput = () => {
    let api = "https://jsonplaceholder.org/comments";
    axios.get(api).then((res) => {
      setInput(res.data);
      console.log(res);
    });
  };

  useEffect(() => {
    handleInput();
  }, []);

  const ans = input.map((key) => {
    return (
      <tr >
        <td>{(key.id)}</td>
        <td>{key.postId}</td>
        <td>{key.userId}</td>
        <td>{key.comment}</td>
      </tr>
    );
  });

  return (
    <>
      <h1>Data come from live api</h1>
      <table>
        <tr>
          <td>ID</td>
          <td>PostID</td>
          <td>userID</td>
          <td>Comment</td>
        </tr>
        {ans}
      </table>
    </>
  );
};

export default App;