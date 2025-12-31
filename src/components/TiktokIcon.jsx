
const TiktokIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 23 23" className={className}>
    {/* Base: Red */}
    <path d="M 16.2 2.701 c 0.3 1.4 1.3 2.6 2.6 3.2 a 6.3 6.3 0 0 0 1.4 0.3 v 3 a 9.1 9.1 0 0 1 -2.1 -0.3 a 6.2 6.2 0 0 1 -1.9 -0.9 v 6.4 a 3.9 4.1 0 1 1 -3 -4 v 1.8 a 2.1 2 0 1 0 2 2 V 4.5 h 0 z" fill="#EE1D52" />
    
    {/* Mid: Cyan (slightly left/up) */}
    <path d="M 15.5 2.001 c 0.3 1.4 1.3 2.6 2.6 3.2 a 6.3 6.3 0 0 0 1.4 0.3 v 3 a 9.1 9.1 0 0 1 -2.1 -0.3 a 6.2 6.2 0 0 1 -1.9 -0.9 v 6.4 a 3.9 4.1 0 1 1 -3 -4 v 1.8 a 2.1 2 0 1 0 2 2 V 4 h 0 z" fill="#1aedfcff" />
    
    {/* Thin white highlight - minimal offset, lower opacity */}
    <path d="M 16 2.3 c 0.3 1.4 1.3 2.6 2.6 3.2 a 6.3 6.3 0 0 0 1.4 0.3 v 3 a 9.1 9.1 0 0 1 -2.1 -0.3 a 6.2 6.2 0 0 1 -1.9 -0.9 v 6.4 a 3.9 4.1 0 1 1 -3 -4 v 1.8 a 2.1 2 0 1 0 2 2 V 4 h 0 z" fill="white" opacity="0.9"/>
  </svg>
);

export default TiktokIcon;
