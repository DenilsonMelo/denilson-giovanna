"use client";

import { useEffect, useState } from "react";
import { Container } from "./styles";

export default function Counter() {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate: Date = new Date("2024-01-17T22:00:00");

    const targetGMT = 4;

    const startDateInGMT = new Date(
      startDate.getTime() + targetGMT * 60 * 60 * 1000
    );

    const calculateTimeElapsed = () => {
      const now = new Date();

      let difference = Math.floor((now.getTime() - startDateInGMT.getTime()) / 1000);

      const years = Math.floor(difference / (365.25 * 24 * 60 * 60));
      difference -= years * 365.25 * 24 * 60 * 60;

      const months = Math.floor(difference / (30.44 * 24 * 60 * 60));
      difference -= months * 30.44 * 24 * 60 * 60;

      const days = Math.floor(difference / (24 * 60 * 60));
      difference -= days * 24 * 60 * 60;

      const hours = Math.floor(difference / (60 * 60));
      difference -= hours * 60 * 60;

      const minutes = Math.floor(difference / 60);
      difference -= minutes * 60;

      const seconds = Math.floor(difference);

      setTimeElapsed({ years, months, days, hours, minutes, seconds });
    };

    const interval = setInterval(calculateTimeElapsed, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Container>
        <div style={{ fontSize: "1rem" }}>
          <span>Juntos a</span>
          <p>
            {timeElapsed.years} anos, {timeElapsed.months} meses,{" "}
            {timeElapsed.days} dias
          </p>
          <p>
            {timeElapsed.hours} horas, {timeElapsed.minutes} minutos,{" "}
            {timeElapsed.seconds} segundos
          </p>
        </div>
      </Container>
    </div>
  );
}
