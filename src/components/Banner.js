import './Banner.scss';

function Banner({children}) {
  return (
    <div className="Banner">
      <div className="Overlay" />
      <div className="Content">
        {children}
      </div>
    </div>
  );
}

export default Banner;