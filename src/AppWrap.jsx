import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnva795U6Ke5YxLOwi3LE3o7gGynyfXmf6EXuoG9ay7l9MqOa-UA79-gqXu3rw12jWyzA&usqp=CAU"
          name="푸바오"
          size={200}
        />
        <p>안녕하세요!</p>
      </Navbar>
      <Navbar>
        <p>반가워요!</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: "greenyellow" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}
