import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AssessmentIntro from "../components/assessment/AssessmentIntro";
import AssessmentQuestion from "../components/assessment/AssessmentQuestion";
import AssessmentAnalyzing from "../components/assessment/AssessmentAnalyzing";
import AssessmentResult from "../components/assessment/AssessmentResult";
import BookingModal from "../components/booking/BookingModal"; // ✅ NEW
import useAssessment from "../hooks/useAssessment";
import "../styles/discovery.css";

const Discover = () => {
  const {
    phase,
    currentIndex,
    currentQuestion,
    currentAnswer,
    totalQuestions,
    user,
    result,
    start,
    selectAnswer,
    next,
    back,
    finishAnalyzing,
    reset,
  } = useAssessment();

  const [bookingOpen, setBookingOpen] = useState(false); // ✅ NEW

  const handleBook = () => {
    setBookingOpen(true); // ✅ Open real booking modal
  };

  return (
    <div className="page-wrapper discovery-page">
      <Navbar />

      <main className="discovery-main">
        {phase === "intro" && (
          <AssessmentIntro onStart={start} initialUser={user} />
        )}

        {phase === "question" && currentQuestion && (
          <AssessmentQuestion
            question={currentQuestion}
            currentIndex={currentIndex}
            totalQuestions={totalQuestions}
            selectedOptionId={currentAnswer?.optionId || null}
            onSelect={selectAnswer}
            onNext={next}
            onBack={back}
          />
        )}

        {phase === "analyzing" && (
          <AssessmentAnalyzing onComplete={finishAnalyzing} />
        )}

        {phase === "result" && result && (
          <AssessmentResult
            result={result}
            user={user}
            onReset={reset}
            onBook={handleBook}
          />
        )}
      </main>

      <Footer />

      {/* ✅ Real booking modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        user={user}
        tier={result?.tier}
      />
    </div>
  );
};

export default Discover;
