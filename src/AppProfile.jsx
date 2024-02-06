import "./App.css";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

export default function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("버튼이 클릭됨!");
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avatar
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnva795U6Ke5YxLOwi3LE3o7gGynyfXmf6EXuoG9ay7l9MqOa-UA79-gqXu3rw12jWyzA&usqp=CAU"
        isNew={true}
      />
      <Profile
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnva795U6Ke5YxLOwi3LE3o7gGynyfXmf6EXuoG9ay7l9MqOa-UA79-gqXu3rw12jWyzA&usqp=CAU"
        name="푸바오"
        title="푸린세스"
        isNew={true}
      />
      <Profile
        image="https://i.namu.wiki/i/AglvF-QeqoTIBd8QBzVeqrTV6Ym2R9bfsxOE-FfWgQlQE4DpW-Xhm56deIxZfpED6tcEmerUHBhLGScgQUfSmw.webp"
        name="아이바오"
        title="아여사"
      />
      <Profile
        image="https://i.namu.wiki/i/Urvpd8COTqmf5PORAJ7rLEjSgLXvcFjJlAvfvkm8bnbUXr-c3eLDO1OsnOPyftZ6JdtrdpHRa_ImcoW8eWEqvfBnRjUaofr2AZ6HSRjny-mhRLN1n5EWYPPcDuI3Vaur56vrYGo5131NQu9F81xUrg.webp"
        name="러바오"
        title="낭만판다"
      />
    </>
  );
}
