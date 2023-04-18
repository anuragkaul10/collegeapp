export default function CustomImage({ imgSrc, pt }) {
  return (
    <div className="customimage" style={{ paddingTop: pt }}>
      <img src={imgSrc} alt="no image" />
    </div>
  );
}
