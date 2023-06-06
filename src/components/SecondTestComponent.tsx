import { FC, useEffect, useState } from "react";

interface Props {
  skills: string[];
}

const SecondTestComponent: FC<Props> = ({ skills }) => {
  const [isLoggegIn] = useState(false);
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 1001);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill: string) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {showText && <p>Show the Text</p>}
      {isLoggegIn ? <button>Logout</button> : <button>Login</button>}
    </>
  );
};

export default SecondTestComponent;
