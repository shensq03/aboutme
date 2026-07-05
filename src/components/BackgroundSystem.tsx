export function BackgroundSystem() {
  return (
    <div className="background-system" aria-hidden="true">
      <svg className="orbit-svg" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
        <path d="M-80 260 C260 70 430 510 760 310 C1030 145 1180 110 1510 210" stroke="#6C7CFF" strokeOpacity="0.12" />
        <path d="M-120 600 C220 420 465 720 775 520 C1020 360 1200 410 1510 600" stroke="#6C7CFF" strokeOpacity="0.1" />
        <path d="M240 -80 C430 120 360 300 530 430 C760 610 1030 420 1260 760" stroke="#B9A7FF" strokeOpacity="0.12" />
      </svg>
      <div className="siqi-watermark">Siqi</div>
      <div className="orbit-line one" />
      <div className="orbit-line two" />
      <div className="orbit-line three" />
      <span className="particle" />
      <span className="particle" />
      <span className="particle" />
      <span className="particle" />
      <span className="particle" />
    </div>
  );
}
