import React, { useEffect, useState } from "react";

const Audio: React.FC = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [text, setText] = useState<string>("Hello. Text to Speech in React js");
  const [pitch, setPitch] = useState<number>(1);
  const [rate, setRate] = useState<number>(1);

  useEffect(() => {
    const getVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0 && !selectedVoice) {
        setSelectedVoice(availableVoices[0]);
      }
    };

    // Load voices initially
    getVoices();

    // Set up event listener for when voices are loaded asynchronously
    window.speechSynthesis.onvoiceschanged = getVoices;
  }, [selectedVoice]);

  const handleClick = () => {
    const utterance = new SpeechSynthesisUtterance(text);

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.pitch = pitch;
    utterance.rate = rate;

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div style={{ margin: "20px", maxWidth: "500px" }}>
      <h3>Text to Speech</h3>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", height: "100px", marginBottom: "10px" }}
      />

      <div style={{ margin: "10px 0" }}>
        <label>Voice: </label>
        <select
          onChange={(e) => {
            const voice = voices.find((v) => v.name === e.target.value);
            setSelectedVoice(voice || null);
          }}
          value={selectedVoice?.name || ""}
          style={{ marginLeft: "5px" }}
        >
          {voices.map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>
      </div>

      <div style={{ margin: "10px 0" }}>
        <label>Pitch: {pitch.toFixed(1)}</label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={pitch}
          onChange={(e) => setPitch(parseFloat(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ margin: "10px 0" }}>
        <label>Speed: {rate.toFixed(1)}</label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      <button
        onClick={handleClick}
        style={{ padding: "8px 16px", marginTop: "10px" }}
      >
        Speak
      </button>
    </div>
  );
};

export default Audio;
