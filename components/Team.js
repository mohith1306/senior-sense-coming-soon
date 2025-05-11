const team = [
  { name: "Aaditya", role: "Founder" },
  { name: "Adil", role: "Developer" },
  { name: "Rajat", role: "DevOps" },
  { name: "Nasir", role: "UI/UX Designer" },
  { name: "Hammad", role: "AI Developer" },
  { name: "Sharanya", role: "Team Member" },
  { name: "Mohith", role: "Team Member" },
  { name: "Anshif", role: "Team Member" },
  { name: "Anvish", role: "Team Member" },
];

export default function Team() {
  return (
    <section className="team">
      <h2>Meet the Team</h2>
      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-card">
            <div className="avatar" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <a href="#">LinkedIn</a>
          </div>
        ))}
      </div>
    </section>
  );
}
