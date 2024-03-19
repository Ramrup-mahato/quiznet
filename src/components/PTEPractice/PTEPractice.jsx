import React, { useState } from "react";

const PTEPractice = () => {
  const [originalParagraph, setOriginalParagraph] = useState("");
  const [recordedVoice, setRecordedVoice] = useState("");
  const [score, setScore] = useState({
    pronunciationAccuracy: 0,
    fluent: 0,
    stress: 0,
    speed: 0,
  });
  const [scoreCategory, setScoreCategory] = useState("");

  const handleRecordedVoiceChange = (event) => {
    const { value } = event.target;
    setRecordedVoice(value);
  };

  const handleOriginalParagraphChange = (event) => {
    const { value } = event.target;
    setOriginalParagraph(value);
  };

  const compareParagraphs = () => {
    // Compare originalParagraph with recordedVoice
    // Implement your comparison logic here
    // Calculate scores for pronunciationAccuracy, fluent, stress, speed
    // Set the score and scoreCategory accordingly

    // Example scoring (random scores)
    const scoreResult = {
      pronunciationAccuracy: -19,
      fluent: -77,
      stress: -60,
      speed: 24,
    };

    setScore(scoreResult);

    // Determine score category
    let totalScore = 0;
    for (const key in scoreResult) {
      totalScore += scoreResult[key];
    }

    const averageScore = totalScore / Object.keys(scoreResult).length;

    if (averageScore >= 70) {
      setScoreCategory("Good");
    } else if (averageScore >= 40) {
      setScoreCategory("Average");
    } else {
      setScoreCategory("Bad");
    }
  };
  return (
    <div className="w-full md:w-[1024px] min-h-[calc(100vh-115px)] lg:min-h-[100vh]  px-6 sm:px-5 gap-5 pt-[70px]  sm:pt-[100px] pb-5 sm:pb-10">
      <div
        className="w-full h-full lg:h-[calc(100vh-115px)]  flex flex-col bg-[var(--colW3)] dark:bg-gray-900 shadow-xl shadow-[var(--colG3)]
       dark:shadow-gray-700 text-black dark:text-white rounded-bl-3xl rounded-tr-3xl "
      >
        <div
          className="bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
      font-semibold text-base shadow-md shadow-slate-500 dark:shadow-gray-900 p-2 rounded-tr-3xl"
        >
          <h3>some thing</h3>
        </div>
        <div>
          <h2>Original Paragraph</h2>
          <textarea
            value={originalParagraph}
            onChange={handleOriginalParagraphChange}
            rows={5}
            cols={50}
            className="bg-slate-300 m-3 p-3"
          />

          <h2>Recorded Voice</h2>
          <textarea
            value={recordedVoice}
            onChange={handleRecordedVoiceChange}
            rows={5}
            cols={50}
            className="bg-slate-300 m-3 p-3"

          />

          <button className="bg-blue-700 text-white p-2 rounded-md cursor-pointer m-2" onClick={compareParagraphs}>Compare</button>

          <h2>Score</h2>
          <p>Pronunciation Accuracy: {score.pronunciationAccuracy}%</p>
          <p>Fluent: {score.fluent}%</p>
          <p>Stress: {score.stress}%</p>
          <p>Speed: {score.speed}%</p>

          <h2>Score Category</h2>
          <p>{scoreCategory}</p>
        </div>
      </div>
    </div>
  );
};

export default PTEPractice;
