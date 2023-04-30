export default function AbouUs() {
  return (
    <>
      <h1 className="aboutus-h1">About Us</h1>
      <div className="section">
        <div className="col ownerimage">
          <img src="/images/owners/2.jpeg" className="owner-imagedata" />
          <p className="owner-name">Himanshi</p>
          <p className="owner-details">
            I’m the creator, promotor and passionate designer behind{" "}
            <i style={{ color: "var(--primary-color)" }}>
              t<b>andoori</b>
              nights.
            </i>{" "}
            I want to change the way you use your recipes so you can spend more time cooking. If you have any feedback or need help getting setup, I’d love to hear from you.
          </p>
        </div>

        <div className="col ownerimage">
          <img src="/images/owners/1.jpeg" className="owner-imagedata" />

          <p className="owner-name">Anurag Kaul</p>
          <p className="owner-details">
            As the developer of{" "}
            <i style={{ color: "var(--primary-color)" }}>
              t<b>andoori</b>
              nights
            </i>
            , I handle all of the technical details and making sure you have a smooth experience. If you run into any bugs or issues send me an email to get it fixed.
          </p>
        </div>
      </div>
    </>
  );
}
