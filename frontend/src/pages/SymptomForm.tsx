import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMicrophone, HiStop } from "react-icons/hi2";

export default function SymptomForm() {
  const [symptoms, setSymptoms] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [urgency, setUrgency] = useState("Medium");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // later: send symptoms + category + urgency to AI API
    navigate("/gps");
  };

  // Handle voice input (Web Speech API)
  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support voice input.");
      return;
    }
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    if (!isListening) {
      recognition.start();
      setIsListening(true);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setSymptoms((prev) => prev + " " + transcript);
        setIsListening(false);
      };

      recognition.onerror = () => setIsListening(false);
    } else {
      recognition.stop();
      setIsListening(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Tell us how you feel
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        {/* Symptom text input */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Describe your symptoms
          </label>
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="e.g., headache, fever, rash..."
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows={5}
          />
          {/* Voice input button */}
          <button
            type="button"
            onClick={handleVoiceInput}
            className={`mt-3 flex items-center px-4 py-2 rounded-lg shadow transition ${
              isListening
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isListening ? <HiStop className="mr-2" /> : <HiMicrophone className="mr-2" />}
            {isListening ? "Stop Recording" : "Speak Symptoms"}
          </button>
        </div>

        {/* Category dropdown */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Select a category (optional)
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">-- Choose a category --</option>
            <option value="General">General</option>
            <option value="Skin">Skin / Rash</option>
            <option value="Stomach">Stomach / Digestive</option>
            <option value="Headache">Headache / Neurology</option>
            <option value="Respiratory">Cough / Breathing</option>
          </select>
        </div>

        {/* Urgency selector */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            How urgent is your situation?
          </label>
          <div className="flex space-x-4">
            {["Low", "Medium", "High"].map((level) => (
              <button
                type="button"
                key={level}
                onClick={() => setUrgency(level)}
                className={`px-4 py-2 rounded-lg border ${
                  urgency === level
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition text-lg font-semibold"
        >
          Find GP
        </button>
      </form>
    </div>
  );
}
