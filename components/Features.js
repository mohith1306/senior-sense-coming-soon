const features = [
  "Track Medical & Hospital Expenses",
  "Manage Monthly Budget & Bills",
  "AI-based Suggestions for Saving",
  "Friendly UI for Older Users",
];

export default function Features() {
  return (
    <section className="features">
      <h2>Key Features</h2>
      <ul className="feature-list">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">{feature}</li>
        ))}
      </ul>
    </section>
  );
}
