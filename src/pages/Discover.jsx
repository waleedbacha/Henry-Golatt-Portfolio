import React, { useState, Suspense, lazy } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AssessmentIntro from "../components/assessment/AssessmentIntro";
import AssessmentQuestion from "../components/assessment/AssessmentQuestion";
import AssessmentAnalyzing from "../components/assessment/AssessmentAnalyzing";
import AssessmentResult from "../components/assessment/AssessmentResult";
import useAssessment from "../hooks/useAssessment";
import "../styles/discovery.css";

// ✅ Lazy-load the booking modal (only loads when opened)
const BookingModal = lazy(() => import("../components/booking/BookingModal"));

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

  const [bookingOpen, setBookingOpen] = useState(false);

  const handleBook = () => setBookingOpen(true);

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

      {/* ✅ Wrapped in Suspense for lazy loading */}
      <Suspense fallback={null}>
        <BookingModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
          user={user}
          tier={result?.tier}
        />
      </Suspense>
    </div>
  );
};

export default Discover;
