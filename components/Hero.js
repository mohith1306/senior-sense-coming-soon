import Countdown from './Countdown';
import AnimatedLogo from './Animatedlogo';
export default function Hero() {
  return (
    <section className="hero">
      <AnimatedLogo/>
      <h1>Senior Sense Coming Soon</h1>
      <p>AI-powered platform for elderly healthcare and finance</p>
      {/* <div style={{ marginTop: '20px' }}>
        <input type="email" placeholder="Enter your email" />
        <button>Notify Me</button>
      </div> */}
      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        <Countdown />
      </div>
    </section>
  );
}
