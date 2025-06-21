import { useEffect } from "react";
import "./BookingSuccess.css";

function BookingSuccess() {
  useEffect(() => {
    // ✅ ينقل الشاشة لأعلى فورًا بدون أي حركة
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="aa"></div>
      <section className="booking-success">
        <h1>Booking Successful &#10003;</h1>
        <p>Thank you for choosing our services.</p>
      </section>
    </div>
  );
}

export default BookingSuccess;
