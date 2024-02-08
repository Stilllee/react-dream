import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "장도연",
    title: "개그우먼",
    mentor: {
      name: "유재석",
      title: "선배 개그맨",
    },
  });
  return (
    <div>
      <h1>
        {person.name}은(는) {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`What's your mentor's name?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`What's your mentor's title?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, title },
          }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
