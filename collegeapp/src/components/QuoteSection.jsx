import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function QuoteSection() {
  return (
    <div className="section quote">
      <p className="qoute-text">
        <FontAwesomeIcon icon={faQuoteLeft} /> Although the skills aren’t hard to learn, finding the happiness and finding the satisfaction and finding fulfillment in continuously serving somebody else something good to eat, is what makes a really good restaurant.
      </p>
      <p className="qoute-auther">- Fivel Stewart, Chef.</p>
    </div>
  );
}
