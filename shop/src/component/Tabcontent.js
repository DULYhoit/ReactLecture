const Tabcontent = ({ tab ,fade}) => {
  return (
    <div className={'start '+fade}>
      {
        [
          <div>
            <h4>내용1</h4>
          </div>,
          <div>
            <h4>내용2</h4>
          </div>,
          <div>
            <h4>내용3</h4>
          </div>,
        ][tab]
      }
    </div>
  );
};

export default Tabcontent;
