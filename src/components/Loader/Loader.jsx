import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Circles
        height="60"
        width="60"
        color="rgba(124, 4, 4, 0.709)"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
